import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import curved6 from "assets/images/curved-images/sign_up.jpg";
import swal from 'sweetalert2';

const Reset = () => {
  const [agreement, setAgreement] = useState(true);
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [otpVerified, setOtpVerified] = useState(true);
  const [changePassword, setChangePassword] = useState(true);
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (otpVerified && changePassword) {
        // Proceed with Reset if OTP is already verified
        const response = await fetch('https://hgpro.theworkflow.nyc/manager/authentication/api/resend-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username,}),
        });

        const data = await response.json();

        if (response.status === 200) {
          setMessage(data.success);
          formRef.current.reset();
          setOtpVerified(false);
          // Handle successful Reset (e.g., redirect to login page)
          swal.fire({
            title: "Otp send successfully to your email.",
            icon: "success",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        } else {
          setMessage(data.error);
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

      } else if(changePassword && !otpVerified) {
        // Verify the OTP
        const m = 'forget'
        const response = await fetch('https://hgpro.theworkflow.nyc/manager/authentication/api/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, otp, m }),
        });

        const otpdata = await response.json();
        if (response.status === 200) {
          setMessage(otpdata.success);
          setChangePassword(false);
          swal.fire({
            title: "Otp verified successfully.",
            icon: "success",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
          
        } else {
          setMessage(otpdata.error);
          swal.fire({
            title: "Error: " + otpdata.error,
            icon: "error",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
      }
      else{
        const response = await fetch('https://hgpro.theworkflow.nyc/manager/authentication/api/forget-password-change', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const changedata = await response.json();
        if (response.status === 200) {
          setMessage(changedata.success);
          setChangePassword(false);
          swal.fire({
            title: "Password chaged successfully.",
            icon: "success",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        } else {
          setMessage(changedata.error);
          swal.fire({
            title: "Error: " + changedata.error,
            icon: "error",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
        navigate("/manager/authentication/sign-in");
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      swal.fire({
        title: "Error: " + data.error,
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'bottom-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isSubmitDisabled = isLoading || !username || (!otpVerified && !otp) || (!changePassword && !password);

  const handleSetAgreement = () => setAgreement(!agreement);

  return (
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create a new account in your project for free."
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Reset Your Password
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={2} pb={3} px={3}>
          {message && <p>{message}</p>}
          <SoftBox component="form" role="form" ref={formRef} onSubmit={handleSubmit}>
            {otpVerified && changePassword ? (
              <>
                <SoftBox mb={2}>
                  <SoftInput
                    type="email"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                  />
                </SoftBox>
              </>
            ) : (
                <>
                {!otpVerified && changePassword ? (
                    <SoftBox mt={4} mb={1}>
                      <SoftInput
                        type="text"
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </SoftBox>
                  ) : (
                      
                    <SoftBox mt={4} mb={1}>
                    <SoftInput
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </SoftBox>
                )}
              </>

            )}
            <SoftBox mt={4} mb={1}>
              <SoftButton
                variant="gradient"
                color="dark"
                type="submit"
                fullWidth
                disabled={isSubmitDisabled}
              >
                {isLoading ? 'Loading...' : otpVerified && changePassword ? 'Reset'  : !otpVerified && changePassword ? 'Verify OTP' : 'Change Password'}
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/manager/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
};

export default Reset;
