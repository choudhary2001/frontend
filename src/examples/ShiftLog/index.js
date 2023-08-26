import React, { useContext, useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import swal from 'sweetalert2';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import AuthContext from "context/AuthContext";
import refreshAccessToken from 'adminRefresToken';
import ShiftLogRoot from "examples/ShiftLog/ShiftLogRoot";
import clipbord from "assets/images/clipbord_image.jpeg";
import 'layouts/manager/property/AddUser.css';
import {
  useSoftUIController,
  setOpenShiftLog,
  setTransparentSidenav,
  setFixedNavbar,
  setSidenavColor,
  setselectedPropertyId
} from "context";

function ShiftLog() {
  const [controller, dispatch] = useSoftUIController();
  const { selectedPropertyId, openShiftLog } = controller; // Removed 'openShiftLog' since it's not used
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingg, setIsLoadingg] = useState(false);
  const [disabled, setDisabled] = useState(false); // Unused, consider removing

  const { adminauthTokens, authTokens, managerauthTokens, logoutUser } = useContext(AuthContext);
  const selectedAuthToken = managerauthTokens || authTokens;
  const shift_log_auth =  authTokens || managerauthTokens;

  const [priority, setPriority] = useState('Normal');
  const [relatedUnit, setRelatedUnit] = useState('');
  const [noteText, setNoteText] = useState('');
  const [shiftLogs, setShiftLogs] = useState([]);

  // Fetch selected property whenever selectedPropertyId changes
  useEffect(() => {
    fetchSelectedProperty();
    if (selectedPropertyId) {
      fetchSelectedProperty();
    }
  }, [selectedPropertyId]);

  const fetchSelectedProperty = async () => {
    try {
      const newAccessToken = await refreshAccessToken(selectedAuthToken?.refresh);
      const response = await fetch("https://hgpro.theworkflow.nyc/manager/api/my/selected/property", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      });

      const data = await response.json();
      setselectedPropertyId(dispatch, data.property_id);
    } catch (error) {
      console.error("Error fetching selected property:", error);
    }
  };

  async function fetchShiftLogs() {
    try {
      const newAccessToken = await refreshAccessToken(shift_log_auth?.refresh);
      const response = await fetch(`https://hgpro.theworkflow.nyc/manager/api/add/new/shift/log/${selectedPropertyId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setShiftLogs(data.shift);
      } else {
        console.error("Failed to fetch shift logs.");
      }
    } catch (error) {
      console.error("Error fetching shift logs:", error);
    }
  }

  useEffect(() => {
    // Fetch shift logs data
    fetchShiftLogs();
  }, [selectedPropertyId]); // Fetch shift logs when selectedPropertyId changes


  const isSubmitDisabled = isLoading || (!priority || !noteText);

  const handleSubmit = async (e, isEndOfShiftNote) => {
    e.preventDefault();
  
    let descriptionToAdd = noteText;
    if (isEndOfShiftNote) {
      setIsLoadingg(true);
      descriptionToAdd = "End of Shift";
    }
    else{
      setIsLoading(true);
    }
  
    const formData = {
      priority,
      relatedUnit,
      noteText: descriptionToAdd,
    };
  
    try {
      const newAccessToken = await refreshAccessToken(shift_log_auth?.refresh);
      const response = await fetch(`https://hgpro.theworkflow.nyc/manager/api/add/new/shift/log/${selectedPropertyId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 200) {
        setPriority('Normal');
        setRelatedUnit('');
        setNoteText('');
        fetchShiftLogs(); // Fetch shift logs after successful submission
      } else {
        console.error("Failed to add shift log.");
      }
    } catch (error) {
      console.error("Error adding shift log:", error);
    } finally {
      setIsLoading(false);
      setIsLoadingg(false);
    }
  };
  

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

  const handleCloseShiftLog = () => setOpenShiftLog(dispatch, false);

  const [shiftLogHeight, setShiftLogHeight] = useState(0);
  const [addNoteHeight, setAddNoteHeight] = useState(0);

  useEffect(() => {
    const shiftLogContainer = document.getElementById('shift-log-container');
    const addNoteContainer = document.getElementById('add-note-container');

    if (shiftLogContainer && addNoteContainer) {
      const shiftLogRect = shiftLogContainer.getBoundingClientRect();
      const addNoteRect = addNoteContainer.getBoundingClientRect();

      setShiftLogHeight(shiftLogRect.height);
      setAddNoteHeight(addNoteRect.height);
    }
  }, []);

  const parentHeight = window.innerHeight; // Set parent height in vh units
  const middleSoftBoxHeight = `${parentHeight - shiftLogHeight - addNoteHeight}vh`;


  return (
    <ShiftLogRoot variant="permanent" ownerState={{ openShiftLog }}  >

      <SoftBox

        style={{
          height: '100vh', // Default height for smaller screens
          border: "10px solid #a9702c",
          borderRadius: "15px",
          marginTop: "25px",

          // Media query for larger screens
          '@media (minWidth: 768px)': {
            height: '80vh', // Adjust the height for larger screens
          },
        }}
      >
        <SoftBox
          display="flex"
          flexWrap="nowrap"
          flexDirection="column-reverse"
          alignContent="center"
          justifyContent="flex-end"
          alignItems="center"
          marginTop="-40px"
        >


          <img style={{ marginTop: "-32px", transform: "scale(0.8)" }} src={clipbord} />

          <Icon
            sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
              fontSize: `${size.md} !important`,
              fontWeight: `${fontWeightBold} !important`,
              strokeWidth: "2px",
              cursor: "pointer",
              mt: 2,
              zIndex: "999",
              color: "red",
            })}

            style={{ backgroundColor: "beige", borderRadius: "10px" }}
            onClick={handleCloseShiftLog}
          >
            close
          </Icon>
        </SoftBox>
        <SoftBox>
          <SoftBox id="shift-log-container" style={{ lineHeight: "20px", display: "flex", padding: "5px", flexDirection: "column", position: "fixed", width: "95%", backgroundColor: "white", marginTop: "-15px" }}>
            <SoftTypography variant="h5" style={{ textAlign: "center" }}>Shift Log</SoftTypography>
            <SoftBox style={{ textAlign: "center" }}>
              <SoftTypography
                component={Link}
                to="#"
                variant="button"
                color="info"
                fontWeight="medium"
                style={{ cursor: "pointer" }}
              >
                Subscription Status
              </SoftTypography>
              &nbsp; &nbsp;
              <SoftTypography
                component={Link}
                to="#"
                variant="button"
                color="info"
                fontWeight="medium"
                style={{ cursor: "pointer" }}
              >
                Hide Today&#39;s Incidents
              </SoftTypography>
            </SoftBox>
            <SoftTypography variant="p" style={{ textAlign: "center", fontSize: "15px", textWrap: "wrap" }}>Use the &#39;&#39;Search&#39;&#39; button to review Shift Notes added prior to 48 hours ago.</SoftTypography>
            <hr />
            <h5>Shift Notes :</h5>
          </SoftBox>

          <SoftBox
            style={{
              padding: "10px",
              position: "fixed",
              overflow: "hidden",
              top: shiftLogHeight + 75,
              bottom: addNoteHeight,
              width: "95%", // Set full width
              boxSizing: "border-box", // Make sure padding doesn't affect total width

              overflowY: "auto",

            }}

          >
            <hr />
            {shiftLogs.map((log, index) => (
                <React.Fragment key={index}>
                  {log.descripition === 'End of Shift' ? (
                    <p style={{ backgroundColor: "yellow" }}>
                      {log.joined_date} - 
                      <span style={{ fontWeight: "bold" }}> {log.descripition}</span>
                    </p>
                  ) : (
                    <p>
                      {log.joined_date} {log.descripition} - {log.user.first_name} {log.user.last_name}
                    </p>
                  )}
                  <hr/>
                </React.Fragment>
              ))}




          </SoftBox>

          <SoftBox id="add-note-container" style={{ padding: "5px", position: "fixed", width: "95%", bottom: "10px" }}>
            <hr />
            <h5>Add Note to Shift Log :</h5>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", marginBottom: "10px" }}>
                <p style={{ fontWeight: "bold", marginRight: "10px" }}>Priority :</p>
                <label style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>
                  <input type="radio" value="Normal" name="options" checked={priority === 'Normal'}
                    onChange={(e) => setPriority(e.target.value)}
                  /> Normal
                </label>
                <label style={{ display: "flex", alignItems: "center", marginLeft: "10px", fontSize: "12px" }}>
                  <input type="radio" value="High" name="options" checked={priority === 'High'}
                    onChange={(e) => setPriority(e.target.value)}
                  /> High
                </label>
                <p style={{ fontWeight: "bold", marginLeft: "10px" }}>Related to Unit (Optional):</p>
                <input type="text" name="related_unit" placeholder="Unit# or Name" style={{ width: "80px", marginLeft: "4px" }} value={relatedUnit}
                  onChange={(e) => setRelatedUnit(e.target.value)}
                />
              </div>

              <textarea style={{ width: "100%", height: "60px", marginBottom: "10px" }} name="description" value={noteText}
                onChange={(e) => setNoteText(e.target.value)}></textarea>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <SoftButton color="primary" type="submit" disabled={isSubmitDisabled}>{isLoading ? "+ +" : "+ Add note"}</SoftButton>
                <SoftButton color="info" onClick={(e) => handleSubmit(e, true)}>{isLoadingg ? "End . ." : "End of Shift Note"}</SoftButton>
                <SoftButton color="info"><Icon>search</Icon>Search</SoftButton>
              </div>
            </form>

          </SoftBox>
        </SoftBox>
      </SoftBox>

    </ShiftLogRoot>
  );
}

export default ShiftLog;
