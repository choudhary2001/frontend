import React, { useState } from "react";
import Card from "@mui/material/Card";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import UserData from "layouts/admin/user/data";
import Data from "layouts/reservations/components";

function AdminUser() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabData = [
    {
      title: "ALL User",
      content: <UserData />,
    },

  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div>
        <Card
          sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
          p={1}
        >
          {tabData.map((tab, index) => (
            <SoftButton
              variant="outlined"
              color="info"
              size="small"
              style={{ margin: "3px" }}
              key={index}
              onClick={() => handleTabClick(index)}
              className={activeTab === index ? "active-tab" : "inactive-tab"}
            >
              {tab.title}
            </SoftButton>
          ))}
        </Card>
        <div className="tab-content">{tabData[activeTab].content}</div>
        <style>
          {`
            .active-tab {
              background-color: #f0f0f0; /* Add your desired background color */
              color: #000000; /* Add your desired text color */
            }
            .inactive-tab {
              background-color: #ffffff; /* Add your desired background color */
              color: #888888; /* Add your desired text color */
            }
          `}
        </style>
      </div>

      <Footer />
    </DashboardLayout>
  );
}

export default AdminUser;
