import React, { useContext, useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import Table from "examples/Tables/Table";
import swal from 'sweetalert2';
import AuthContext from "context/AuthContext";
import EditFormPopup from "layouts/admin/user/data/EditForm";
import Card from "@mui/material/Card";
import refreshAccessToken from 'adminRefresToken';

function UserData() {
  const { adminauthTokens, logoutUser } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [shouldRefreshData, setShouldRefreshData] = useState(false);

  useEffect(() => {
    fetchData();
  }, [shouldRefreshData]);


  console.log(localStorage.getItem("adminauthTokens"))
  console.log(adminauthTokens)

  
  const fetchData = async () => {
    try {
      const newAccessToken = await refreshAccessToken(adminauthTokens?.refresh);
      console.log(newAccessToken)
      const response = await fetch("https://hgpro.theworkflow.nyc/admin/api/users", {
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        setUserData(data.users);
        setFilteredData(data.users);
      } else {
        const responseData = await response.json();
        if (responseData.success === false && responseData.error === "login") {
          logoutUser();
          // <Navigate to="/admin/sign-in" />
          console.log("User needs to log in. Logging out...");
        }
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error while fetching user data:", error);
    }
  };

  const handleSave = async (newUser) => {
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
        setShouldRefreshData(true);
        setIsPopupOpen(false);
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

  const handleStatusChange = async (e, userId) => {
    const newStatus = e.target.value;
    const updatedUserData = userData.map((user) =>
      user.id === userId ? { ...user, is_active: newStatus === "Authenticated" } : user
    );
    setUserData(updatedUserData);
    setFilteredData(updatedUserData);

    try {
      const newAccessToken = await refreshAccessToken(adminauthTokens?.refresh);
      const response = await fetch("https://hgpro.theworkflow.nyc/admin/api/users/change/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newAccessToken}`,
        },
        body: JSON.stringify({ status: newStatus, userId }),
      });

      if (response.status === 200) {
        swal.fire({
          title: "Status Change successfully.",
          icon: "success",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
        console.log("Status change successful!");
      } else {
        const responseData = await response.json();
        if (responseData.success === false && responseData.error === "login") {
          logoutUser();
          console.log("User needs to log in. Logging out...");
        } else {
          console.error("Status change failed.");
          swal.fire({
            title: "Status Change Failed.",
            icon: "error",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
          setUserData(userData);
          setFilteredData(userData);
        }
      }
    } catch (error) {
      console.error("Error occurred while changing status:", error);
      swal.fire({
        title: "An error occurred. Please try again.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'bottom-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
      setUserData(userData);
      setFilteredData(userData);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`https://hgpro.theworkflow.nyc/admin/api/users/delete/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${adminauthTokens?.access}`,
        },
      });

      if (response.status === 200) {
        console.log("User deleted successfully!");
        const updatedUserData = userData.filter((user) => user.id !== userId);
        setUserData(updatedUserData);
        setFilteredData(updatedUserData);
      } else {
        console.error("Failed to delete user.");
        swal.fire({
          title: "User Deletion Failed.",
          icon: "error",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Error occurred while deleting user:", error);
      swal.fire({
        title: "An error occurred. Please try again.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'bottom-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm.trim() === "") {
      setFilteredData(userData);
    } else {
      const filteredUsers = userData.filter((user) =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredUsers);
    }
  };

  return (
    <Card>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        p={1}
        style={{ borderBottom: "1px solid grey" }}
      >
        <SoftTypography variant="h6">
          All Users ({userData.length})
        </SoftTypography>
        <SoftBox display="flex">
          <SoftButton
            variant="outlined"
            color="info"
            size="small"
            style={{ margin: "3px" }}
            onClick={() => setIsPopupOpen(true)}
          >
            New User
          </SoftButton>
          <SoftBox
            sx={{ display: "flex", alignItems: "center", flexWrap: "no-wrap", padding: "2px" }}
          >
            <SoftInput
              sx={{ margin: "2px" }}
              placeholder="Search User"
              value={searchTerm}
              onChange={handleSearch}
            />
          </SoftBox>
        </SoftBox>
      </SoftBox>
      {filteredData.length > 0 ? (
        <Table
          columns={[
            { name: "User", align: "left" },
            { name: "Joined Date", align: "center" },
            { name: "Role", align: "center" },
            { name: "Status", align: "center" },
            { name: "Details", align: "center" },
            { name: "Delete", align: "center" },
          ]}
          rows={filteredData.map((user) => ({
            User: (
              <SoftBox style={{ display: "flex" }}>
                <SoftAvatar />
                <SoftBox>
                  <div>
                    {user.first_name} {user.last_name}
                  </div>
                  <div>{user.email}</div>
                </SoftBox>
              </SoftBox>
            ),
            "Joined Date": user.joined_date,
            Role: user.is_superuser ? "Admin" : user.is_staff ? "Manager" : "User",
            Status: (
              <SoftBox>
                <select
                  style={{ padding: "5px", borderRadius: "5px" }}
                  value={user.is_active ? "Authenticated" : "Not Authenticated"}
                  onChange={(e) => handleStatusChange(e, user.id)}
                >
                  <option value="Authenticated">Authenticated</option>
                  <option value="Not Authenticated">Not Authenticated</option>
                </select>
              </SoftBox>
            ),
            Details: (
              <SoftButton
                variant="outlined"
                color="info"
                size="small"
                style={{ margin: "3px" }}
              >
                View
              </SoftButton>
            ),
            Delete: (
              <SoftButton
                variant="outlined"
                color="primary"
                size="small"
                style={{ margin: "3px" }}
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </SoftButton>
            ),
          }))}
        />
      ) : (
        <div style={{margin:"15px", fontSize:"17px", textAlign:"center"}}>Loading user data...</div>
      )}

      {isPopupOpen && (
        <EditFormPopup
          onClose={() => 
            {
              setIsPopupOpen(false);
              fetchData();
            }
          }
          onSave={handleSave}
        />
      )}
    </Card>
  );
}

export default UserData;
