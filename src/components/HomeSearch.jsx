import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

import ButtonBase from "@mui/material/ButtonBase";

export default function HomeSearch() {
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        height: "12vh",
        borderRadius: "30px",
        pt: 2,
        width: "29vw",
        mt: 2.5,
        ml: -1,
      }}
    >
      <Stack direction="column">
        <Stack
          direction="row"
          sx={{
            mt: -2,
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "#666666",
            },
          }}
        >
          <ButtonBase onClick={() => console.log("Home clicked!")}>
            <IconButton>
              <HomeIcon
                sx={{
                  color: "#FFFFFF",
                  width: "4.5vw",
                  height: "4.5vh",
                }}
              />
              <Typography
                sx={{
                  pl: 2,
                  color: "#FFFFFF",
                  fontSize: "1.3em",
                  fontFamily: "Avenir2, Arial, sans-serif",
                }}
              >
                ホーム
              </Typography>
            </IconButton>
          </ButtonBase>
        </Stack>

        <Stack
          direction="row"
          sx={{
            "&:hover": {
              backgroundColor: "#666666",
              transition: "background-color 0.3s",
            },
          }}
        >
          <ButtonBase onClick={() => console.log("Home clicked!")}>
            <IconButton>
              <SearchIcon
                sx={{ color: "#FFFFFF", width: "4.5vw", height: "4.5vh" }}
              />
              <Typography
                sx={{
                  pl: 2,
                  color: "#FFFFFF",
                  fontSize: "1.3em",
                  fontFamily: "Avenir2, Arial, sans-serif",
                }}
              >
                検索
              </Typography>
            </IconButton>
          </ButtonBase>
        </Stack>
      </Stack>
    </Box>
  );
}
