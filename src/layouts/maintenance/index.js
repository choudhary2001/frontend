
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";


// HG Pro Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// HG Pro Dashboard React base styles
// HG Pro React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

import OrderOverview from "layouts/dashboard/components/OrderOverview";


function Maintenance() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={7}>
            <Card>
              <SoftBox pt={2} pb={3} px={3}>
                <SoftTypography
                  variant="button"
                  fontWeight="bold"
                  textGradient
                  fontSize="large"
                >
                  Request details  &nbsp;
                </SoftTypography>
                <SoftBox component="form" role="form">
                  <SoftBox mb={2}>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Search unit number or name &nbsp;
                    </SoftTypography>
                    <SoftInput placeholder="Enter Unit # or Name" />
                  </SoftBox>

                  <SoftBox mb={2} display="flex" alignItems="center" flexDirection="row" justifyContent="space-between">
                    <SoftBox display="flex" alignItems="center" flexDirection="row">
                      <Checkbox />
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                      >
                        &nbsp;&nbsp;Do not show to residents &nbsp;
                      </SoftTypography>
                    </SoftBox>
                    <SoftBox>

                      <SoftTypography
                        component="a"
                        href="#"
                        variant="button"
                        fontWeight="bold"
                        textGradient
                      >
                        Assign to management Unit
                      </SoftTypography>
                    </SoftBox>
                  </SoftBox>



                  <SoftBox mb={2}>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Problem Description &nbsp;
                    </SoftTypography>
                    {/* <SoftInput placeholder="Problem Description" /> */}
                    <SoftBox mb={2}>

                    <textarea row="8" style={{ width: "100%", padding: "20px", borderRadius: "7px" }}></textarea>
                    </SoftBox>
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Category &nbsp;
                    </SoftTypography>
                    <SoftBox mb={2}>
                      <select style={{ width: "100%", padding: "12px", borderRadius: "7px" }}>
                        <option>Select</option>
                        <option value="apples">Red Apples</option>
                        <option value="oranges">Outrageous Oranges</option>
                        <option value="tomatoes">Technically a Fruit Tomatoes</option>
                        <option value="bananas">Bodacious Bananas</option>
                      </select>
                    </SoftBox>
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Entry Instructions &nbsp;
                    </SoftTypography>
                    <SoftBox mb={2}>

                    <textarea row="8" style={{ width: "100%", padding: "20px", borderRadius: "7px" }}></textarea>
                    </SoftBox>
                  </SoftBox>
                  <SoftBox>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Permission to enter &nbsp;

                    </SoftTypography>
                    <SoftBox mb={2}>
                      <input type="radio" name="permission" />
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                      >
                        &nbsp;&nbsp;Yes &nbsp;
                      </SoftTypography>
                      <input type="radio" name="permission" />
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                      >
                        &nbsp;&nbsp;No &nbsp;
                      </SoftTypography>
                    </SoftBox>
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Images &nbsp;
                    </SoftTypography>
                    <SoftTypography
                      variant="button"
                      fontWeight="regular"
                    >
                      &nbsp;&nbsp; Supported files JPG, JPEG, PNG, BMP, and GIF of up to 4MB &nbsp;
                    </SoftTypography>
                    <SoftInput type="file" accept="image/*" />
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Documents &nbsp;
                    </SoftTypography>
                    <SoftTypography
                      variant="button"
                      fontWeight="regular"
                    >
                      &nbsp;&nbsp; Supported files PDF, DOC, DOCX, XLS, and XLSX of up to 4MB &nbsp;
                    </SoftTypography>
                    <SoftInput type="file" placeholder="Password" />
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Create with status &nbsp;

                    </SoftTypography>
                    <SoftBox mb={2}>
                      <input type="radio" name="permission" />
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                      >
                        &nbsp;&nbsp;Open &nbsp;
                      </SoftTypography>
                      <input type="radio" name="permission" />
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                      >
                        &nbsp;&nbsp;Hold &nbsp;
                      </SoftTypography>

                      <input type="radio" name="permission" />
                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                      >
                        &nbsp;&nbsp;Close &nbsp;
                      </SoftTypography>
                    </SoftBox>
                  </SoftBox>

                  <SoftBox mb={2}>
                    <Checkbox />
                    <SoftTypography
                      variant="button"
                      fontWeight="regular"
                    >
                      &nbsp;&nbsp;Print Work Order &nbsp;
                    </SoftTypography>
                    <Checkbox />
                    <SoftTypography
                      variant="button"
                      fontWeight="regular"
                    >
                      &nbsp;&nbsp;High urgency &nbsp;
                    </SoftTypography>
                  </SoftBox>

                </SoftBox>

              </SoftBox>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={5}>
            <Card>
              <SoftBox pt={2} pb={3} px={3}>
                <SoftTypography
                  variant="button"
                  fontWeight="bold"
                  textGradient
                  fontSize="large"
                >
                  Additional details  &nbsp;
                </SoftTypography>
                <SoftBox component="form" role="form">
                  <SoftBox>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Assigned employee &nbsp;
                    </SoftTypography>
                    <SoftBox>
                      <select style={{ width: "100%", padding: "12px", borderRadius: "7px" }}>
                        <option>Select</option>
                        <option value="apples">Red Apples</option>
                        <option value="oranges">Outrageous Oranges</option>
                        <option value="tomatoes">Technically a Fruit Tomatoes</option>
                        <option value="bananas">Bodacious Bananas</option>
                      </select>
                    </SoftBox>
                  </SoftBox>
                  <SoftBox>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Date Required &nbsp;
                    </SoftTypography>
                    <SoftInput type="date" />
                  </SoftBox>
                  <SoftBox>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Assigned vendor &nbsp;
                    </SoftTypography>
                    <SoftBox>
                      <select style={{ width: "100%", padding: "12px", borderRadius: "7px" }}>
                        <option>Select</option>
                        <option value="apples">Red Apples</option>
                        <option value="oranges">Outrageous Oranges</option>
                        <option value="tomatoes">Technically a Fruit Tomatoes</option>
                        <option value="bananas">Bodacious Bananas</option>
                      </select>
                    </SoftBox>
                  </SoftBox>
                  <SoftBox>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Equipment &nbsp;
                    </SoftTypography>
                    <SoftBox>
                      <select style={{ width: "100%", padding: "12px", borderRadius: "7px" }}>
                        <option>Select</option>
                        <option value="apples">Red Apples</option>
                        <option value="oranges">Outrageous Oranges</option>
                        <option value="tomatoes">Technically a Fruit Tomatoes</option>
                        <option value="bananas">Bodacious Bananas</option>
                      </select>
                    </SoftBox>
                  </SoftBox>
                  <SoftBox>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Email notifications &nbsp;
                    </SoftTypography>
                    <SoftInput />
                  </SoftBox>
                  <SoftBox>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Additional emails &nbsp;
                    </SoftTypography>
                    <SoftInput />
                  </SoftBox>
                  <SoftBox>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Contact numbers &nbsp;
                    </SoftTypography>
                    <SoftInput />
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Optional reference number &nbsp;
                    </SoftTypography>
                    <SoftInput />
                  </SoftBox>
                  <SoftBox>
                    <SoftTypography
                      variant="button"
                      fontWeight="bold"
                      textGradient
                    >
                      Priority(1-99) &nbsp;
                    </SoftTypography>
                    <SoftInput type="number" />
                  </SoftBox>
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>

        </Grid>
        <SoftBox mt={1} mb={1}>
          <SoftButton variant="gradient" color="dark" size="small">
            save
          </SoftButton>
          &nbsp;
          <SoftButton variant="gradient" color="dark" size="small">
            save and add another
          </SoftButton>
          &nbsp;
          <SoftButton variant="gradient" color="dark" size="small">
            clear
          </SoftButton>
        </SoftBox>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Maintenance;
