import React, { useState, useRef, useContext } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Link from '@mui/material/Link';

// HG Pro components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
// HG Pro examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import EditFormPopup from "layouts/Calendar/NewCalendarEntry/components";


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PrintIcon from '@mui/icons-material/Print';

import Table_th from "examples/Tables/table_without_th";
import Table from "examples/Tables/Table";


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'layouts/Calendar/Calendar.css';


import Data from "layouts/library/data";


function Library() {

  const [date, setDate] = useState(new Date());

  // const { columns, rows } = data();

  const onChange = (selectedDate) => {
    setDate(selectedDate); s
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const tabData = [
    {
      title: 'Active Documents',
      content: (
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" p={1} style={{ borderBottom: "1px solid grey" }}>
            <SoftTypography variant="h6">List View of Calendar</SoftTypography>
            <SoftBox display="flex">
              <SoftButton variant="outlined" color="info" size="small" style={{ margin: "3px" }} >
                - Hide All
              </SoftButton>
              <SoftButton variant="outlined" color="info" size="small" style={{ margin: "3px" }} >
                + Expand All
              </SoftButton>
            </SoftBox>
          </SoftBox>

          <SoftBox sx={{ backgroundColor: "grey", display: "flex", alignItems: "center", flexWrap: "wrap", }}>
            <SoftBox sx={{ display: "flex", alignItems: "center" }}>
              <SoftTypography
                variant="h6"
                fontSize="small"
                color="white"
                fontWeight="bold"
                p={1}
              >
                Options :
              </SoftTypography>


            </SoftBox>
            <SoftBox sx={{ display: "flex", alignItems: "center" }}>

              <input type="radio" name="permission" />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                color="white"
              >
                &nbsp;&nbsp;Group by Category &nbsp;
              </SoftTypography>
              <input type="radio" name="permission" />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                color="white"
              >
                &nbsp;&nbsp;Group by Date &nbsp;
              </SoftTypography>
            </SoftBox>
            <SoftBox sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
              <SoftTypography
                variant="button"
                fontWeight="bold"
                color="white"
              >
                &nbsp;&nbsp;Select Category:
              </SoftTypography>
              <SoftBox>
                <select style={{ width: "100%", padding: "5px", borderRadius: "7px" }}>
                  <option>All Categories</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </SoftBox>
            </SoftBox>
            <SoftBox sx={{ display: "flex", alignItems: "center", flexWrap: "no-wrap", padding: "2px" }}>
              <SoftInput sx={{ margin: "2px" }} />
              <SoftButton variant="gradient" color="info" sx={{ margin: "2px" }}>
                Search
              </SoftButton>
            </SoftBox>
          </SoftBox>

          {/* <Table columns={columns} rows={rows} borders={1}/> */}
          <Data />

          {/* <Calendar style={{width:"100%"}} onChange={onChange} value={date} /> */}

          {isPopupOpen && (
            <EditFormPopup
              onClose={() => setIsPopupOpen(false)} // Close the popup form
            // Pass any required props to the popup form component
            />
          )}
        </Card>
      ),
    },
    {
      title: 'Recently Viewed',
      content: (
        <Card>

          <SoftTypography sx={{ color: "red", padding: "10px" }}>
            You are not authorized to view this page. <SoftButton> Please Log Out and try again.</SoftButton>
          </SoftTypography>
        </Card>
      ),
    },
    // Add more tab objects as needed
  ];


  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div>
        <Card sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" }} p={1}>
          {tabData.map((tab, index) => (
            <SoftButton variant="outlined" color="info" size="small" style={{ margin: "3px" }}
              key={index}
              onClick={() => handleTabClick(index)}
              className={activeTab === index ? 'active-tab' : 'inactive-tab'}
            >
              {tab.title}
            </SoftButton>
          ))}
        </Card>
        <div className="tab-content">
          {tabData[activeTab].content}
        </div>
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

export default Library;
