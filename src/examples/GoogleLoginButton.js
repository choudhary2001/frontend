import React from 'react';
import { GoogleLogin } from 'react-google-login';
import PropTypes from 'prop-types';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const clientId = '120374780375-23gnf3kli0916calis94ttmabum6l9lb.apps.googleusercontent.com';

  return (
    <GoogleLogin  style={{width:"100%", justifyContent:"center"}}
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};


GoogleLoginButton.propTypes = {
    onSuccess: PropTypes.func.isRequired,
    onFailure: PropTypes.func.isRequired,
};

export default GoogleLoginButton;
