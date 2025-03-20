"use client"

import { Box, Container, Typography, Button, Paper } from "@mui/material"
import Link from "next/link"

export default function Hero() {
  return (
    <Box
      sx={{
        pt: { xs: 10, sm: 12, md: 16 },
        pb: { xs: 8, sm: 10, md: 12 },
        bgcolor: "background.paper",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
            mb: 3,
          }}
        >
          シームレスな
          <Box component="span" sx={{ color: "primary.main" }}>
            ビデオ通話
          </Box>
          で
          <br />
          コミュニケーションを変革
        </Typography>

        <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}>
          高品質なビデオ会議、画面共有、チャット機能を備えた オールインワンのコミュニケーションプラットフォーム
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            href="/signup"
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            無料で始める
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={Link}
            href="/demo"
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            デモを見る
          </Button>
        </Box>

        <Box sx={{ mt: 8, position: "relative" }}>
          <Paper
            elevation={6}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "200px", sm: "300px", md: "400px" },
                position: "relative",
                bgcolor: "#333",
                backgroundImage: `url(/placeholder.svg?height=400&width=900)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

