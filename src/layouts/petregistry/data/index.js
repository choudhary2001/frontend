// @mui material components
import Tooltip from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";

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
                Unit :
            </SoftTypography>
        ),
        about: (
            <SoftBox sx={{display:"flex", alignItems:"center"}}>
                <Checkbox/>
                <SoftTypography
                variant="caption" color="text" fontWeight="medium"
                >
                    All
                </SoftTypography>
                <SoftInput sx={{padding:"2px", margin:"5px"}}  />
          </SoftBox>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2}>
                Status :
            </SoftTypography>
        ),
        about: (
            <SoftBox >
                <Checkbox/>
                <SoftTypography
                variant="button"
                fontWeight="regular"
                >
                &nbsp;&nbsp;Submitted &nbsp;
                </SoftTypography>
                <Checkbox/>
                <SoftTypography
                variant="button"
                fontWeight="regular"
                >
                &nbsp;&nbsp;Accepted &nbsp;
                </SoftTypography>
                <Checkbox/>
                <SoftTypography
                variant="button"
                fontWeight="regular"
                >
                &nbsp;&nbsp;Rejected &nbsp;
                </SoftTypography>
          </SoftBox>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2}>
                Pet Type :
            </SoftTypography>
        ),
        about: (
            <SoftBox >
                <select>
                  <option>All</option>
                  <option>Bird</option>
                  <option>Cat</option>
                  <option>Dog</option>
                  <option>All</option>
                </select>
          </SoftBox>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2} >
                Pet Name :
            </SoftTypography>
        ),
        about: (
            <SoftBox sx={{display:"flex", alignItems:"center"}}>
              
                <SoftInput sx={{padding:"2px", margin:"5px"}}  />
          </SoftBox>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2}>
                Vaccinated?
            </SoftTypography>
        ),
        about: (
            <SoftBox >
                <input selected type="radio" name="permission" />
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
                <input type="radio" name="permission" />
                <SoftTypography
                variant="button"
                fontWeight="regular"
                >
                &nbsp;&nbsp;All &nbsp;
                </SoftTypography>
          </SoftBox>
        ),
      }, 
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2} >
                Pet Weight :
            </SoftTypography>
        ),
        about: (
            <SoftBox sx={{display:"flex", alignItems:"center"}}>
                
                <SoftInput sx={{padding:"2px", margin:"5px"}}  />
          </SoftBox>
        ),
      }, 
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2} >
                Since Vaccination Date:
            </SoftTypography>
        ),
        about: (
            <SoftBox sx={{display:"flex", alignItems:"center"}}>
                
                <SoftInput type="date" sx={{padding:"2px", margin:"5px"}}  />
          </SoftBox>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2} >
                Until Vaccination Date:
            </SoftTypography>
        ),
        about: (
            <SoftBox sx={{display:"flex", alignItems:"center"}}>
                <SoftInput type="date" sx={{padding:"2px", margin:"5px"}}  />
          </SoftBox>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2} >
                Display Pet Photos:
            </SoftTypography>
        ),
        about: (
            <SoftBox sx={{display:"flex", alignItems:"center"}}>
                <Checkbox/>
          </SoftBox>
        ),
      },
      {
        title: (
            <SoftTypography variant="button"
            color="text"
            fontWeight="medium" px={2} >
                Include Deactivated Units:
            </SoftTypography>
        ),
        about: (
            <SoftBox sx={{display:"flex", alignItems:"center"}}>
                <Checkbox/>
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
          <SoftTypography>&nbsp;</SoftTypography>
        ),
      },


    ],
  };
}
