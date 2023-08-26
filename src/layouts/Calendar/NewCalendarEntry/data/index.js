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
      { name: "date", align: "left" },
      { name: "time", align: "left" },
      { name: "description", align: "left" },
    ],

    rows: [
      {
        date: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2} >
                13 TUESDAY
            </SoftTypography>
        ),
        time: (
                <SoftTypography
                variant="caption" color="text" fontWeight="medium"
                >
                    8 AM - 12 AM
                </SoftTypography>
        ),
        description: (
            <>
            <SoftBox sk={{display:"flex"}}>
                <SoftTypography
                variant="caption" color="text" fontWeight="bold"
                >
                    Con Edison &nbsp; &nbsp;
                </SoftTypography>
                <SoftTypography
                variant="caption" color="text" fontWeight="medium"
                >
                Southern Cross will come to install 4 smart meter devices on our 4 gas meters.
                </SoftTypography>
            </SoftBox>
            </>
        ),
      },

      {
        date: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2} >
                13 TUESDAY
            </SoftTypography>
        ),
        time: (
                <SoftTypography
                variant="caption" color="text" fontWeight="medium"
                >
                    8 AM - 12 AM
                </SoftTypography>
        ),
        description: (
            <>
            <SoftBox sk={{display:"flex"}}>
                <SoftTypography
                variant="caption" color="text" fontWeight="bold"
                >
                    Con Edison &nbsp; &nbsp;
                </SoftTypography>
                <SoftTypography
                variant="caption" color="text" fontWeight="medium"
                >
                Southern Cross will come to install 4 smart meter devices on our 4 gas meters.
                </SoftTypography>
            </SoftBox>
            </>
        ),
      },

      {
        date: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2} >
                13 TUESDAY
            </SoftTypography>
        ),
        time: (
                <SoftTypography
                variant="caption" color="text" fontWeight="medium"
                >
                    8 AM - 12 AM
                </SoftTypography>
        ),
        description: (
            <>
            <SoftBox sk={{display:"flex"}}>
                <SoftTypography
                variant="caption" color="text" fontWeight="bold"
                >
                    Con Edison &nbsp; &nbsp;
                </SoftTypography>
                <SoftTypography
                variant="caption" color="text" fontWeight="medium"
                >
                Southern Cross will come to install 4 smart meter devices on our 4 gas meters.
                </SoftTypography>
            </SoftBox>
            </>
        ),
      },



    ],
  };
}
