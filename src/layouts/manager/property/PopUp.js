import React, { useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import AddUser from "layouts/manager/property/AddUsers";
import Table from "examples/Tables/Table";
import refreshAccessToken from 'adminRefresToken';
import swal from 'sweetalert2';
import AuthContext from "context/AuthContext";
import EditUser from './EditUser'; // Replace './EditUser' with the correct path to your edit user component.


const PropertyPopup = ({ selectedProperty, onClose }) => {

  if (!selectedProperty) return null;
  const [userToEdit, setUserToEdit] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [propertyUserData, setPropertyUserData] = useState([]);
  const { managerauthTokens, logoutUser } = useContext(AuthContext);

  const [shouldRefreshData, setShouldRefreshData] = useState(false);


  useEffect(() => {
    fetchData(selectedProperty.property_id);
  }, [shouldRefreshData]);


  console.log(localStorage.getItem("managerauthTokens"))
  console.log(managerauthTokens)


  const fetchData = async (propertyId) => {
    try {
      const newAccessToken = await refreshAccessToken(managerauthTokens?.refresh);
      console.log(newAccessToken)
      const response = await fetch(`https://hgpro.theworkflow.nyc/manager/api/property/users/${propertyId}`, {
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        setPropertyUserData(data.users);
      } else {
        const responseData = await response.json();
        if (responseData.success === false && responseData.error === "login") {
          logoutUser();
          // <Navigate to="/manager/sign-in" />
          console.log("User needs to log in. Logging out...");
        }
        console.error("Failed to fetch property data");
      }
    } catch (error) {
      console.error("Error while fetching property data:", error);
    }
  };

  const handleDeleteUser = async (email) => {
    const P_Id = selectedProperty.property_id;
    try {
      const newAccessToken = await refreshAccessToken(managerauthTokens?.refresh);
      const response = await fetch(`https://hgpro.theworkflow.nyc/manager/api/delete/property/user/${P_Id}/${email}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      });

      if (response.status === 200) {
        console.log("User deleted successfully!");
        fetchData(P_Id)
      } else {
        console.error("Failed to delete property.");
        swal.fire({
          title: "property Deletion Failed.",
          icon: "error",
          toast: true,
          timer: 3000,
          position: 'bottom-right',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Error occurred while deleting property:", error);
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

  return (
    <div className="property-popup">
      <div className="property-popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="property-details">
          
          <SoftBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            p={1}
            style={{ borderBottom: "1px solid grey" }}
          >
            <SoftTypography variant="h6">
              <h3>{selectedProperty.title}</h3>
              <p>{selectedProperty.property_id}</p>
            </SoftTypography>
            <SoftBox display="flex">
              <SoftButton
                variant="outlined"
                color="info"
                size="small"
                style={{ margin: "3px" }}
                onClick={() => setIsPopupOpen(true)}
              >
                Add User
              </SoftButton>
            </SoftBox>
          </SoftBox>

          {propertyUserData.length > 0 ? (
          <Table
            columns={[
              { name: "User", align: "center" },
              { name: "Position", align: "center" },
              { name: "Features", align: "center" },
              { name: "Created Date", align: "center" },
              { name: "Edit", align: "center" },
              { name: "Delete", align: "center" },
            ]}
            rows={propertyUserData.map((users) => ({
              User: (
                <SoftBox style={{ display: "flex" }}>
                  <SoftBox
                  style={{ display: "flex", cursor: "pointer", flexDirection:"column" }}
                  >
                    <div>
                      {users.user.first_name}  {users.user.last_name}
                    </div>
                    <div>{users.user.email}</div>
                  </SoftBox>
                </SoftBox>
              ),
              Position : users.position,
              Features : users.features,
              "Created Date" : users.joined_date,
              Edit: (
                <SoftButton
                  variant="outlined"
                  color="secondary"
                  size="small"
                  style={{ margin: "3px" }}
                  onClick={() => setUserToEdit(users)}
                >
                  Edit
                </SoftButton>
              ),
              Delete: (
                <SoftButton
                  variant="outlined"
                  color="primary"
                  size="small"
                  style={{ margin: "3px" }}
                  onClick={() => handleDeleteUser(users.user.email)}
                >
                  Delete
                </SoftButton>
              ),
            }))}
          />
          ) : (
            <div style={{margin:"15px", fontSize:"17px", textAlign:"center"}}>No any user.</div>
          )}

          {/* Add other property details here */}
          {/* For example: */}
          {isPopupOpen && (
            <AddUser
              propertyId={selectedProperty.property_id}
              onClose={() => 
              {
                setIsPopupOpen(false);
                fetchData(selectedProperty.property_id);
              }
              }
            />
          )}

          {userToEdit && (
            <EditUser
              propertyId={selectedProperty.property_id}
              user={userToEdit}
              onSave={() => {
                setUserToEdit(null); // Reset the userToEdit state after saving the changes
                fetchData(selectedProperty.property_id); // Fetch updated user data after saving the changes
              }}
              onClose={() => 
                {
                  setUserToEdit(null);
                  fetchData(selectedProperty.property_id);
                }// Reset the userToEdit state if the edit is canceled
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

PropertyPopup.propTypes = {
  selectedProperty: PropTypes.shape({
    title: PropTypes.string.isRequired,
    property_id: PropTypes.string.isRequired,
    // Add other property details prop types here if needed
  }),
  onClose: PropTypes.func.isRequired,
};

export default PropertyPopup;
