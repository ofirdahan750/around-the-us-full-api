import {Navigate} from "react-router-dom";

const ProtectedRoute = ({isLoggedIn,isLoading ,children, ...props}) => {
  if(isLoading) return
  return isLoggedIn ? children : <Navigate {...props} to="/signin" />;
};

export default ProtectedRoute;
