import Typography from "@mui/material/Typography";
import GridViewIcon from "@mui/icons-material/GridView";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import CollectionsIcon from "@mui/icons-material/Collections";

import { AddBox } from "@mui/icons-material";

export default function TopControls() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <IconButton color="#FFFFFF">
        <CollectionsIcon
          sx={{ color: "#FFFFFF", width: "4.5vw", height: "4.5vh" }}
        />
      </IconButton>
      <Typography
        variant="h6"
        color="#FFFFFF"
        sx={{
          pl: 2,
          color: "#FFFFFF",
          fontSize: "2em",
          fontFamily: "Avenir2, Arial, sans-serif",
        }}
      >
        マイライブラリ
      </Typography>
      <GridViewIcon
        sx={{ color: "#FFFFFF", width: "4.5vw", height: "4.5vh" }}
      />
    </Box>
  );
}
