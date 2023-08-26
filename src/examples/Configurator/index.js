import { useContext, useState, useEffect } from "react";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

import swal from 'sweetalert2';

// HG Pro components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import EditFormPopup from "./AddQuery";
import AuthContext from "context/AuthContext";
import refreshAccessToken from 'adminRefresToken';
// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

import 'layouts/manager/property/AddUser.css'
import SupportPopup from './PopUp';
import './PopUp.css'

// HG Pro context
import {
  useSoftUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setFixedNavbar,
  setSidenavColor,
} from "context";

function Configurator() {
  const [controller, dispatch] = useSoftUIController();
  const { openConfigurator, transparentSidenav, fixedNavbar, sidenavColor } = controller;
  const [disabled, setDisabled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(null);

  const { adminauthTokens, authTokens, managerauthTokens, logoutUser } = useContext(AuthContext);

  const selectedAuthToken = adminauthTokens || managerauthTokens || authTokens;

  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const newAccessToken = await refreshAccessToken(selectedAuthToken?.refresh);
      const response = await fetch("https://hgpro.theworkflow.nyc/support/api/view/query",
      {
        method : "GET",
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      }
      );
      const data = await response.json();
      console.log(data)
      setQueries(data.support); // Set the fetched data in the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const handleDeleteQuery = async (support_id) => {
    try {
      const newAccessTokenn = await refreshAccessToken(selectedAuthToken?.refresh);
      const response = await fetch(`https://hgpro.theworkflow.nyc/support/api/delete/query/${support_id}`, 
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${newAccessTokenn}`,
        },
      });

      if (response.status === 200) {
        console.log("Query deleted successfully!");
        fetchData();
        swal.fire({
          title: "Query Deleted Successfully.",
          icon: "success",
          toast: true,
          timer: 3000,
          position: 'bottom-left',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        console.error("Failed to deleted query.");
        swal.fire({
          title: "Query Deletion Failed.",
          icon: "error",
          toast: true,
          timer: 3000,
          position: 'bottom-left',
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Error occurred while deleting query:", error);
      swal.fire({
        title: "An error occurred. Please try again.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: 'bottom-left',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };
  

  const handlequeryClick = (Id) => {
    // Find the selected query from the queryData array
    const selected = queries.find((query) => query.support_id === Id);
    console.log(selected)
    setSelectedQuery(selected);
  };


  const handleClosePopup = () => {
    setSelectedQuery(null);
    fetchData();
  };

  const showAddQueryButton = authTokens || managerauthTokens;

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => setTransparentSidenav(dispatch, true);
  const handleWhiteSidenav = () => setTransparentSidenav(dispatch, false);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    boxShadows: { buttonBoxShadow },
  }) => ({
    height: pxToRem(42),
    boxShadow: buttonBoxShadow.main,

    "&:hover, &:focus": {
      opacity: 1,
    },
  });

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }} >
      <SupportPopup selectedQuery={selectedQuery} onClose={handleClosePopup} />

      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={1}
        pb={0.8}
        px={1}
      >
        <SoftBox>
          <SoftTypography variant="h5">Support</SoftTypography>
          
        </SoftBox>
        <SoftBox>
          {showAddQueryButton && (
            <SoftButton
              variant="outlined"
              color="info"
              size="small"
              style={{ margin: "3px" }}
              onClick={() => setIsPopupOpen(true)}
            >
              Add Query
            </SoftButton>
          )}
        </SoftBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            stroke: dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </SoftBox>
      
      <Divider />


      <SoftBox pt={1.25} pb={1} px={1}>
        {/* Render the fetched data */}
        {queries.map((query) => (
          <>
          <SoftBox key={query.support_id} style={{display:"flex", justifyContent:"space-between"}}>
            <SoftBox  onClick={() => handlequeryClick(query.support_id)} style={{cursor:"pointer"}}
                  onClose={handleClosePopup}>
              <SoftTypography variant="subtitle1" style={{fontSize:"15px"}}>{query.name.slice(0, 33)}<span style={{fontSize:"10px", marginLeft:"10px", top:"0", position:"relative", backgroundColor: query.status === "Deleted" ? "red" : "green", padding:"5px", borderRadius:"15px", color:"white"}}>{query.status}</span></SoftTypography>
              <SoftTypography variant="body2" style={{fontSize:"15px"}}>{query.joined_date}</SoftTypography>
            </SoftBox>

            <SoftBox>
             
               <Icon style={{cursor:"pointer", color:"red"}} onClick={() => handleDeleteQuery(query.support_id)}>delete</Icon>
              
            </SoftBox>
          </SoftBox>
          <Divider />
          </>
        ))}
      </SoftBox>
      {isPopupOpen && (
        <EditFormPopup
          onClose={() => 
            {
              setIsPopupOpen(false);
              fetchData();
            }}

          // onSave={handleSave}
        />
      )}
    </ConfiguratorRoot>
  );
}

export default Configurator;
