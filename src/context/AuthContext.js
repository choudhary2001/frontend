import React, { createContext, useState, useEffect, useRef } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import swal from 'sweetalert2';
import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials = true;
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => {
    try {
      const storedTokens = localStorage.getItem("authTokens");
      return storedTokens ? JSON.parse(storedTokens) : null;
    } catch (error) {
      console.error("Error parsing authTokens from localStorage:", error);
      return null;
    }
  });

  const [managerauthTokens, setManagerAuthTokens] = useState(() => {
    try {
      const managerstoredTokens = localStorage.getItem("managerauthTokens");
      return managerstoredTokens ? JSON.parse(managerstoredTokens) : null;
    } catch (error) {
      console.error("Error parsing manager authTokens from localStorage:", error);
      return null;
    }
  });

  const [adminauthTokens, setAdminAuthTokens] = useState(() => {
    try {
      const adminStoredTokens = localStorage.getItem("adminauthTokens");
      return adminStoredTokens ? JSON.parse(adminStoredTokens) : null;
    } catch (error) {
      console.error("Error parsing admin authTokens from localStorage:", error);
      return null;
    }
  });

  const [user, setUser] = useState(null);
  const [manager, setManager] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loginUser = async (username, password, otpVerified, setOtpVerified) => {
    try {
      let response;
      if (otpVerified) {
        response = await axios.post("https://hgpro.theworkflow.nyc/authentication/api/signin", {
          username,
          password
        });
      } else {
        // Verify the OTP
        response = await axios.post("https://hgpro.theworkflow.nyc/authentication/api/verify-otp", {
          email,
          otp
        });
      }

      const { data } = response;

      if (response.status === 200) {
        if (data.otp === 'otp') {
          otpVerified = false;
          setOtpVerified(false);
          swal.fire({
            title: "Otp sent successfully to your email.",
            icon: "success",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        } else {
          localStorage.clear();
          setAuthTokens(data);
          setUser(jwt_decode(data.access));
          localStorage.setItem("authTokens", JSON.stringify(data));

          navigate("/dashboard");
          swal.fire({
            title: "Login Successful",
            icon: "success",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
      } else {
        swal.fire({
          title: "Error: " + data.error,
          icon: "error",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      swal.fire({
        title: error,
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'bottom-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (first_name, last_name, email, password, otpVerified) => {
    try {
      let response;
      if (otpVerified) {
        response = await axios.post("https://hgpro.theworkflow.nyc/authentication/api/signup", {
          first_name,
          last_name,
          email,
          password
        });
      } else {
        response = await axios.post("https://hgpro.theworkflow.nyc/authentication/api/verify-otp", {
          email,
          otp
        });
      }

      const { data } = response;

      if (response.status === 200) {
        navigate("/authentication/sign-in");
        swal.fire({
          title: "Registration Successful, Login Now",
          icon: "success",
          toast: true,
          timer: 3000,
          position: 'top-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        swal.fire({
          title: "Error: " + data.error,
          icon: "error",
          toast: true,
          timer: 3000,
          position: 'top-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      swal.fire({
        title: "An error occurred. Please try again.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const loginManager = async (username, password, otpVerified, setOtpVerified) => {
    try {
      let response;
      if (otpVerified) {
        response = await axios.post("https://hgpro.theworkflow.nyc/manager/authentication/api/signin", {
          username,
          password
        });
      } else {
        // Verify the OTP
        response = await axios.post("https://hgpro.theworkflow.nyc/manager/authentication/api/verify-otp", {
          email,
          otp
        });
      }

      const { data } = response;

      if (response.status === 200) {
        if (data.otp === 'otp') {
          otpVerified = false;
          setOtpVerified(false);
          swal.fire({
            title: "Otp sent successfully to your email.",
            icon: "success",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        } else {
          localStorage.clear();
          setManagerAuthTokens(data);
          setManager(jwt_decode(data.access));
          localStorage.setItem("managerauthTokens", JSON.stringify(data));
          localStorage.setItem("manager", 'True');

          navigate("/manager/dashboard");
          swal.fire({
            title: "Login Successful",
            icon: "success",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
      } 
      else {
        swal.fire({
          title: "Error: " + data.error,
          icon: "error",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      swal.fire({
        title: error,
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'bottom-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const registerManager = async (first_name, last_name, email, password, otpVerified) => {
    try {
      let response;
      if (otpVerified) {
        response = await axios.post("https://hgpro.theworkflow.nyc//manager/authentication/api/signup", {
          first_name,
          last_name,
          email,
          password
        });
      } else {
        response = await axios.post("https://hgpro.theworkflow.nyc/manager/authentication/api/verify-otp", {
          email,
          otp
        });
      }

      const { data } = response;

      if (response.status === 200) {
        navigate("/manager/authentication/sign-in");
        swal.fire({
          title: "Registration Successful, Login Now",
          icon: "success",
          toast: true,
          timer: 3000,
          position: 'top-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        swal.fire({
          title: "Error: " + data.error,
          icon: "error",
          toast: true,
          timer: 3000,
          position: 'top-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      swal.fire({
        title: "An error occurred. Please try again.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const adminloginUser = async (username, password) => {
    try {
      const response = await axios.post("https://hgpro.theworkflow.nyc/admin/api/sign-in", {
        username,
        password
      });

      const { data } = response;

      if (response.status === 200) {
        localStorage.clear();
        setAdminAuthTokens(data);
        setAdmin(jwt_decode(data.access));
        localStorage.setItem("adminauthTokens", JSON.stringify(data));
        localStorage.setItem("admin", 'True');
        console.log(localStorage.getItem("admin"))
        navigate("/admin/user");
        swal.fire({
          title: "Login Successful",
          icon: "success",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        swal.fire({
          title: "Error: " + data.error,
          icon: "error",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      swal.fire({
        title: "An error occurred. Please try again.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'bottom-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setManagerAuthTokens(null);
    setAdminAuthTokens(null);
    setUser(null);
    setManager(null);
    setAdmin(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("managerauthTokens");
    localStorage.removeItem("adminauthTokens");
    localStorage.setItem("admin", null);
    localStorage.setItem("manager", null);

    navigate("/authentication/sign-in/");
    swal.fire({
      title: "You have been logged out...",
      icon: "success",
      toast: true,
      timer: 3000,
      position: 'top-right',
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens]);

  useEffect(() => {
    if (managerauthTokens) {
      setManager(jwt_decode(managerauthTokens.access));
    }
    setLoading(false);
  }, [managerauthTokens]);


  useEffect(() => {
    if (adminauthTokens) {
      setAdmin(jwt_decode(adminauthTokens.access));
    }
    setLoading(false);
  }, [adminauthTokens]);


  const contextData = {
    user,
    setUser,
    manager,
    setManager,
    admin,
    setAdmin,
    authTokens,
    managerauthTokens,
    adminauthTokens,
    setAuthTokens,
    setManagerAuthTokens,
    setAdminAuthTokens,
    registerUser,
    adminloginUser,
    loginUser,
    loginManager,
    registerManager,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
export default AuthContext;
