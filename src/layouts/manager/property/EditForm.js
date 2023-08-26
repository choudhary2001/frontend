import { Dialog, DialogTitle, DialogContent, DialogActions, Box } from "@mui/material";
import SoftButton from "components/SoftButton";
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import swal from 'sweetalert2';
import AuthContext from "context/AuthContext";
import refreshAccessToken from 'adminRefresToken';

function EditFormPopup({ onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const { managerauthTokens, logoutUser } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title) {
      swal.fire({
        title: "Title is required.",
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
      title: title,
    };

    try {
      setLoading(true); // Set loading state to true during submission
      const newAccessToken = await refreshAccessToken(managerauthTokens?.refresh);
      const response = await fetch('https://hgpro.theworkflow.nyc/manager/api/add/new/property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${newAccessToken}`,
        },
        body: JSON.stringify(newProperty),
      });

      if (response.status === 200) {
        console.log('Property created successfully');
        // onSave(newProperty);
        // window.location.reload()
        onClose(); // Close the popup form after successful submission
        swal.fire({
          title: "Property created successfully",
          icon: "success",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        // Handle specific error cases and display user-friendly error messages
        const responseData = await response.json();
        if (responseData.success === false && responseData.error === "login") {
          logoutUser();
          console.log("User needs to log in. Logging out...");
        } else {
          swal.fire({
            title: "Failed to create property. Please try again later.",
            icon: "error",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
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
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Add Property</DialogTitle>
      <DialogContent>
        <form id="editForm" onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', width: '500px' }}>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" htmlFor="titleInput" variant="caption" fontWeight="bold">
                  Title
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                id="titleInput"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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

EditFormPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired, // Add onSave to the prop types validation
};

export default EditFormPopup;
