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
            { name: "Reservation Time", align: "center" },
            { name: "Amenity", align: "center" },
            { name: "Requested For", align: "center" },
            { name: "Description", align: "center" },
            { name: "Status", align: "center" },
          ],
          rows: [
            {
              "Reservation Time": "2023-06-08 10:00 AM",
              "Amenity": "Swimming Pool",
              "Requested For": "John Doe",
              "Description": "Request for additional towels",
              "Status": "Pending"
            },
            {
              "Reservation Time": "2023-06-08 10:00 AM",
              "Amenity": "Swimming Pool",
              "Requested For": "John Doe",
              "Description": "Request for additional towels",
              "Status": "Pending"
            }
          ]
          
    };
}
