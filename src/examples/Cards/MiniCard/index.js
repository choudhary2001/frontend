

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// HG Pro components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function MiniCard({ bgColor, title,  icon, direction, links }) {
  return (
    <Card>
      <SoftBox bgColor={bgColor} variant="gradient">
        <SoftBox p={2}>
          <Grid container alignItems="flex-start" height="155px">
            {direction === "left" ? (
              <Grid item style={{alignItems:'flex-start'}}>
                <SoftBox
                  variant="gradient"
                  bgColor={bgColor === "white" ? icon.color : "white"}
                  color={bgColor === "white" ? "white" : "dark"}
                  width="2rem"
                  height="2rem"
                  borderRadius="md"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  <Icon fontSize="small" color="inherit">
                    {icon.component}
                  </Icon>
                </SoftBox>
              </Grid>
            ) : null}
            <Grid item xs={8} style={{alignItems:'flex-start'}}>
              <SoftBox ml={direction === "left" ? 2 : 0} lineHeight={1} style={{alignItems:'flex-start'}}>
                <SoftTypography
                  variant="h5"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  {title.text}
                </SoftTypography>
                
                <div style={{display:'flex', flexDirection:'column'}}>
                  {links.map((link, index) => (
                    <SoftTypography
                      key={index}
                      variant="button"
                      color={bgColor === 'white' ? 'text' : 'white'}
                      opacity={bgColor === 'white' ? 1 : 0.7}
                      textTransform="capitalize"
                      fontWeight="bold"
                      component="a"
                      href={link.url}
                      rel="noopener noreferrer"
                      style={{padding:'2px',}}
                    >
                      {link.text}
                    </SoftTypography>
                  ))}
                </div>
              </SoftBox>
            </Grid>
            {direction === "right" ? (
              <Grid item xs={4}>
                <SoftBox
                  variant="gradient"
                  bgColor={bgColor === "white" ? icon.color : "white"}
                  color={bgColor === "white" ? "white" : "dark"}
                  width="2rem"
                  height="2rem"
                  marginLeft="auto"
                  borderRadius="md"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  <Icon fontSize="small" color="inherit">
                    {icon.component}
                  </Icon>
                </SoftBox>
              </Grid>
            ) : null}
          </Grid>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of MiniCard
MiniCard.defaultProps = {
  bgColor: "white",
  title: {
    fontWeight: "medium",
    text: "",
  },
  percentage: {
    color: "success",
    text: "",
  },
  direction: "right",
};

// Typechecking props for the MiniCard
MiniCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),

  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MiniCard;
