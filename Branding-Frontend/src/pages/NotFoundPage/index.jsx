import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        bgcolor: "#fff",
      }}
    >
      <Box component="img"
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
        alt="404 Not Found"
        sx={{ width: 300, mb: 4 }}
      />
      <Typography variant="h4" gutterBottom>
        Oops! Page not found
      </Typography>
      <Typography color="text.secondary" mb={3}>
        The page you are looking for doesn’t exist or has been moved.
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Go to Homepage
      </Button>
    </Box>
  );
}
