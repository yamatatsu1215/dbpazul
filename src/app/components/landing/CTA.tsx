"use client"

import { Box, Container, Typography, Button } from "@mui/material"
import Link from "next/link"

export default function CTA() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "primary.main", color: "primary.contrastText" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
          今すぐ始めましょう
        </Typography>

        <Typography variant="h6" component="p" sx={{ mb: 6, maxWidth: "700px", mx: "auto", opacity: 0.9 }}>
          14日間の無料トライアルで、すべての機能をお試しいただけます。 クレジットカードは必要ありません。
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            href="/signup"
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            無料で始める
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            component={Link}
            href="/contact"
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            お問い合わせ
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

