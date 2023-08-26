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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PrintIcon from '@mui/icons-material/Print';
import EditFormPopup from "layouts/reservations/form";

import Table from "examples/Tables/Table";



function calendar_dataa(){

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [menueam, setMenueAM] = useState(null);
    const openMenueAm = ({ currentTarget }) => setMenueAM(currentTarget);
    const closeMenueAm = () => setMenueAM(null);
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

    const columns = [
        { name: "Time", align: "center" },
        { name: "Deliveries (Service Elevator)", align: "center" },
        { name: "Move Ins/Outs (Service Elevator)", align: "center" },
        { name: "Service & Repair", align: "center" },
        { name: "Service Elevator", align: "center" },
      ];
      
      const rows = [];
      
      for (let hour = 0; hour < 12; hour++) {
        const time = `${hour.toString().padStart(2, '0')}:00`;
        const halfHourTime = `${hour.toString().padStart(2, '0')}:30`;
      
        rows.push(
          {
            "Time": time,
            "Deliveries (Service Elevator)": "Restricted",
            "Move Ins/Outs (Service Elevator)": "Restricted",
            "Service & Repair": "Restricted",
            "Service Elevator": "Restricted",
          },
          {
            "Time": halfHourTime,
            "Deliveries (Service Elevator)": "Restricted",
            "Move Ins/Outs (Service Elevator)": "Restricted",
            "Service & Repair": "Restricted",
            "Service Elevator": "Restricted",
          }
        );
      }

      const rowss = [];
      
      for (let hour = 12; hour < 24; hour++) {
        const timee = `${hour.toString().padStart(2, '0')}:00`;
        const halfHourTimee = `${hour.toString().padStart(2, '0')}:30`;
      
        rowss.push(
          {
            "Time": timee,
            "Deliveries (Service Elevator)": "Available",
            "Move Ins/Outs (Service Elevator)": "Available",
            "Service & Repair": "Available",
            "Service Elevator": "Available",
          },
          {
            "Time": halfHourTimee,
            "Deliveries (Service Elevator)": "Available",
            "Move Ins/Outs (Service Elevator)": "Available",
            "Service & Repair": "Available",
            "Service Elevator": "Available",
          }
        );
      }
      
    return (

        <Card >
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" flexWrap = "wrap" p={1}  style={{borderBottom:"1px solid grey"}}>
                <SoftTypography variant="h6">Reservations Availability Grid</SoftTypography>
                <SoftBox display="flex">
                    
                    <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} onClick={() => setIsPopupOpen(true)} >
                    + Make A New Reservation
                    </SoftButton>
                </SoftBox>
            </SoftBox>

              {isPopupOpen && (
                <EditFormPopup
                    onClose={() => setIsPopupOpen(false)} // Close the popup form
                    // Pass any required props to the popup form component
                    />
                )}

            <SoftBox display="flex" alignItems="center" flexWrap="wrap" p={1} style={{justifyContent: "flex-start"}}>
                <SoftBox display="flex" alignItems="center" flexWrap="wrap" p={1} style={{justifyContent: "space-between", width:"100%"}}>
                </SoftBox>
                <SoftBox display="flex" flexWrap="wrap">
                    <SoftTypography variant="h6">Options:</SoftTypography> &nbsp; 
                    <SoftBox display="flex" style={{padding:"3px"}}>
                        <Checkbox/>
                        <SoftTypography
                            variant="button"
                            fontWeight="bold"
                            textGradient
                            >
                            All Amenities &nbsp;
                        </SoftTypography>
                    </SoftBox>
                    <SoftBox display="flex" style={{border:"1px solid black", padding:"3px", margin:"2px"}} onClick={openMenueAm}>
                        <SoftTypography
                            variant="button"
                            fontWeight="bold"
                            textGradient
                            >
                            Select one or more amenities &nbsp;
                        </SoftTypography>
                        <Icon sx={{ fontWeight: "bold" }}>arrow_downward</Icon>
                    </SoftBox>
                        {renderMenuAmenities}
                    <SoftBox display="flex" alignItems="center" justifyContent="center" style={{border:"1px solid black",padding:"3px", backgroundColor:"red" ,margin:"2px" }}>

                        <SoftTypography
                            variant="button"
                            fontWeight="bold"
                            textGradient
                            >
                            Requested 
                        </SoftTypography>
                    </SoftBox>
                    <SoftBox display="flex" alignItems="center" justifyContent="center"  style={{border:"1px solid black", padding:"3px", backgroundColor:"green", margin:"2px"}}>

                        <SoftTypography
                            variant="button"
                            fontWeight="bold"
                            textGradient
                            >
                            Approved
                        </SoftTypography>
                    </SoftBox>
                </SoftBox>
                <SoftTypography variant="h6" component="a" sx={{cursor:"pointer"}}>Show Selection</SoftTypography> &nbsp; &nbsp; &nbsp;
            
            </SoftBox>      
            <SoftBox sx={{ backgroundColor:"grey", display:"flex", alignItems:"center", flexWrap:"wrap", justifyContent:"space-between", padding:"5px" }}>

                

                <SoftTypography
                    variant="h6"
                    fontSize="small"
                    color="white"
                    fontWeight="bold"
                    p={1}
                >
                    Go To:  
                </SoftTypography>
                <SoftButton variant="outlined"  size="small"  square>
                    Today
                </SoftButton>
                <SoftBox>
                    <SoftInput type="date" sx={{padding:"5px"}}/>
                </SoftBox>
                <SoftButton variant="outlined"  size="small"  square>
                    <ArrowBackIosIcon/>&nbsp; Prev
                </SoftButton>

                <SoftTypography
                    variant="h6"
                    fontSize="small"
                    color="white"
                    fontWeight="bold"
                    p={1}
                >
                    Wednesday, June 7, 2023
                </SoftTypography>

                <SoftButton variant="outlined"   size="small"  square>
                    Next &nbsp;<ArrowForwardIosIcon/>
                </SoftButton>
            </SoftBox>

            <Table columns={columns} rows={rows} borders={1}/>
            <hr></hr>

            <Table columns={columns} rows={rowss} borders={1} sx={{margin:"5px"}}/>


    </Card>
    )

};

export default calendar_dataa;