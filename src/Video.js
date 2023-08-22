import * as React from "react";
import { Card, CardMedia } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
export default function Video() {
  return (
    <div
      style={{
        width: "640px",
        height: "360px",
        marginTop: "1%",
        marginLeft: "3%",
        minWidth: "250px",
        maxWidth: "640px",
      }}
    >
      <Card style={{ padding: "2%", textAlign: "center" }}>
        <CardMedia
          component="iframe"
          sx={{
            display: "flex",
            width: "100%", // Adjust the width for mobile
            height: "auto", // Allow the height to adjust automatically
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "100%",
            padding: "2px",
            minHeight: "350px",
          }}
          src="https://www.youtube.com/embed/JT3DE-FEsUw"
        />
        <Typography
          variant="h6"
          align="left"
          color="text.primary"
          component="p"
          padding="5px"
        >
          Essential Knowledge Before Banking: Learn About Financial Institutions
          Did you know that understanding financial institutions is the first
          step to making confident banking decisions? Watch this informative
          video on the "Types of Financial Institution" to gain crucial
          insights. Remember, it's not our video, but we believe informed
          customers make smarter choices. Discover the world of banks, credit
          unions, and more. Start your banking journey with knowledge.
        </Typography>
      </Card>
    </div>
  );
}
