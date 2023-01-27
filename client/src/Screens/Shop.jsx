import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CardComp from '../Components/CardComp'
import CarouselComp from '../Components/CarouselComp'



const list=[
    {
        "id":1,
        "name":"test",
        "subtitulo":"esto es un subtitulo",
        "image": "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        "id":2,
        "name":"test1",
        "subtitulo":"esto es un subtitulo2",
        "image": "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        "id":3,
        "name":"test2",
        "subtitulo":"esto es un subtitulo2",
        "image": "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        "id":4,
        "name":"test3",
        "subtitulo":"esto es un subtitulo2",
        "image": "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
]

let ima = list.map((item) => item.image);
console.log(ima);

const Shop = () => {
  const { products } = useSelector((state) => state.data);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <>
    
    <CarouselComp items={products}/>


    <Container>
    <Grid item container spacing={2} marginTop="2px"  >
        {list.map((item,i)=>(
            <Grid key={i} item xs={12} md={4} sm={6} spacing={2} justify="center" >
                <CardComp title={item.name} subtitle={item.subtitulo} imageUrl={"https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Shop;
