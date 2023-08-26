import { useState, useEffect, useMemo } from "react";
import React, { useContext } from "react";
import AuthContext from "context/AuthContext";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// HG Pro React components
import SoftBox from "components/SoftBox";

// HG Pro React examples
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import ShiftLog from "examples/ShiftLog";
// HG Pro React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// HG Pro React routes
import routes from "routes";
import managerroute from "managerroute";
import adminroutes from "adminroutes";
import Dashboard from "layouts/dashboard";
import Maintenance from "layouts/maintenance";
import Manage from "layouts/manage";
import FrontDesk from "layouts/FrontDesk";
import Communicate from "layouts/communicate";
import ResidentSite from "layouts/residentsite";
import Other from "layouts/other";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SiteMap from "layouts/sitemaps";
import Local_Link from "layouts/local_link";
import Units from "layouts/units";
import Calendar from "layouts/Calendar";
import Library from "layouts/library";
import Reservations from "layouts/reservations";
import PetRegistry from "layouts/petregistry";
import SignIn from "layouts/authentication/sign-in";
import AdminSignIn from "layouts/authentication/admin-sign-in";
import SignUp from "layouts/authentication/sign-up";
import ForgetPassword from "layouts/authentication/forget";
import ManagerSignIn from "layouts/manager/authentication/sign-in";
import ManagerSignUp from "layouts/manager/authentication/sign-up";
import ManagerForgetPassword from "layouts/manager/authentication/forget";
import Property from "layouts/manager/property"
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from 'context/AuthContext';

import AdminUser from 'layouts/admin/user'
// HG Pro React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator, setOpenShiftLog } from "context";

// Images
import brand from "assets/images/logo-ct.png";

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor, openShiftLog } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();



  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleShiftLogOpen = () => setOpenShiftLog(dispatch, !openShiftLog);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);



  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      title="Comming Soon"
    // onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );


  const adminn = localStorage.getItem("admin");
  const managerr = localStorage.getItem("manager");
  const userr = localStorage.getItem("authTokens");


  // const { admin } = useContext(AuthContext);
  console.log(adminn)
  return adminn === "True" ? (

    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={brand}
              brandName="HG Pro | Admin"
              routes={adminroutes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
            
        {layout === "vr" && <Configurator /> }
        <Routes>
          {adminn && (
            <>
              <Route path="*" element={<Navigate to="/admin/user" />} />
              <Route path="/admin/sign-in" element={<Navigate to="/admin/user" />} />
              <Route path="/manager/authentication/sign-in" element={<Navigate to="/admin/user" />} />
              <Route path="/manager/authentication/sign-up" element={<Navigate to="/admin/user" />} />
              <Route path="/authentication/sign-in" element={<Navigate to="/admin/user" />} />
              <Route path="/authentication/sign-up" element={<Navigate to="/admin/user" />} />
              <Route path="/admin/user" element={<PrivateRoute element={AdminUser} />} />
            </>
          )}
          <Route path="/admin/sign-in" element={<AdminSignIn />} />
          <Route path="*" element={<Navigate to="/admin/sign-in" />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>

  ) : (

    managerr === "True" ? (
      <>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {layout === "dashboard" && (
              <>
                <Sidenav
                  color={sidenavColor}
                  brand={brand}
                  brandName="HG Pro | Manager"
                  routes={managerroute}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                />
                <Configurator />
                <ShiftLog/>
                {configsButton}
              </>
            )}
            {layout === "vr" && <Configurator /> && <ShiftLog/>}

            <Routes>

              {managerr && (
                <>
                  <Route path="/manager/authentication/sign-in" element={<Navigate to="/manager/dashoard" />} />
                  <Route path="/manager/authentication/sign-up" element={<Navigate to="/manager/dashboard" />} />
                  <Route path="/authentication/sign-in" element={<Navigate to="/manager/dashoard" />} />
                  <Route path="/authentication/sign-up" element={<Navigate to="/manager/dashboard" />} />
                  <Route path="/admin/sign-in" element={<Navigate to="/manager/dashboard" />} />
                  <Route path="*" element={<Navigate to="/manager/dashboard" />}  />
                  <Route path="/manager/dashboard" element={<PrivateRoute element={SiteMap} />} />
                  <Route path="/manager/profile" element={<PrivateRoute element={Profile} />} />
                  <Route path="/manager/local-link" element={<PrivateRoute element={Local_Link} />} />
                  <Route path="/manager/manage" element={<PrivateRoute element={Manage} />} />
                  <Route path="/manager/units/occupants" element={<PrivateRoute element={Units} />} />
                  <Route path="/manager/calendar" element={<PrivateRoute element={Calendar} />} />
                  <Route path="/manager/library" element={<PrivateRoute element={Library} />} />
                  <Route path="/manager/reservations" element={<PrivateRoute element={Reservations} />} />
                  <Route path="/manager/pet/registry" element={<PrivateRoute element={PetRegistry} />} />
                  <Route path="/manager/front-desk" element={<PrivateRoute element={FrontDesk} />} />
                  <Route path="/manager/maintenance" element={<PrivateRoute element={Maintenance} />} />
                  <Route path="/manager/maintenance/new/request" element={<PrivateRoute element={Maintenance} />} />
                  <Route path="/manager/maintenance/vendor/directory" element={<PrivateRoute element={Tables} />} />
                  <Route path="/manager/communicate" element={<PrivateRoute element={Communicate} />} />
                  <Route path="/manager/resident-site" element={<PrivateRoute element={ResidentSite} />} />
                  <Route path="/manager/other" element={<PrivateRoute element={Other} />} />
                  <Route path="/manager/property" element={<PrivateRoute element={Property} />} />
                </>
              )}

              <Route path="/manager/authentication/sign-in" element={<ManagerSignIn />} />
              <Route path="/manager/authentication/sign-up" element={<ManagerSignUp />} />
              <Route path="/manager/authentication/forget-password" element={<ManagerForgetPassword />} />
            </Routes>
          </ThemeProvider>
        </AuthProvider>

      </>
    ) :
      (
        userr ? (
          <>

            <AuthProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {layout === "dashboard" && (
                  <>
                    <Sidenav
                      color={sidenavColor}
                      brand={brand}
                      brandName="HG Pro"
                      routes={routes}
                      onMouseEnter={handleOnMouseEnter}
                      onMouseLeave={handleOnMouseLeave}
                    />
                    <Configurator />
                    <ShiftLog/>
                    {configsButton}
                  </>
                )}
                {layout === "vr" && <Configurator /> && <ShiftLog/>}

                <Routes>

                  {userr && (
                    <>
                      <Route path="/admin/sign-in" element={<Navigate to="/dashboard" />} />
                      <Route path="/manager/authentication/sign-in" element={<Navigate to="/dashoard" />} />
                      <Route path="/manager/authentication/sign-up" element={<Navigate to="/dashboard" />} />
                      <Route path="/authentication/sign-in" element={<Navigate to="/dashoard" />} />
                      <Route path="/authentication/sign-up" element={<Navigate to="/dashboard" />} />
                      <Route path="*" element={<Navigate to="/dashboard" />}  />
                      <Route path="/dashboard" element={<PrivateRoute element={SiteMap} />} />
                      <Route path="/profile" element={<PrivateRoute element={Profile} />} />
                      <Route path="/local-link" element={<PrivateRoute element={Local_Link} />} />
                      <Route path="/manage" element={<PrivateRoute element={Manage} />} />
                      <Route path="/units/occupants" element={<PrivateRoute element={Units} />} />
                      <Route path="/calendar" element={<PrivateRoute element={Calendar} />} />
                      <Route path="/library" element={<PrivateRoute element={Library} />} />
                      <Route path="/reservations" element={<PrivateRoute element={Reservations} />} />
                      <Route path="/pet/registry" element={<PrivateRoute element={PetRegistry} />} />
                      <Route path="/front-desk" element={<PrivateRoute element={FrontDesk} />} />
                      <Route path="/maintenance" element={<PrivateRoute element={Maintenance} />} />
                      <Route path="/maintenance/new/request" element={<PrivateRoute element={Maintenance} />} />
                      <Route path="/maintenance/vendor/directory" element={<PrivateRoute element={Tables} />} />
                      <Route path="/communicate" element={<PrivateRoute element={Communicate} />} />
                      <Route path="/resident-site" element={<PrivateRoute element={ResidentSite} />} />
                      <Route path="/other" element={<PrivateRoute element={Other} />} />
                    </>
                  )}

                </Routes>
              </ThemeProvider>
            </AuthProvider>

          </>

        ) :
          (
            <>

              <AuthProvider>
                <ThemeProvider theme={theme}>
                  <CssBaseline />

                  <Routes>
                    <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
                    <Route path="/authentication/sign-in" element={<SignIn />} />
                    <Route path="/authentication/sign-up" element={<SignUp />} />
                    <Route path="/authentication/forget-password" element={<ForgetPassword />} />
                    <Route path="/admin/sign-in" element={<AdminSignIn />} />
                    <Route path="/manager/authentication/sign-in" element={<ManagerSignIn />} />
                    <Route path="/manager/authentication/sign-up" element={<ManagerSignUp />} />
                    <Route path="/manager/authentication/forget-password" element={<ManagerForgetPassword />} />
                  </Routes>
                </ThemeProvider>
              </AuthProvider>

            </>

          )

      )

  );
}
