import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import swal from 'sweetalert2';

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/login_img.jpg";
import AuthContext from "context/AuthContext";
import jwt_decode from "jwt-decode";
import GoogleLoginButton from 'examples/GoogleLoginButton';

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(true);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { loginUser, setUser, setAuthTokens } = authContext;
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (otpVerified) {
        // Use the loginUser function from the AuthContext
        await loginUser(username, password, otpVerified, setOtpVerified);
        // Rest of the code...
      } else {
        // Verify the OTP
        const m = 'login'
        const otpResponse = await fetch(
          "https://hgpro.theworkflow.nyc/authentication/api/verify-otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, otp, m }),
          }
        );

        const otpData = await otpResponse.json();

        if (otpResponse.status === 200) {
          localStorage.clear();
          setMessage(otpData.success);
          setOtpVerified(true);

          try {
            setAuthTokens(otpData);
            setUser(jwt_decode(otpData.access));
            // Store the token in local storage or a secure cookie
            localStorage.setItem("authTokens", JSON.stringify(otpData));
          } catch (error) {
            setMessage(error);
          }

          // Reset form fields
          setOtp("");
          setMessage("");
          navigate("/dashboard");
        } else {
          setMessage(otpData.error);
        }
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const isSubmitDisabled = isLoading || (!username || !password) || (!otpVerified && !otp);

  const handleResendOTP = async () => {
    // Implement the logic to resend OTP
    try {
      const resendResponse = await fetch(
        "https://hgpro.theworkflow.nyc/authentication/api/resend-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        }
      );

      const resendData = await resendResponse.json();

      if (resendResponse.status === 200) {
        setMessage(resendData.success);
        swal.fire({
          title: "Resend Otp at your email.",
          icon: "success",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        setMessage(resendData.error);
        swal.fire({
          title: "Error: " + resendData.error,
          icon: "error",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };


  const handleGoogleLoginSuccess = (response) => {
    fetch('https://hgpro.theworkflow.nyc/authentication/api/google-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: response.accessToken }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Backend response:', data);
        onSuccess(response);
      })
      .catch((error) => {
        console.error('Error sending token to backend:', error);
        onFailure(error);
      });
  
    console.log('Google login success:', response);
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failure:', error);
  };

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your username and password to sign in"
      image={curved9}
    >
      {message && <p>{message}</p>}
      <SoftBox component="form" role="form" ref={formRef} onSubmit={handleSubmit}>
        {otpVerified ? (
          <>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Username
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="email"
                name="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Password
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;Remember me
              </SoftTypography>
            </SoftBox>
          </>
        ) : (
          <>
            <SoftBox mt={4} mb={1}>
              <SoftInput
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </SoftBox>
            <SoftTypography
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
              onClick={handleResendOTP}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;Resend Otp
            </SoftTypography>
          </>
        )}
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" type="submit" fullWidth disabled={isSubmitDisabled}>
            {isLoading ? "Loading..." : otpVerified ? "Sign In" : "Verify OTP"}
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Do not have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography
              component={Link}
              to="/authentication/forget-password"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Reset Password
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
        <GoogleLoginButton style={{width:"100%", justifyContent:"center"}}
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
        />
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
