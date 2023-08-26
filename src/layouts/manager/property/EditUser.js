import React, { useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { Dialog, DialogTitle, DialogContent, DialogActions, Box } from "@mui/material";
import swal from 'sweetalert2';

import SoftButton from 'components/SoftButton';
import SoftInput from 'components/SoftInput';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import AuthContext from "context/AuthContext";
import refreshAccessToken from 'adminRefresToken';

function EditUser({ propertyId, user, onSave, onClose }) {
  const [position, setPosition] = useState(user.position);
  const [features, setFeatures] = useState(user.features);
  const [loading, setLoading] = useState(false); // Add loading state
  const { managerauthTokens, logoutUser } = useContext(AuthContext);

  console.log(user);

  const handleSave = async (event) => {

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

    if (!features) {
        swal.fire({
          title: "Features is required.",
          icon: "error",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return;
      }

    const newUserData = {
      position: position,
      features: features,
    };

    try {
      setLoading(true); // Set loading state to true during submission
      const newAccessToken = await refreshAccessToken(managerauthTokens?.refresh);
      const response = await fetch(`https://hgpro.theworkflow.nyc/manager/api/edit/property/user/${propertyId}/${user.user.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${newAccessToken}`,
        },
        body: JSON.stringify(newUserData),
      });

      if (response.status === 200) {
        console.log('User updated successfully');
        // onSave(newUserData);
        // window.location.reload()
        onClose(); // Close the popup form after successful submission
        swal.fire({
          title: "User updated successfully",
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
            title: "Failed to update user. Please try again later.",
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
      // Display a generic error message to the user
      swal.fire({
        title: "Failed to update user. Please try again later.",
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
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <div>
        <form id="editForm" onSubmit={handleSave}>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', width: '500px' }}>
            <div>
            <SoftTypography component="label" htmlFor="position" variant="caption" fontWeight="bold">
                Posiotion : 
            </SoftTypography>
            <SoftInput
                type="text"
                id="position"
                value={position} required
                onChange={(e) => setPosition(e.target.value)}
            />
            </div>
            <div>
            <SoftTypography component="label" htmlFor="features" variant="caption" fontWeight="bold">
                Features : 
            </SoftTypography>
            <SoftInput
                type="text"
                id="features"
                value={features} required
                onChange={(e) => setFeatures(e.target.value)}
            />
            </div>
            </Box>
            
        </form>
        </div>
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

// Add PropTypes validation for the props
EditUser.propTypes = {
    user: PropTypes.shape({
      position: PropTypes.string.isRequired,
      features: PropTypes.string.isRequired,
      // Assuming the 'user' prop contains the user details, including the 'email' property
      user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        // Add other user properties if needed
      }).isRequired,
    }).isRequired,
    propertyId: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  

export default EditUser;
