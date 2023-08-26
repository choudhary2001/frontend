// @mui material components
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

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
            { name: "Icon", align: "center" },
            { name: "Color", align: "center" },
            { name: "Name", align: "center" },
            { name: "In Public Display", align: "center" },
            { name: "Who can POST", align: "center" },
            { name: "Who can VIEW", align: "center" },
        ],

        rows: [
            {
                Icon: (
                    <Icon fontSize="small" color="inherit">
                        home
                    </Icon>
                ),
                Color: (
                    <span style={{ backgroundColor: 'red', padding:"3px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  ),
                Name: "Item 1",
                "In Public Display": "Yes",
                "Who can POST": "Management, Non-Mgmt employees",
                "Who can VIEW": "Edit",
            },
            {
                Icon: (
                    <Icon fontSize="small" color="inherit">
                        settings
                    </Icon>
                ),
                Color: (
                    <span style={{ backgroundColor: 'blue', padding:"3px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  ),
                Name: "Item 2",
                "In Public Display": "No",
                "Who can POST": "Management, Non-Mgmt employees",
                "Who can VIEW": "Edit",
            },

        ],
    };
}
