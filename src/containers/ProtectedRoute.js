import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import SecondaryHeader from "../Layout/SecondaryHeader";
import ResponsiveAppBar from "../Layout/PrimaryHeader";

const ProtectedRoute = ({children}) => {
  const isLoggedIn = true;
  
  return isLoggedIn ?
    <>
      <ResponsiveAppBar />
      <SecondaryHeader />
      <Outlet/>
    </>: 
    <Navigate to="/login" replace />
}
// const ProtectedRoute = ({children}) => {
//     const isLoggedIn = true;
//     if (!isLoggedIn) {
//       return <Navigate to="/login" replace />
//     }
//     return children;
// }

// const ProtectedRoute = ({component: Component, ...rest}) => {
//     return (
//         <Route 
//             {...rest} 
//             render={(props) => (
//                 isLoggedIn ? <Component {...props} /> : <Navigate to='/' state={{from: props.location}} />
//             )}>
//         </Route>
//     )
// }

export default ProtectedRoute;