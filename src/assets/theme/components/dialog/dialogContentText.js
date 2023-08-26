/**
=========================================================
* HG Pro - v3.1.0
=========================================================

* Product Page: https://hgpro.theworkflow.nyc/product/soft-ui-dashboard-pro-react
* Copyright 2022 HG Pro (https://hgpro.theworkflow.nyc)

Coded by hgpro.theworkflow.nyc

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// HG Pro base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// HG Pro helper functions
// import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;

const dialogContentText = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};

export default dialogContentText;
