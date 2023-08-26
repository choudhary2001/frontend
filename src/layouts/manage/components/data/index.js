// @mui material components
import Tooltip from "@mui/material/Tooltip";

// HG Pro components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";
import { Link } from "react-router-dom";
// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "title", align: "left" },
      { name: "about", align: "left" },
    ],

    rows: [
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            component={Link}
            to="/units/occupants" 
            fontWeight="medium" px={2} sx={{ textDecoration: "underline" }}>
                Units/Occupants
            </SoftTypography>
        ),
        about: (
          <SoftTypography variant="caption" color="text" fontWeight="medium" px={2}>
            Update occupant names, contact, and emergency information. Work with resident login names and passwords, and notification preferences. Handle move-ins and move-outs.
          </SoftTypography>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            component={Link}
            to="/calendar" 
            fontWeight="medium" px={2} sx={{ textDecoration: "underline" }}>
                Calendar
            </SoftTypography>
        ),
        about: (
          <SoftTypography variant="caption" color="text" fontWeight="medium" px={2}>
            View or post events, meetings, or appointments on the shared building calendar, and set viewing permissions for staff, residents, and board.
          </SoftTypography>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            component={Link}
            to="/library" 
            fontWeight="medium" px={2} sx={{ textDecoration: "underline" }}>
                Library
            </SoftTypography>
        ),
        about: (
          <SoftTypography variant="caption" color="text" fontWeight="medium" px={2}>
            Upload notices, documents, instructions, forms, or attached files to a shared document library and set viewing permissions for staff, residents, and board.
          </SoftTypography>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            component={Link}
            to="/reservations" 
            fontWeight="medium" px={2} sx={{ textDecoration: "underline" }}>
                Reservations
            </SoftTypography>
        ),
        about: (
          <SoftTypography variant="caption" color="text" fontWeight="medium" px={2}>
            View, submit, or approve Reservations for various reservable spaces or amenities defined for your building (i.e. service elevator, community room)
          </SoftTypography>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            component={Link}
            to="/pet/registery" 
            fontWeight="medium" px={2} sx={{ textDecoration: "underline" }}>
                Pet Registery
            </SoftTypography>
        ),
        about: (
          <SoftTypography variant="caption" color="text" fontWeight="medium" px={2}>
            &nbsp;
          </SoftTypography>
        ),
      },

    ],
  };
}
