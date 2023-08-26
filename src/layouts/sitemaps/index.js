

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
import MiniCard from "examples/Cards/MiniCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// HG Pro base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";





function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const links1 = [
    { url: '/sitemap', text: 'Site Map' },
    { url: '/profile', text: 'My Profile' },
    { url: '/local-link', text: 'Local Links' },
  ];
  const links2 = [
    { url: '/units/occupants', text: 'Units/Occupants' },
    { url: '/calendar', text: 'Calendar' },
    { url: '/library', text: 'Library' },
    { url: '/reservations', text: 'Reservations' },
    { url: '/pet/registry', text: 'Pet Registry' },
  ];
  const links3 = [
    { url: '/event/log', text: 'Event Log' },
    { url: '/instructions', text: 'Instrctions' },
    { url: '/incident/reports', text: 'Incident Reports' },
    { url: '/resident/directory', text: 'Resident Directory' },
  ];
  const links4 = [
    { url: '/maintenance/new/request', text: 'New Request' },
    { url: '/maintenance/search/requests', text: 'Search Requests' },
    { url: '/maintenance/vendor/directory', text: 'Vendors Directory' },
  ];
  const links5 = [
    { url: '/communicate/send/email', text: 'Send Email' },
    { url: '/communicate/library', text: 'Library' },
    { url: '/communicate/public/display', text: 'Public Display' },
    { url: '/communicate/resident/directory', text: 'Resident Directory' },
    { url: '/communicate/building/directory', text: 'Building Directory' },
  ];
  const links6 = [
    { url: '/local/businesses', text: 'Local Businesses' },
    { url: '/offers/services', text: 'Offers & Services' },
    { url: '/pet/park', text: 'Pet Park' },
  ];
  const links7 = [
    { url: '/maintenance/know-your-residents', text: 'Know Your Residents' },
    { url: '/maintenance/resident-id-verify', text: 'Resident Id Verify' },
  ];
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={4}>
              <MiniCard
                title={{ text: "Dashboard" }}
                links={links1}
                icon={{ color: "secondary", component: "home" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <MiniCard
                title={{ text: "Manage" }}
                links={links2}
                icon={{ color: "secondary", component: "account_circle" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <MiniCard
                title={{ text: "Front desk" }}
                links={links3}
                icon={{ color: "secondary", component: "desk" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <MiniCard
                title={{ text: "Maintenance" }}
                links={links4}
                icon={{
                  color: "secondary",
                  component: "engineering",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <MiniCard
                title={{ text: "Communicate" }}
                links={links5}
                icon={{
                  color: "secondary",
                  component: "forum",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <MiniCard
                title={{ text: "Resident Site" }}
                links={links6}
                icon={{
                  color: "secondary",
                  component: "web",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <MiniCard
                title={{ text: "Other" }}
                links={links7}
                icon={{
                  color: "secondary",
                  component: "devicesother",
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
