import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box } from "@mui/material";
import SoftButton from "components/SoftButton";
import PropTypes from 'prop-types';
import { useState } from 'react';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";

function EditFormPopup({ onClose }) {
  const [email, setEmail] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [address, setAddress] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // Perform necessary actions, e.g., update profile information
    onClose(); // Close the popup form after submission
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Edit Profile Information</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth:'100%', width:'500px' }}>
           
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Email
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Home Phone
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                name="home_phone"
                placeholder="Home Phone"
                value={email}
                onChange={(e) => setHomePhone(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Cell Phone
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                name="cell_phone"
                placeholder="Cell Phone"
                value={email}
                onChange={(e) => setCellPhone(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Profile picture &nbsp;
              </SoftTypography>
              <SoftTypography
                variant="button"
                fontWeight="regular"
              >
                &nbsp;&nbsp; Supported files JPG, JPEG, PNG of up to 4MB &nbsp;
              </SoftTypography>
              <SoftInput type="file" accept="image/*" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Address
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                name="address"
                placeholder="Address"
                value={email}
                onChange={(e) => setAddress(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Street Address
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                name="street_address"
                placeholder="Street Address"
                value={email}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                City
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                name="city"
                placeholder="City"
                value={email}
                onChange={(e) => setCity(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                State
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                name="state"
                placeholder="State"
                value={email}
                onChange={(e) => setState(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Zip Code
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="number"
                name="zip_code"
                placeholder="Zip Code"
                value={email}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Emergency Phone
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                name="emergency_phone"
                placeholder="Emergency Phone"
                value={email}
                onChange={(e) => setEmergencyPhone(e.target.value)}
              />
            </SoftBox>

          </Box>
        </form>
      </DialogContent>
      <DialogActions>
        <SoftButton onClick={onClose}>Cancel</SoftButton>
        <SoftButton onClick={handleSubmit} variant="gradient" color="dark" type="submit">
          Save
        </SoftButton>
      </DialogActions>
    </Dialog>
  );
}

EditFormPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditFormPopup;
