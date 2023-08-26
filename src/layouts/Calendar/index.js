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


import data from "layouts/Calendar/NewCalendarEntry/data";

import Calendar_da from "layouts/Calendar/NewCalendarEntry";

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

    const tabData = [
        {
            title: 'Monthly View',
            content: (
                <Card >
                    <SoftBox display="flex" justifyContent="space-between" alignItems="center" flexWrap = "wrap" p={1}  style={{borderBottom:"1px solid grey"}}>
                    <SoftTypography variant="h6">Building Calendar (Management View)</SoftTypography>
                    <SoftBox display="flex">
                        <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} >
                        <PrintIcon/> Printer Friendly Version
                        </SoftButton>
                        <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} onClick={() => setIsPopupOpen(true)} >
                        + Add Entry
                        </SoftButton>
                    </SoftBox>
                    </SoftBox>
                    <SoftBox display="flex" alignItems="center" flexWrap="wrap" p={1} style={{justifyContent: "flex-start"}}>
                        <SoftBox display="flex" alignItems="center" flexWrap="wrap" p={1} style={{justifyContent: "space-between", width:"100%"}}>
                            <SoftTypography variant="h6">Legend:</SoftTypography> &nbsp; 
                            <SoftTypography variant="h6" component="a" sx={{cursor:"pointer", float:"right"}}>Go To Reservations Calendar</SoftTypography>
                        </SoftBox>
                        <SoftBox display="flex" flexWrap="wrap">
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Board Meetings &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Building Events &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Delivery &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Furniture Delivery &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Holiday &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Maintenance &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Neighborhood Events &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Staff Events &nbsp;
                                </SoftTypography>
                            </SoftBox>
                        </SoftBox>
                        <SoftTypography variant="h6" component="a" sx={{cursor:"pointer"}}>Select All</SoftTypography> &nbsp; &nbsp; &nbsp;
                        <SoftTypography variant="h6" component="a" sx={{cursor:"pointer"}}>Clear All</SoftTypography> &nbsp; &nbsp; &nbsp;
                    
                    </SoftBox>      
                    <SoftBox sx={{ backgroundColor:"grey", display:"flex", alignItems:"center", padding:"5px" }}>
        
                        <SoftButton variant="outlined"  size="small" iconOnly square>
                            <ArrowBackIosIcon/>
                        </SoftButton>
        
                        <SoftButton variant="outlined"   size="small" iconOnly square>
                            <ArrowForwardIosIcon/>
                        </SoftButton>
        
                        <SoftTypography
                            variant="h6"
                            fontSize="small"
                            color="white"
                            p={1}
                        >
                            Go To Today
                        </SoftTypography>
                        <SoftBox>
                            <input type="date"></input>
                        </SoftBox>
                    </SoftBox>
                    <Calendar style={{width:"100%"}} onChange={onChange} value={date} />

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
            title: 'List View',
            content: (
                <Card >
                    <SoftBox display="flex" justifyContent="space-between" alignItems="center" flexWrap = "wrap" p={1}  style={{borderBottom:"1px solid grey"}}>
                    <SoftTypography variant="h6">List View of Calendar</SoftTypography>
                    <SoftBox display="flex">
                        <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} >
                        <PrintIcon/> Printer Friendly Version
                        </SoftButton>
                        <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} onClick={() => setIsPopupOpen(true)} >
                        + Add Entry
                        </SoftButton>
                    </SoftBox>
                    </SoftBox>
                    <SoftBox display="flex" alignItems="center" flexWrap="wrap" p={1} style={{justifyContent: "flex-start"}}>
                        <SoftBox display="flex" alignItems="center" flexWrap="wrap" p={1} style={{justifyContent: "space-between", width:"100%"}}>
                            <SoftTypography variant="h6">Legend:</SoftTypography> &nbsp; 
                        </SoftBox>
                        <SoftBox display="flex" flexWrap="wrap">
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Board Meetings &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Building Events &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Delivery &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Furniture Delivery &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Holiday &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Maintenance &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Neighborhood Events &nbsp;
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" style={{border:"1px solid black", padding:"3px"}}>
        
                                <Checkbox/>
                                <SoftTypography
                                    variant="button"
                                    fontWeight="bold"
                                    textGradient
                                    >
                                    Staff Events &nbsp;
                                </SoftTypography>
                            </SoftBox>
                        </SoftBox>
                        <SoftTypography variant="h6" component="a" sx={{cursor:"pointer"}}>Select All</SoftTypography> &nbsp; &nbsp; &nbsp;
                        <SoftTypography variant="h6" component="a" sx={{cursor:"pointer"}}>Clear All</SoftTypography> &nbsp; &nbsp; &nbsp;
                    
                    </SoftBox>
                    <SoftBox sx={{ backgroundColor:"grey", display:"flex", alignItems:"center", flexWrap : "wrap",  padding:"5px" }}>
                        <SoftBox  sx={{display:"flex", alignItems:"center" }}>
                            <SoftTypography
                                variant="h6"
                                fontSize="small"
                                color="white"
                                p={1}
                                >
                                Tue 6/6/23
                            </SoftTypography>
            
                            <SoftTypography
                                variant="h6"
                                fontSize="small"
                                color="white"
                                p={1}
                            >
                            -
                            </SoftTypography>
                            <SoftTypography
                                variant="h6"
                                fontSize="small"
                                color="white"
                                p={1}
                            >
                            Fri 7/7/23
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox sx={{display:"flex", alignItems:"center" }}>
                            <SoftTypography
                                variant="button"
                                fontWeight="bold"
                                color="white"
                            >
                                &nbsp;&nbsp;Show: &nbsp;
                            </SoftTypography>
                            <input type="radio" name="permission" />
                        <SoftTypography
                            variant="button"
                            fontWeight="regular"
                            color="white"
                        >
                            &nbsp;&nbsp;Today &nbsp;
                        </SoftTypography>
                        <input type="radio" name="permission" />
                        <SoftTypography
                            variant="button"
                            fontWeight="regular"
                            color="white"
                        >
                            &nbsp;&nbsp;1 Week &nbsp;
                        </SoftTypography>
                        <input type="radio" name="permission" />
                        <SoftTypography
                            variant="button"
                            fontWeight="regular"
                            color="white"
                        >
                            &nbsp;&nbsp;1 Month &nbsp;
                        </SoftTypography>
                        </SoftBox>
                        <SoftBox sx={{display:"flex", alignItems:"center", flexWrap:"wrap" }}>
                            <SoftTypography
                                variant="button"
                                fontWeight="bold"
                                color="white"
                            >
                                &nbsp;&nbsp;Date Range: 
                            </SoftTypography>
                            <SoftTypography
                            variant="button"
                            fontWeight="regular"
                            color="white"
                        >
                            &nbsp;&nbsp;From: &nbsp;
                        </SoftTypography>
                            <input type="date"/>
                        <SoftTypography
                            variant="button"
                            fontWeight="regular"
                            color="white"
                        >
                            &nbsp;&nbsp;To: &nbsp;
                        </SoftTypography>
                        <input type="date" />
                        </SoftBox>
                        <SoftBox sx={{display:"flex", alignItems:"center", flexWrap:"no-wrap", padding:"2px" }}>
                            <SoftInput sx={{margin:"2px"}}/>
                            <SoftButton variant="gradient" color="info" sx={{margin:"2px"}}>
                                Search
                            </SoftButton>
                        </SoftBox>
                    </SoftBox>
                <SoftTypography variant="h6" component="a" sx={{cursor:"pointer"}} p={1}>June 2023</SoftTypography>

                <Table_th columns={columns} rows={rows} borders={1}/>

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
            title: 'Calendar Categories',
            content: (
                <Calendar_da/>
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
