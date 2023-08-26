// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import { TableHead, TableRow, TableCell } from "@mui/material";

// HG Pro components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Table_th from "examples/Tables/table_without_th";
import Table from "examples/Tables/Table";

// HG Pro examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

import data from "layouts/units/data";
import Unit_data from "layouts/units/unit_data";

function Units() {
  const { columns, rows } = data();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <SoftBox>
          <SoftTypography
            variant="h6"
            gutterBottom
            p={1}
            sx={{ borderBottom: "1px solid grey" }}
          >
            View Units Profiles
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
          <Table_th columns={columns} rows={rows} borders={1}/>
        </SoftBox>
      </Card>
      
      <Unit_data/>
      <Footer />
    </DashboardLayout>
  );
}

export default Units;