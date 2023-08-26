import React, { useContext, useEffect, useState } from 'react';

import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftButton from 'components/SoftButton';
import SidenavCollapse from 'examples/Sidenav/SidenavCollapse';
import SidenavCard from 'examples/Sidenav/SidenavCard';
import SidenavRoot from 'examples/Sidenav/SidenavRoot';
import sidenavLogoLabel from 'examples/Sidenav/styles/sidenav';
import { useSoftUIController, setMiniSidenav, setselectedPropertyId } from 'context';
import AuthContext from "context/AuthContext";
import refreshAccessToken from 'adminRefresToken';

function Sidenav({ color, brand, brandName, routes, ...rest }) {

  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav, selectedPropertyId } = controller;
  const location = useLocation();
  const { pathname } = location;
  const [activeRoute, setActiveRoute] = useState('');
  
  const { adminauthTokens, authTokens, managerauthTokens, logoutUser } = useContext(AuthContext);

  const showSelectButton = authTokens || managerauthTokens;


  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    window.addEventListener('resize', handleMiniSidenav);
    handleMiniSidenav();

    return () => window.removeEventListener('resize', handleMiniSidenav);
  }, [dispatch, location]);

  const handleCollapseClick = (key) => {
    setActiveRoute(activeRoute === key ? '' : key);
  };

  const renderRoutes = routes.map(
    ({ type, name, icon, title, noCollapse, key, route, href, children }) => {
      let returnValue;

      if (type === 'collapse') {
        const isActive = activeRoute === key;

        returnValue = (
          <React.Fragment key={key} >
            <NavLink
              to={route} key={key}
              rel="noreferrer"
              sx={{ textDecoration: 'none' }}
              onClick={() => handleCollapseClick(key)}
            >
              <SidenavCollapse
                color={color}
                name={name}
                icon={icon}
                active={isActive}
                noCollapse={noCollapse}
              />
            </NavLink>
            {isActive && (
              <List sx={{ pl: 3 }}>
                {children.map(
                  ({ type: childType, name: childName, icon: childIcon, route: childRoute, key: childKey }) =>
                    childType === 'item' ? (
                      <NavLink to={childRoute} key={childKey}>
                        <SidenavCollapse
                          color={color}
                          name={childName}
                          icon={childIcon}
                          active={pathname === childRoute}
                        />
                      </NavLink>
                    ) : null
                )}
              </List>
            )}
          </React.Fragment>
        );
      } else if (type === 'title') {
        returnValue = (
          <SoftTypography
            key={key}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            opacity={0.6}
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </SoftTypography>
        );
      } else if (type === 'divider') {
        returnValue = <Divider key={key} />;
      }

      return returnValue;
    }
  );

  const [user_property, setUserProperty] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const newAccessToken = await refreshAccessToken(showSelectButton?.refresh);
      const response = await fetch("https://hgpro.theworkflow.nyc/manager/api/my/property",
      {
        method : "GET",
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      }
      );
      const data = await response.json();
      console.log(data.property)
      setUserProperty(data.property); // Set the fetched data in the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePropertySelect = async (event) => {
    const selectedPropertyId = event.target.value;
    console.log("Selected Property ID:", selectedPropertyId);
    setselectedPropertyId(dispatch, selectedPropertyId);

    try {
      const newAccessToken = await refreshAccessToken(showSelectButton?.refresh);
      const response = await fetch("https://hgpro.theworkflow.nyc/manager/api/my/selected/property", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedPropertyId }), // Sending the selected property ID in the request body
      });
  
      if (response.status === 200) {
        console.log("Selected property updated successfully.");
      } else {
        console.error("Failed to update selected property.");
      }
    } catch (error) {
      console.error("Error updating selected property:", error);
    }
  };
  

  const renderPropertyInfo = () => {
    if (user_property && showSelectButton) {
      return (
        <>
        <Divider />
        <SoftBox>
          <select style={{ width: "100%", padding: "5px", borderRadius: "5px", cursor: "pointer" }} onChange={handlePropertySelect}>
            <option></option>
            {user_property.map(p => (
              <option key={p.property.property_id} value={p.property.property_id}>
                {p.property.title} ( {p.property.property_id} )
              </option>
            ))}
          </select>
        </SoftBox>
        </>
      );
    }
    return null;
  };



  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
      <SoftBox pt={3} pb={1} px={4} textAlign="center">
        <SoftBox
          display={{ xs: 'block', xl: 'none' }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: 'pointer' }}
        >
          <SoftTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
          </SoftTypography>
        </SoftBox>
        <SoftBox component={NavLink} to="/" display="flex" alignItems="center">
          {/* {brand && <SoftBox component="img" src={brand} alt="HG Pro" width="2rem" />} */}
          {/* {<SoftBox  alt="HG Pro" width="2rem" />} */}
          <SoftBox width={!brandName && '100%'} sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}>
            <SoftTypography component="h6" variant="button" fontWeight="medium">
              {brandName}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        {renderPropertyInfo()}

      </SoftBox>
      <Divider />
      <List>{renderRoutes}</List>
    </SidenavRoot>
  );
}

Sidenav.defaultProps = {
  color: 'info',
  brand: '',
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark']),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
