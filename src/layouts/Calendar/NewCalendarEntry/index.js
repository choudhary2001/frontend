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
import EditFormPopup from "layouts/Calendar/NewCalendarEntry/components";

import Table from "examples/Tables/Table";



import data_cc from "layouts/Calendar/NewCalendarEntry/calendar_data";


function calendar_dataa(){
    const { columns, rows } = data_cc();

    return (

    <Card >
        <SoftBox display="flex" justifyContent="space-between" alignItems="center" flexWrap = "wrap" p={1}  style={{borderBottom:"1px solid grey"}}>
        <SoftTypography variant="h6">View / Edit Calendar Categories  </SoftTypography>
        
        </SoftBox>

        <Table columns={columns} rows={rows} borders={1}/>

        {/* <Calendar style={{width:"100%"}} onChange={onChange} value={date} /> */}

    </Card>
    )

};

export default calendar_dataa;