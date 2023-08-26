
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// HG Pro components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// HG Pro examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import SoftButton from "components/SoftButton";
import EditFormPopup from "layouts/profile/components/EditFormPopup";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import { useState, useRef } from "react";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  const headers = {
    'X-CSRFToken': window.csrfToken
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (


    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid> */}
          <Grid item xs={12} md={12} xl={12}>
            <Card>
                <div style={{padding:"15px"}}>
                  <div>
                    <h4 style={{display:"inline-block"}}>Profile Information</h4>
                    <SoftButton style={{float:"right", border:"none", }}
                      variant="gradient"
                      color="dark"
                      type="submit"
                      small
                      onClick={() => setIsPopupOpen(true)} 
                    >
                      Edit
                    </SoftButton>
                  </div>
                  <div>
                    <SoftTypography
                      variant="button"
                      fontWeight="regular"
                      textGradient
                    >
                      User Name : Psamuel269 &nbsp;
                    </SoftTypography>
                  </div>
                  <div>
                    <SoftTypography
                      variant="button"
                      fontWeight="regular"
                      textGradient
                    >
                      Password : ******* &nbsp;
                    </SoftTypography>
                  </div>
                  <div>
                    <SoftTypography
                      variant="button"
                      fontWeight="regular"
                      textGradient
                    >
                      Email Address :   mrpraticksamuel@gmail.com &nbsp;
                    </SoftTypography>
                    </div>
                    <div>
                    <SoftTypography
                      variant="button"
                      fontWeight="regular"
                      textGradient
                    >
                      Home Phone :  12345678990 &nbsp;
                    </SoftTypography>
                    </div>
                    <div>
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        textGradient
                      >
                        Cell Phone :  12345678990 &nbsp;
                      </SoftTypography>
                    </div>
                    <div>
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        textGradient
                      >
                        Address :   Paghari, baheri, darbhanga &nbsp;
                      </SoftTypography>
                    </div>
                    <div>
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        textGradient
                      >
                        Street Address :  Paghari, Baheri &nbsp;
                      </SoftTypography>
                    </div>
                    <div>
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        textGradient
                      >
                        City :   Darbhanga &nbsp;
                      </SoftTypography>
                    </div>
                    <div>
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        textGradient
                      >
                        State : Bihar &nbsp;
                      </SoftTypography>
                    </div>
                    <div>
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        textGradient
                      >
                        Zip  Code : 123456 &nbsp;
                      </SoftTypography>
                    </div>
                    <div>
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        textGradient
                      >
                        Emergency  Phone : 12345678990 &nbsp;
                      </SoftTypography>
                    </div>
                </div>
            </Card>

            {isPopupOpen && (
              <EditFormPopup
                onClose={() => setIsPopupOpen(false)} // Close the popup form
                  // Pass any required props to the popup form component
                />
            )}

          </Grid>
        </Grid>
      </SoftBox>
      {/* <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Projects
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Architects design houses
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor1}
                  label="project #2"
                  title="modern"
                  description="As Uber works through a huge amount of internal management turmoil."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                  ]}
                />
              </Grid> 
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor2}
                  label="project #1"
                  title="scandinavian"
                  description="Music is something that every person has his or her own specific opinion about."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor3}
                  label="project #3"
                  title="minimalist"
                  description="Different people have different taste, and various types of music."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team4, name: "Peterson" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team1, name: "Elena Morison" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "New project" }} outlined />
              </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox> */}

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
