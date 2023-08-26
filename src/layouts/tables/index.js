// @mui material components
import Card from "@mui/material/Card";

// HG Pro components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// HG Pro examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import SoftButton from "components/SoftButton";
import Checkbox from "@mui/material/Checkbox";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" flexWrap = "wrap" p={1}  style={{borderBottom:"1px solid grey"}}>
              <SoftTypography variant="h6">Vendor List - The Chamberlain</SoftTypography>
              <SoftBox display="flex">
                  <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} >
                    Export to Excel
                  </SoftButton>
                  <SoftButton variant="outlined" color="info" size="small" style={{margin : "3px"}} >
                    + Add More Vendors from Master List
                  </SoftButton>
              </SoftBox>
              
            </SoftBox>
            <SoftBox display="flex" alignItems="center" flexWrap="wrap" p={1} style={{borderBottom:"1px solid grey"}}>
              <SoftTypography variant="h6">Options</SoftTypography> &nbsp; &nbsp; &nbsp;
              <SoftBox display="flex">
                <Checkbox/>
                  <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Show Category Column &nbsp;
                    </SoftTypography>
                </SoftBox>
              <SoftBox display="flex">

                <Checkbox/>
                <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Show Compliance Column &nbsp;
                </SoftTypography>
              </SoftBox>
              <SoftBox display="flex">

                  <Checkbox/>
                  <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Show Notes &nbsp;
                    </SoftTypography>
              </SoftBox>
              
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
              <Table columns={columns} rows={rows} borders={1} />
            </SoftBox>
          </Card>
        </SoftBox>
        
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
