// auth.js

import axios from 'axios';
import React, { useState, useRef, useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import jwt_decode from "jwt-decode";

const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(
      'https://hgpro.theworkflow.nyc/authentication/token/refresh/',
      {
        refresh: refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    if (response.status === 200) {
      // Store the token in local storage or a secure cookie


      
      const { access } = response.data;
      // Update the access token in your app's state or storage
      // Example: localStorage.setItem('accessToken', access);
      return access;
    } else {
      if (response.success === false && response.error === "login") {
        logoutUser();
        // <Navigate to="/admin/sign-in" />
        console.log("User needs to log in. Logging out...");
      }
      // localStorage.clear();
      // Redirect to the sign-in page
      return <Navigate to="/admin/sign-in" />;
    }
  } catch (error) {
    // Handle the error (e.g., redirect to login page)
    console.error('Failed to refresh access token:', error);
    throw error;
  }
};

export default refreshAccessToken;
