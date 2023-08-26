/**
=========================================================
* HG Pro - v4.0.0
=========================================================

* Product Page: https://hgpro.theworkflow.nyc/
* Copyright 2022 HG Pro (https://hgpro.theworkflow.nyc)

Coded by hgpro.theworkflow.nyc

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { styled } from "@mui/material/styles";

export default styled("div")(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { size } = ownerState;

  const { dark } = palette;
  const { pxToRem } = functions;

  return {
    lineHeight: 0,
    padding: size === "small" ? `${pxToRem(4)} ${pxToRem(10)}` : `${pxToRem(8)} ${pxToRem(10)}`,
    width: pxToRem(39),
    height: "100%",
    color: dark.main,
  };
});
