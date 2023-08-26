// @mui material components
import Tooltip from "@mui/material/Tooltip";

// HG Pro components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";
import { Link } from "react-router-dom";

export default function data() {

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
            fontWeight="medium" px={2} >
                Search for unit
            </SoftTypography>
        ),
        about: (
            <SoftBox>
                <SoftInput />
                <SoftTypography
                variant="caption" color="text" fontWeight="medium"
                >
                    Enter any part of Unit #, Company/Family Name, Contact Name or Email Address. Leave blank to display all entries.
                </SoftTypography>
          </SoftBox>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2}>
                Sort By
            </SoftTypography>
        ),
        about: (
            <SoftBox >
                <input selected type="radio" name="permission" />
                <SoftTypography
                variant="button"
                fontWeight="regular"
                >
                &nbsp;&nbsp;Unit # &nbsp;
                </SoftTypography>
                <input type="radio" name="permission" />
                <SoftTypography
                variant="button"
                fontWeight="regular"
                >
                &nbsp;&nbsp;Company/Family Name &nbsp;
                </SoftTypography>
          </SoftBox>
        ),
      },
      {
        title: (
            <SoftButton variant="gradient" color="info">
                Search
            </SoftButton>
        ),
        about: (
            <SoftButton variant="gradient" color="info">
                Advanced Search
            </SoftButton>
        ),
      },


    ],
  };
}
