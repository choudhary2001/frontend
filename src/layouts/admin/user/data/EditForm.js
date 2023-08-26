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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [password, setPassword] = useState('');
  const { adminauthTokens, logoutUser } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email,
      role,
      password,
    };

    try {
      const newAccessToken = await refreshAccessToken(adminauthTokens?.refresh);
      const response = await fetch('https://hgpro.theworkflow.nyc/admin/api/add/new/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${newAccessToken}`,
        },
        body: JSON.stringify(newUser),
      });

      if (response.status === 200) {
        console.log('User created successfully');
        // window.location.reload()
        onSave(newUser);
        onClose(); // Close the popup form after submission
        swal.fire({
          title: "User created successfully",
          icon: "success",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        console.error('Failed to create user');
        const responseData = await response.json();
        if (responseData.success === false && responseData.error === "login") {
          logoutUser();
          console.log("User needs to log in. Logging out...");
        } else {
          swal.fire({
            title: "Failed to create user.",
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
      console.error('Error occurred while creating user:', error);
    }
  };

  return (
    <Dialog open={true} onClose={onClose} >
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', width: '500px' }}>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  First Name
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                name="first_name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Last Name
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </SoftBox>
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
                  Role
                </SoftTypography>
              </SoftBox>
              <select
                name="role"
                style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="staff">Staff</option>
              </select>
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
  onSave: PropTypes.func.isRequired, // Add onSave to the prop types validation
};

export default EditFormPopup;
