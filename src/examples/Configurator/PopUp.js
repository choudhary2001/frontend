import React, { useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Table from "examples/Tables/Table";
import refreshAccessToken from 'adminRefresToken';
import swal from 'sweetalert2';
import AuthContext from "context/AuthContext";
import SoftInput from "components/SoftInput";
import Icon from "@mui/material/Icon";


const SupportPopup = ({ selectedQuery, onClose }) => {

    if (!selectedQuery) return null;
    const [message, setMessage] = useState('');
    const [usernamee, setUsername] = useState(null);
    const [queryData, setqueryData] = useState([]);
    const [loading, setLoading] = useState(false); // Add loading state
    const { adminauthTokens, authTokens, managerauthTokens, logoutUser } = useContext(AuthContext);
    const [newStatus, setNewStatus] = useState(selectedQuery.status);

    const selectedAuthToken = adminauthTokens || managerauthTokens || authTokens;

    const [shouldRefreshData, setShouldRefreshData] = useState(false);



    useEffect(() => {
        fetchData(selectedQuery.support_id);
        fetchuserdata();
    }, [shouldRefreshData]);


    const fetchuserdata = async() => {
        const newAccessToken = await refreshAccessToken(selectedAuthToken?.refresh);
        const response = await fetch('https://hgpro.theworkflow.nyc/authentication/api/username', {
            headers: {
                Authorization: `Bearer ${newAccessToken}`,
            },
        });

        if (response.status === 200) {
            const data = await response.json();
            console.log(data)
            setUsername(data.username);
        } else {
            const responseData = await response.json();
            if (responseData.success === false && responseData.error === "login") {
                logoutUser();
                // <Navigate to="/manager/sign-in" />
                console.log("User needs to log in. Logging out...");
            }
            console.error("Failed to fetch query data");
        }
    }

    console.log(usernamee)
    
    const currentUser = {
        username: usernamee, 
      };
    

    const fetchData = async (supportId) => {
        try {
            const newAccessToken = await refreshAccessToken(selectedAuthToken?.refresh);
            console.log(newAccessToken)
            const response = await fetch(`https://hgpro.theworkflow.nyc/support/api/view/message/${supportId}`, {
                headers: {
                    Authorization: `Bearer ${newAccessToken}`,
                },
            });
            if (response.status === 200) {
                const data = await response.json();
                console.log(data)
                setqueryData(data.support);
            } else {
                const responseData = await response.json();
                if (responseData.success === false && responseData.error === "login") {
                    logoutUser();
                    // <Navigate to="/manager/sign-in" />
                    console.log("User needs to log in. Logging out...");
                }
                console.error("Failed to fetch query data");
            }
        } catch (error) {
            console.error("Error while fetching query data:", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (message.trim() === '') {

        }
        else {

            const formData = new FormData();
            formData.append('message', message);
            try {
                setLoading(true);
                const newAccessToken = await refreshAccessToken(selectedAuthToken?.refresh);
                const response = await fetch(`https://hgpro.theworkflow.nyc/support/api/add/message/${selectedQuery.support_id}`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${newAccessToken}`,
                    },
                    body: formData,
                });

                if (response.status === 200) {
                    console.log("success")
                    setMessage('');
                    fetchData(selectedQuery.support_id);
                } else {
                    console.error('Failed to add query');
                    const responseData = await response.json();
                    if (responseData.success === false && responseData.error === "login") {
                        logoutUser();
                        console.log("User needs to log in. Logging out...");
                    } else {
                        swal.fire({
                            title: "Failed to add query.",
                            icon: "error",
                            toast: true,
                            timer: 3000,
                            position: 'bottom-left',
                            timerProgressBar: true,
                            showConfirmButton: false,
                        });
                    }
                }
            } catch (error) {
                console.error('Error occurred while adding query:', error);
            }
            finally {
                setLoading(false);
            }
        }
    };

    const handleStatusChange = async (e, SupportId) => {
        const newStatus = e.target.value;

        try {
          const newAccessToken = await refreshAccessToken(adminauthTokens?.refresh);
          const response = await fetch("https://hgpro.theworkflow.nyc/support/api/update/query", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newAccessToken}`,
            },
            body: JSON.stringify({ status: newStatus, SupportId }),
          });
    
          if (response.status === 200) {
            setNewStatus(newStatus);
            swal.fire({
              title: "Status Change successfully.",
              icon: "success",
              toast: true,
              timer: 3000,
              position: 'bottom-right',
              timerProgressBar: true,
              showConfirmButton: false,
            });
            console.log("Status change successful!");
          } else {
            const responseData = await response.json();
            if (responseData.success === false && responseData.error === "login") {
              logoutUser();
              console.log("User needs to log in. Logging out...");
            } else {
              console.error("Status change failed.");
              swal.fire({
                title: "Status Change Failed.",
                icon: "error",
                toast: true,
                timer: 3000,
                position: 'bottom-right',
                timerProgressBar: true,
                showConfirmButton: false,
              });
              setUserData(userData);
              setFilteredData(userData);
            }
          }
        } catch (error) {
          console.error("Error occurred while changing status:", error);
          swal.fire({
            title: "An error occurred. Please try again.",
            icon: "error",
            toast: true,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
      };
    


    return (
        <div className="query-popup">
            <div className="query-popup-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="query-details" style={{ borderBottom: "1px solid grey" }}>

                    <SoftBox
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        flexWrap="wrap"
                        p={1}
                        style={{ borderBottom: "1px solid grey" }}
                    >


                        <SoftBox style={{ textWrap: "wrap" }}>
                            <SoftTypography variant="subtitle1">{selectedQuery.name}
                            
                            <span style={{ fontSize: "10px", marginLeft: "10px", top: "0", position: "relative", backgroundColor: selectedQuery.status === "Deleted" ? "red" : "green", padding: "5px", borderRadius: "15px", color: "white" }}>{newStatus || selectedQuery.status}</span>
                            </SoftTypography>
                            {selectedQuery.status === "Deleted" ? null : (
                                <>
                                {adminauthTokens && (
                                    <select value={newStatus || selectedQuery.status} style={{borderRadius:"10px", padding:"5px"}} onChange={(e) => handleStatusChange(e, selectedQuery.support_id)}>
                                        <option value="Processing">Processing</option>
                                        <option value="Resolved">Resolved</option>
                                    </select>
                                )}
                                </>
                            )}

                            <SoftTypography variant="body2" style={{ fontSize: "15px" }}>{selectedQuery.joined_date}</SoftTypography>
                        </SoftBox>


                    </SoftBox>
                    <SoftTypography style={{ width: "100%" }}>
                        <p>{selectedQuery.description}</p>
                    </SoftTypography>
                    {selectedQuery.image ? (
                        <img src={`https://hgpro.theworkflow.nyc${selectedQuery.image}`} alt="Image" style={{ width: "100%" }} />
                    ) : null}


                </div>
                <div className="query-details-chats" >
                {queryData.map((data) => (
                    <div
                    key={data.message_id}
                    style={{
                      display: "flex",
                      flexDirection: currentUser.username === data.user.username ? "row-reverse" : "row",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor:
                          currentUser.username === data.user.username ? "#7ac7fc" : "#f2f2f2",
                        borderRadius: "8px",
                        padding: "8px",
                        margin: "4px",
                      }}
                    >
                      <p>{data.message}</p>
                      <p>{data.joined_date}</p>
                    </div>
                  </div>
                ))}


                </div>
                {selectedQuery.status === "Deleted" ? null : (
                    <div className="query-details-chatbox">
                        <SoftInput
                            type="text"
                            name="message"
                            placeholder="Type your query .."
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        >

                        </SoftInput>
                        <SoftButton onClick={handleSubmit} type="submit" disabled={loading}>
                            {loading ? "..." : <Icon style={{ cursor: "pointer", color: "blue" }} >send</Icon>}

                        </SoftButton>
                    </div>
                ) }

            </div>
        </div>
    );
};

SupportPopup.propTypes = {
    selectedQuery: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string,
        status: PropTypes.string.isRequired,
        joined_date: PropTypes.string.isRequired,
        support_id: PropTypes.string.isRequired,
        // Add other query details prop types here if needed
    }),
    
    onClose: PropTypes.func.isRequired,
};

export default SupportPopup;
