import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import clipbord from "assets/images/clipboard-removebg-preview.png";

export default styled(Drawer)(({ theme, ownerState }) => {
  const { boxShadows, functions, transitions } = theme;
  const { openShiftLog } = ownerState;

  let ShiftLogWidth = 360;

  // Check if the device width is greater than 568 and update ShiftLogWidth accordingly
  if (window.innerWidth > 568) {
    const increments = Math.floor((window.innerWidth - 568) / 500);
    ShiftLogWidth = 360 + increments * 100;
  }
  
  const { lg } = boxShadows;
  const { pxToRem } = functions;

  // drawer styles when openShiftLog={true}
  const drawerOpenStyles = () => ({
    width: ShiftLogWidth,
    left: "initial",
    right: 0,
    transition: transitions.create("right", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  // drawer styles when openShiftLog={false}
  const drawerCloseStyles = () => ({
    left: "initial",
    right: pxToRem(-360),
    transition: transitions.create("all", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  return {
    "& .MuiDrawer-paper": {
      height: "100%",
      margin: 0,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: "auto",
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      ...(openShiftLog ? drawerOpenStyles() : drawerCloseStyles()),
    },
  };
});
