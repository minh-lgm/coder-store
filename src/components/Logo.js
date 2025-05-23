import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";
import { BASE_URL } from "../app/config";

function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img src={`${BASE_URL}/logo.png`} alt="logo" width="100%" />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}

export default Logo;