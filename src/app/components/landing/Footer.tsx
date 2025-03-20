"use client";

import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 6,
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} VideoConnect. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
