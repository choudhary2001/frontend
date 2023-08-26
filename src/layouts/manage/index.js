// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// HG Pro components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// HG Pro examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// HG Pro base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Overview from "layouts/manage/components/overview";
import OrderOverview from "layouts/dashboard/components/OrderOverview";


function Manage() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
        <Grid item xs={12} md={12} lg={12}>
          <Overview />
        </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Manage;
