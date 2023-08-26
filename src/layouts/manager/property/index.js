import React, { useContext, useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import Table from "examples/Tables/Table";
import swal from 'sweetalert2';
import AuthContext from "context/AuthContext";
import EditFormPopup from "layouts/manager/property/EditForm";
import Card from "@mui/material/Card";
import refreshAccessToken from 'adminRefresToken';
import PropertyPopup from './PopUp';
import './Popup.css'

function PropertyData() {
  const { managerauthTokens, logoutUser } = useContext(AuthContext);
  const [PropertyData, setPropertyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [shouldRefreshData, setShouldRefreshData] = useState(false);


  useEffect(() => {
    fetchData();
    setShouldRefreshData(false); // Set back to false after data fetch is completed
  }, [shouldRefreshData]);


  console.log(localStorage.getItem("managerauthTokens"))
  console.log(managerauthTokens)

  
  
  const fetchData = async () => {
    try {
      const newAccessToken = await refreshAccessToken(managerauthTokens?.refresh);
      console.log(newAccessToken)
      const response = await fetch("https://hgpro.theworkflow.nyc/manager/api/property", {
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        setPropertyData(data.property);
        setFilteredData(data.property);
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

  const handleStatusChange = async (e, propertyId) => {
    const newStatus = e.target.value;
    const updatedPropertyData = PropertyData.map((property) =>
      property.id === propertyId ? { ...property, is_active: newStatus === "Authenticated" } : property
    );
    setPropertyData(updatedPropertyData);
    setFilteredData(updatedPropertyData);

    try {
      const newAccessToken = await refreshAccessToken(managerauthTokens?.refresh);
      const response = await fetch("https://hgpro.theworkflow.nyc/manager/api/property/change/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newAccessToken}`,
        },
        body: JSON.stringify({ status: newStatus, propertyId }),
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
          setPropertyData(PropertyData);
          setFilteredData(PropertyData);
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
      setPropertyData(PropertyData);
      setFilteredData(PropertyData);
    }
  };

  const handleDelete = async (propertyId) => {
    try {
      const newAccessToken = await refreshAccessToken(managerauthTokens?.refresh);
      const response = await fetch(`https://hgpro.theworkflow.nyc/manager/api/property/delete/${propertyId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      });

      if (response.status === 200) {
        console.log("property deleted successfully!");
        const updatedPropertyData = PropertyData.filter((property) => property.property_id !== propertyId);
        setPropertyData(updatedPropertyData);
        setFilteredData(updatedPropertyData);
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

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm.trim() === "") {
      setFilteredData(PropertyData);
    } else {
      const filteredProperty = PropertyData.filter((property) =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        property.property_id.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredProperty);
    }
  };


  const handlePropertyClick = (propertyId) => {
    // Find the selected property from the PropertyData array
    const selected = PropertyData.find((property) => property.property_id === propertyId);
    console.log(selected)
    setSelectedProperty(selected);
  };


  const handleClosePopup = () => {
    setSelectedProperty(null);
  };


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PropertyPopup selectedProperty={selectedProperty} onClose={handleClosePopup} />
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
            All Properties ({PropertyData.length})
          </SoftTypography>
          <SoftBox display="flex">
            <SoftButton
              variant="outlined"
              color="info"
              size="small"
              style={{ margin: "3px" }}
              onClick={() => setIsPopupOpen(true)}
            >
              New Property
            </SoftButton>
            <SoftBox
              sx={{ display: "flex", alignItems: "center", flexWrap: "no-wrap", padding: "2px" }}
            >
              <SoftInput
                sx={{ margin: "2px" }}
                placeholder="Search Property"
                value={searchTerm}
                onChange={handleSearch}
              />
            </SoftBox>
          </SoftBox>
        </SoftBox>
        {filteredData.length > 0 ? (
          <Table
            columns={[
              { name: "Property", align: "center" },
              { name: "Title", align: "center" },
              { name: "Created Date", align: "center" },
              { name: "Delete", align: "center" },
            ]}
            rows={filteredData.map((property) => ({
              Property: (
                <SoftBox style={{ display: "flex" }}>
                  <SoftBox
                  style={{ display: "flex", cursor: "pointer" }}
                  onClick={() => handlePropertyClick(property.property_id)}
                  onClose={handleClosePopup}
                  
                  >
                    <div>
                      {property.property_id}
                    </div>
                    <div>{property.email}</div>
                  </SoftBox>
                </SoftBox>
              ),
              Title : property.title,
              "Created Date" : property.joined_date,
              Delete: (
                <SoftButton
                  variant="outlined"
                  color="primary"
                  size="small"
                  style={{ margin: "3px" }}
                  onClick={() => handleDelete(property.property_id)}
                >
                  Delete
                </SoftButton>
              ),
            }))}
          />
        ) : (
          <div style={{margin:"15px", fontSize:"17px", textAlign:"center"}}>No any property.</div>
        )}

        {isPopupOpen && (
          <EditFormPopup
            onClose={() => {
              setIsPopupOpen(false);
              fetchData();
              setShouldRefreshData(false);
            }}
          />
        )}

      </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default PropertyData;
