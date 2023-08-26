// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

import { TableHead, TableRow, TableCell } from "@mui/material";

// HG Pro components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Table_th from "examples/Tables/table_without_th";
import Table from "examples/Tables/Table";



import FirstPageIcon from '@mui/icons-material/FirstPage';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LastPageIcon from '@mui/icons-material/LastPage';

import unit_data from "layouts/petregistry/pet/data";

function Units_data() {
  const { columns, rows } = unit_data();

  return (
    <Card style={{marginTop:"10px"}}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" flexWrap = "wrap" p={1}>
        <SoftTypography variant="h6">Pet</SoftTypography>
        <SoftBox display="flex">
            <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} >
            Export To Excel
            </SoftButton>
            <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} onClick={() => setIsPopupOpen(true)} >
            Export TO Pdf
            </SoftButton>
        </SoftBox>
      </SoftBox>
      <SoftBox p={1} sx={{ backgroundColor:"grey", display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center" }}>
        <SoftBox sx={{ backgroundColor:"grey", display:"flex", alignItems:"center" }}>

          <SoftButton variant="outlined"   size="small" iconOnly square>
            <FirstPageIcon/>
          </SoftButton>
          <SoftButton variant="outlined"  size="small" iconOnly square>
            <ArrowBackIosIcon/>
          </SoftButton>
          <SoftButton variant="outlined"  size="small" iconOnly square>
            <SoftTypography
              variant="h6"
              fontSize="small"
              color="white"
              p={1}
            >
              1
            </SoftTypography>
          </SoftButton>
          <SoftButton variant="outlined"   size="small" iconOnly square>
            <ArrowForwardIosIcon/>
          </SoftButton>
          <SoftButton variant="outlined"  size="small" iconOnly square>
            <LastPageIcon/>
          </SoftButton>
          <SoftTypography
            variant="h6"
            fontSize="small"
            color="white"
            p={1}
          >
            Page Size:
          </SoftTypography>
          <SoftBox>
            <select style={{ width: "100%", padding: "5px", borderRadius: "7px" }}>
              <option>All</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </SoftBox>
      </SoftBox>
          <SoftTypography
            variant="h6"
            fontSize="small"
            color="white"
            p={1}
          >
            Page 1 of 1, items 1 to 43 of 43.
          </SoftTypography>
      </SoftBox>
      <SoftBox
        sx={{
          "& .MuiTableRow-root": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
              border: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} borders={1}/>
      </SoftBox>
      <SoftBox p={1} sx={{ backgroundColor:"grey", display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center" }}>
        <SoftBox sx={{ backgroundColor:"grey", display:"flex", alignItems:"center" }}>

          <SoftButton variant="outlined"   size="small" iconOnly square>
            <FirstPageIcon/>
          </SoftButton>
          <SoftButton variant="outlined"  size="small" iconOnly square>
            <ArrowBackIosIcon/>
          </SoftButton>
          <SoftButton variant="outlined"  size="small" iconOnly square>
            <SoftTypography
              variant="h6"
              fontSize="small"
              color="white"
              p={1}
            >
              1
            </SoftTypography>
          </SoftButton>
          <SoftButton variant="outlined"   size="small" iconOnly square>
            <ArrowForwardIosIcon/>
          </SoftButton>
          <SoftButton variant="outlined"  size="small" iconOnly square>
            <LastPageIcon/>
          </SoftButton>
          <SoftTypography
            variant="h6"
            fontSize="small"
            color="white"
            p={1}
          >
            Page Size:
          </SoftTypography>
          <SoftBox>
            <select style={{ width: "100%", padding: "5px", borderRadius: "7px" }}>
              <option>All</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </SoftBox>
      </SoftBox>
          <SoftTypography
            variant="h6"
            fontSize="small"
            color="white"
            p={1}
          >
            Page 1 of 1, items 1 to 43 of 43.
          </SoftTypography>
      </SoftBox>
    </Card>
  );
}

export default Units_data;