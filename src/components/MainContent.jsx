import AlbumGrid from "./AlbumGrid";
import MainHeader from "./MainHeader";
import MadeForYouBoxes from "./MadeForYouBoxes";
import RecentFavorites from "./RecentFavorites";

import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function MainContent() {
  return (
    <Container maxWidth="false">
      <MainHeader />
      <Typography
        variant="h4"
        sx={{
          color: "#FFFFFF",
          fontSize: "4em",
          pb: 5,
          fontFamily: "Avenir2, Arial, sans-serif",
        }}
      >
        おはよう
      </Typography>
      <AlbumGrid />
      <Typography
        variant="h4"
        sx={{
          color: "#FFFFFF",
          fontSize: "3em",
          pt: 10,
          pb: 5,
          fontFamily: "Avenir2, Arial, sans-serif",
        }}
      >
        メイド・フォー・ユー
      </Typography>

      <MadeForYouBoxes />

      <Typography
        variant="h4"
        sx={{
          color: "#FFFFFF",
          fontSize: "3em",
          pt: 10,
          pb: 5,
          fontFamily: "Avenir2, Arial, sans-serif",
        }}
      >
        ちょっと前のお気に入り
      </Typography>
      <RecentFavorites />
    </Container>
  );
}
