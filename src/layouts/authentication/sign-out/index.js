import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const [loggedOut, setLoggedOut] = useState(false);
const handleLogout = async () => {
    try {
      await axios.post("/authentication/api/signout"); 
      // Replace with your logout API endpoint
      setLoggedOut(true);
    } catch (error) {
      // Handle error, if any
    }
  };

    