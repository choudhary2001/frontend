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
import 'layouts/manager/property/AddUser.css'


function EditFormPopup({ onClose, onSave }) {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const { adminauthTokens, authTokens, managerauthTokens, logoutUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false); // Add loading state

  const selectedAuthToken = adminauthTokens || managerauthTokens || authTokens;

  const MAX_SUBJECT_LENGTH = 120;
  const MAX_DESCRIPTION_LENGTH = 2500;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (subject.trim() === '' || description.trim() === '') {
      swal.fire({
        title: "Please fill the required fields.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'bottom-left',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } 

    else if (subject.length > MAX_SUBJECT_LENGTH || description.length > MAX_DESCRIPTION_LENGTH) {
      swal.fire({
        title: "Exceeded maximum character limit.",
        text: `Subject should be ${MAX_SUBJECT_LENGTH} characters or less, and description should be ${MAX_DESCRIPTION_LENGTH} characters or less.`,
        icon: "error",
        toast: true,
        timer: 5000,
        position: 'bottom-left',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }

    else{


      const formData = new FormData();
      formData.append('name', subject);
      formData.append('description', description);
      formData.append('image', selectedImage);

      try {
        setLoading(true);
        const newAccessToken = await refreshAccessToken(selectedAuthToken?.refresh);
        const response = await fetch('https://hgpro.theworkflow.nyc/support/api/add/new/query', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
          body: formData,
        });

        if (response.status === 200) {
          console.log('Query added successfully');
          // onSave(formData); // You can pass the form data to the onSave function if needed
          onClose(); // Close the popup form after submission
          swal.fire({
            title: "Query added successfully",
            icon: "success",
            toast: true,
            timer: 3000,
            position: 'bottom-left',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        } else {
          console.error('Failed to add query');
          const responseData = await response.json();
          if (responseData.success === false && responseData.error === "login") {
            logoutUser();
            console.log("User needs to log in. Logging out...");
          } else {
            swal.fire({
              title: "Failed to add query.",
              icon: "error",
              toast: true,
              timer: 3000,
              position: 'bottom-left',
              timerProgressBar: true,
              showConfirmButton: false,
            });
          }
        }
      } catch (error) {
        console.error('Error occurred while adding query:', error);
      }
      finally{
        setLoading(false);
      }
    }
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Add Query</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', width: '500px' }}>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Subject : 
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                required
                maxLength={MAX_SUBJECT_LENGTH} 
                onChange={(e) => setSubject(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Description : 
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                name="description"
                placeholder="Description"
                value={description}
                maxLength={MAX_DESCRIPTION_LENGTH} 
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Document : 
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="file"
                name="image"
                placeholder="Image"
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </SoftBox>
          </Box>
        </form>
      </DialogContent>
      <DialogActions>
        <SoftButton onClick={onClose}>Cancel</SoftButton>
        <SoftButton onClick={handleSubmit} variant="gradient" color="dark" type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save"}
        </SoftButton>
      </DialogActions>
    </Dialog>
  );
}

EditFormPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func, 
};

export default EditFormPopup;
