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

const SignUp = () => {
  const [agreement, setAgreement] = useState(true);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [otpVerified, setOtpVerified] = useState(true);
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (otpVerified) {
        // Proceed with signup if OTP is already verified
        const response = await fetch('https://hgpro.theworkflow.nyc/authentication/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ first_name, last_name, username, password }),
        });

        const data = await response.json();

        if (response.status === 200) {
          setMessage(data.success);
          formRef.current.reset();
          setOtpVerified(false);
          // Handle successful signup (e.g., redirect to login page)
        } else {
          setMessage(data.error);
        }
      } else {
        // Verify the OTP
        const response = await fetch('https://hgpro.theworkflow.nyc/authentication/api/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, otp }),
        });

        const data = await response.json();

        if (response.status === 200) {
          setMessage(data.success);
          setOtpVerified(true);
          navigate('/authentication/sign-in');
        } else {
          setMessage(data.error);
        }
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const isSubmitDisabled = isLoading || !first_name || !last_name || !username || !password;

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
            Register with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator />
        <SoftBox pt={2} pb={3} px={3}>
          {message && <p>{message}</p>}
          <SoftBox component="form" role="form" ref={formRef} onSubmit={handleSubmit}>
            {otpVerified ? (
              <>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="First Name"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="Last Name"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    type="email"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </SoftBox>
              </>
            ) : (
              <SoftBox mt={4} mb={1}>
                <SoftInput
                  type="text"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </SoftBox>
            )}
            <SoftBox mt={4} mb={1}>
              <SoftButton
                variant="gradient"
                color="dark"
                type="submit"
                fullWidth
                disabled={isSubmitDisabled}
              >
                {isLoading ? 'Loading...' : otpVerified ? 'Sign Up' : 'Verify OTP'}
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
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

export default SignUp;
