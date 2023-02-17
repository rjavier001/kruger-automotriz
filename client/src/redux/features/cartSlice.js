import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  /* TRAE DEL LOCAL STORAGE Y SI NO LO SETEA COMO ARRAY VACIO */
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartTotalWeight: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /* FUNCION ADD TO CART */
    addToCart(state, action) {
      /* verifica si el index del producto ya esta guardado en el payload para no guardarlo de nuevo */
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      /*cuando ya hay un objeto del mismo ID soloincrementa la cantidad   */
      if (itemIndex >= 0) {
        if (
          state.cartItems[itemIndex].stock >
          state.cartItems[itemIndex].cartQuantity
        ) {
          state.cartItems[itemIndex].cartQuantity += 1;
          state.cartItems[itemIndex].cartWeight += action.payload.weight;
          toast.info("uno mas añadido", {
            position: "bottom-left",
          });
        } else {
          toast.error("No hay suficiente stock", {
            position: "bottom-left",
          });
        }
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: action.payload.quantity,
          cartWeight: action.payload.weight,
        };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} anadido al carrito`, {
          position: "bottom-left",
        });
      }
      /* GUARDA EN LOCAL STORAGE EL ITEM ANADIDO AL CARRITO */
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      /*  state.cartTotalWeight =
        state.cartTotalWeight + state.cartItems[itemIndex].weight; */
    },
    /* FUNCION REMOVER DEL CARRO */
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} eliminado del carrito`, {
        position: "bottom-left",
      });
    },
    /* FUNCION DECREMENTO DE ITEM  */
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (carItem) => carItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`Se quito un ${action.payload.name} del carrito`, {
          position: "bottom-left",
        });
      } else if (
        /* SI SOLO HAY 1 ITEM EN EL CARRITO ENTONCES SE ELIMINA */
        state.cartItems[itemIndex].cartQuantity === 1
      ) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.error(`${action.payload.name} eliminado del carrito`, {
          position: "bottom-left",
        });
      }
    },
    /* FUNCION CLEAR CART */
    clearCart(state, action) {
      state.cartItems = [];
      toast.error("Se limpio tu carrito", {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    paymentClear(state, action) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    /* FUNCTION CALCULATE TOTAL */
    getTotal(state, action) {
      let { total, quantity, weight } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity, cartWeight } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          cartTotal.weight += cartWeight;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
          weight: 0,
        }
      );
      /* Actualizamos el state */
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
      state.cartTotalWeight = weight;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotal,
  paymentClear,
} = cartSlice.actions;

export default cartSlice.reducer;
