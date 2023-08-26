import { Dialog, DialogTitle, DialogContent, DialogActions, Box } from "@mui/material";
import SoftButton from "components/SoftButton";
import PropTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import swal from 'sweetalert2';
import AuthContext from "context/AuthContext";
import refreshAccessToken from 'adminRefresToken';
import './AddUser.css'

function AddUser({ propertyId, onClose, onSave }) {
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [features, setFeatures] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const { managerauthTokens, logoutUser } = useContext(AuthContext);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!position) {
      swal.fire({
        title: "Position is required.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'bottom-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }

    const newProperty = {
      email : email,
      position: position,
      features: features,
      propertyId : propertyId,
    };

    try {
      setLoading(true); // Set loading state to true during submission
      const newAccessToken = await refreshAccessToken(managerauthTokens?.refresh);
      const response = await fetch('https://hgpro.theworkflow.nyc/manager/api/add/new/property/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${newAccessToken}`,
        },
        body: JSON.stringify(newProperty),
      });

      if (response.status === 200) {
        console.log('User added successfully');
        // onSave(newProperty);
        // window.location.reload()
        onClose(); // Close the popup form after successful submission
        swal.fire({
          title: "User added successfully",
          icon: "success",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
          customClass: {
            container: 'custom-swal', // Apply the custom CSS class to the Swal dialog container
          },
        });
      } else {
        // Handle specific error cases and display user-friendly error messages
        const responseData = await response.json();
        if (responseData.success === false && responseData.error === "login") {
          logoutUser();
          console.log("User needs to log in. Logging out...");
        } else {
          swal.fire({
            title: "Failed to add user. Please try again later.",
            icon: "error",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
            customClass: {
                container: 'custom-swal', // Apply the custom CSS class to the Swal dialog container
            },
          });
        }
      }
    } catch (error) {
      console.error('Error occurred while creating property:', error);
      // Display a generic error message to the user
      swal.fire({
        title: "Failed to create property. Please try again later.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'bottom-right',
        timerProgressBar: true,
        showConfirmButton: false,
        customClass: {
            container: 'custom-swal', // Apply the custom CSS class to the Swal dialog container
        },
      });
    } finally {
      setLoading(false); // Revert loading state to false after submission
    }
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
    }
  };

  return (
    <Dialog open={true} onClose={handleClose} style={{zIndex:"99999"}}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <form id="editForm" onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', width: '500px' }}>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" htmlFor="userInput" variant="caption" fontWeight="bold">
                  User Email
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="email"
                id="userInput"
                name="user"
                placeholder="User Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" htmlFor="positionInput" variant="caption" fontWeight="bold">
                  Posiotion
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                id="positionInput"
                name="position"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" htmlFor="featuresInput" variant="caption" fontWeight="bold">
                  Features (separate with commas)
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                id="featuresInput"
                name="features"
                placeholder="Features"
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
              />
            </SoftBox>
          </Box>
        </form>
      </DialogContent>
      <DialogActions>
        <SoftButton onClick={handleClose} disabled={loading}>Cancel</SoftButton>
        <SoftButton  variant="gradient" color="dark" type="submit" form="editForm" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </SoftButton>
      </DialogActions>
    </Dialog>
  );
}

AddUser.propTypes = {
    propertyId: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired, // Add onSave to the prop types validation
};

export default AddUser;
