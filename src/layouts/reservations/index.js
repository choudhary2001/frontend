import React, { useState, useRef, useContext } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Link from '@mui/material/Link';
import Menu from "@mui/material/Menu";

import MenuItem from "@mui/material/MenuItem";


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


import data from "layouts/reservations/data";
import Data from "layouts/reservations/components";


function ResidentSite() {

    const [date, setDate] = useState(new Date());

    const { columns, rows } = data();

    const onChange = (selectedDate) => {
      setDate(selectedDate);s
    };

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [menu, setMenu] = useState(null);
    const [menue, setMenue] = useState(null);
    const [menueam, setMenueAM] = useState(null);

    const openMenu = ({ currentTarget }) => setMenu(currentTarget);
    const closeMenu = () => setMenu(null);

    const openMenue = ({ currentTarget }) => setMenue(currentTarget);
    const closeMenue = () => setMenue(null);

    const openMenueAm = ({ currentTarget }) => setMenueAM(currentTarget);
    const closeMenueAm = () => setMenueAM(null);
  
    const renderMenu = (
      <Menu
        id="simple-menu"
        anchorEl={menu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "bottom",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "bottom",
        }}
        open={Boolean(menu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>Deliveries (Service Elevator)</MenuItem>
        <MenuItem onClick={closeMenu}>Move Ins/Outs (Service Elevator)</MenuItem>
        <MenuItem onClick={closeMenu}>Service & Repair</MenuItem>
        <MenuItem onClick={closeMenu}>Service Elevator</MenuItem>
      </Menu>
    );

    const renderMenue = (
        <Menu
          id="simple-menu"
          anchorEl={menue}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "bottom",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "bottom",
          }}
          open={Boolean(menue)}
          onClose={closeMenue}
        >
          <MenuItem ><Checkbox/>Requested</MenuItem>
          <MenuItem ><Checkbox/>Approved</MenuItem>
          <MenuItem ><Checkbox/>Declined</MenuItem>
          <MenuItem ><Checkbox/>Canceled</MenuItem>
        </Menu>
      );

    const renderMenuAmenities = (
        <Menu
          id="simple-menu"
          anchorEl={menueam}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "bottom",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "bottom",
          }}
          open={Boolean(menueam)}
          onClose={closeMenueAm}
        >
          <MenuItem ><Checkbox/>Deliveries (Service Elevator)</MenuItem>
          <MenuItem ><Checkbox/>Move Ins/Outs (Service Elevator)</MenuItem>
          <MenuItem ><Checkbox/>Service & Repair</MenuItem>
          <MenuItem ><Checkbox/>Service Elevator</MenuItem>
        </Menu>
      );
  

    

    const tabData = [
        {
            title: 'List View',
            content: (
                <Card>
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" flexWrap = "wrap" p={1}  style={{borderBottom:"1px solid grey"}}>
                  <SoftTypography variant="h6">List View of Calendar</SoftTypography>
                  <SoftBox display="flex">
                    <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} >
                    <PrintIcon/> Printer View
                    </SoftButton>
                    <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}}  onClick={openMenu} >
                        Create Reservation
                    </SoftButton>
                  </SoftBox>
                    {renderMenu}
                </SoftBox>
                <SoftBox sx={{  display:"flex", alignItems:"center", flexWrap : "wrap",  padding:"5px" }}>
                    <SoftBox sx={{display:"flex", alignItems:"center", flexWrap:"no-wrap", padding:"2px" }}>
                        <SoftInput sx={{margin:"2px"}} placeholder="Enter unit # or name"/>
                    </SoftBox>
                    <SoftBox  sx={{display:"flex", alignItems:"center" }}>
                        <SoftInput sx={{margin:"2px"}} type="date"/>
        
                        <SoftTypography
                            variant="h6"
                            fontSize="small"
                            p={1}
                        >
                        -
                        </SoftTypography>
                        <SoftInput sx={{margin:"2px"}} type="date"/>
                    </SoftBox>
                        <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}}  onClick={openMenue} >
                            Status&nbsp; <Icon sx={{ fontWeight: "bold" }}>arrow_downward</Icon>
                        </SoftButton>
                        {renderMenue}
                        <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}}  onClick={openMenueAm} >
                            Amenities&nbsp; <Icon sx={{ fontWeight: "bold" }}>arrow_downward</Icon>
                        </SoftButton>
                        {renderMenuAmenities}
                        <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}}  onClick={openMenue} >
                            Advanced&nbsp; <Icon sx={{ fontWeight: "bold" }}>arrow_downward</Icon>
                        </SoftButton>
                        {renderMenuAmenities}
                        <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} >
                            Reset Filter
                        </SoftButton>
 
                </SoftBox>

                
                
                <Table columns={columns} rows={rows} borders={1}/>

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
            title: 'Calendar View',
            content: (
                <Card>
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" flexWrap = "wrap" p={1}  style={{borderBottom:"1px solid grey"}}>
                  <SoftTypography variant="h6">List View of Calendar</SoftTypography>
                  <SoftBox display="flex" flexWrap="wrap">
                    <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} to="/calendar" component={Link} >
                        Building Calendar
                    </SoftButton>
                    <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} >
                        <PrintIcon/>&nbsp; Printer View
                    </SoftButton>
                    <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}}  onClick={openMenu} >
                        Create Reservation
                    </SoftButton>
                  </SoftBox>
                    {renderMenu}
                </SoftBox>
                <SoftBox sx={{  display:"flex", alignItems:"center", flexWrap : "wrap",  padding:"5px" }}>
                    <SoftBox sx={{display:"flex", alignItems:"center", flexWrap:"no-wrap", padding:"2px" }}>
                        <SoftInput sx={{margin:"2px"}} placeholder="Enter unit # or name"/>
                    </SoftBox>
                
                    <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}}  onClick={openMenue} >
                        Status&nbsp; <Icon sx={{ fontWeight: "bold" }}>arrow_downward</Icon>
                    </SoftButton>
                    {renderMenue}
                    <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}}  onClick={openMenueAm} >
                        Amenities&nbsp; <Icon sx={{ fontWeight: "bold" }}>arrow_downward</Icon>
                    </SoftButton>
                    {renderMenuAmenities}
                    <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}}  onClick={openMenue} >
                        Advanced&nbsp; <Icon sx={{ fontWeight: "bold" }}>arrow_downward</Icon>
                    </SoftButton>
                    {renderMenuAmenities}
                    <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} >
                        Reset Filter
                    </SoftButton>
                    <SoftBox display="flex" style={{ padding:"3px"}}>
                        <Checkbox/>
                        <SoftTypography
                            variant="button"
                            fontWeight="bold"
                            textGradient
                            >
                            Display Units &nbsp;
                        </SoftTypography>
                    </SoftBox>
 
                </SoftBox>
                
                <Calendar style={{width:"100%", border:"none !important"}} onChange={onChange} value={date} />

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
            title: 'Availability Grid',
            content: (
                <Data/>
            ),
        },
        // Add more tab objects as needed
    ];
  

  return (
    <DashboardLayout>
      <DashboardNavbar />

        <div>
            <Card sx={{display:"flex", flexDirection:"row", marginBottom:"10px"}} p={1}>
            {tabData.map((tab, index) => (
                <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}}
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

export default ResidentSite;
