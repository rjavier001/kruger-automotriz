import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";

const ProtectedPageAdmin = ({ children }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if(user?.role !== 'admin')dispatch(setAuthModalOpen(!user));
  }, [user, dispatch]);

  return (
    user?.role == 'admin' ? children : null
  );
};

export default ProtectedPageAdmin;