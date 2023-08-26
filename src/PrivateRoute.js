import React, { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import AuthContext from "context/AuthContext";
import Dashboard from "layouts/dashboard";
import Maintenance from "layouts/maintenance";
import Manage from "layouts/manage";
import FrontDesk from "layouts/FrontDesk";
import Communicate from "layouts/communicate";
import ResidentSite from "layouts/residentsite";
import Other from "layouts/other";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import AdminUser from 'layouts/admin/user';
import refreshAccessToken from 'adminRefresToken';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user, manager, admin, adminauthTokens, authTokens, managerauthTokens, logoutUser } = useContext(AuthContext);
  const { pathname } = useLocation();

  // const selectedAuthToken = adminauthTokens || managerauthTokens || authTokens;
  // const fetchData = async () => {
  //   try{
      
  //     const newAccessToken = await refreshAccessToken(selectedAuthToken?.refresh);
  //   }
  //   catch (error) {
  //     console.error("Error fetching data:", error);
  //     logoutUser()
  //   }
  // }

  const shouldRenderSignIn = () => {
    const allowedPaths = [
      '/authentication/sign-in',
      '/authentication/sign-up',
      '/manager/authentication/sign-in',
      '/manager/authentication/sign-up',
      '/admin/sign-in',
    ];
    return allowedPaths.includes(pathname);
  };

  if (!admin && !user && !manager && !shouldRenderSignIn()) {
    return <Navigate to="/admin/sign-in" />;
  }
  // else if (!manager && !shouldRenderSignIn()) {
  //   return <Navigate to="/manager/authentication/sign-in" />;
  // }
  // else if (!user && !shouldRenderSignIn()) {
  //   return <Navigate to="/authentication/sign-in" />;
  // }

 




  return <Element {...rest} />;
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
