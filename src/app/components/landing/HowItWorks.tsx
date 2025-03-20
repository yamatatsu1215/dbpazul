"use client"

import { Box, Container, Typography, Grid, Paper } from "@mui/material"

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "アカウント登録",
      description: "メールアドレスで簡単に登録。ソーシャルアカウントでのログインも可能です。",
    },
    {
      number: 2,
      title: "ミーティングを作成",
      description: "新しいミーティングを作成するか、既存のミーティングに参加します。",
    },
    {
      number: 3,
      title: "招待を共有",
      description: "リンクやコードを共有して、参加者を招待します。メールでの招待も可能です。",
    },
  ]

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" sx={{ mb: 2, fontWeight: 700 }}>
          簡単3ステップ
        </Typography>

        <Typography
          variant="h6"
          component="p"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, maxWidth: "700px", mx: "auto" }}
        >
          アカウント登録から通話開始まで、わずか数分で完了します
        </Typography>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "250px", md: "350px" },
                position: "relative",
                bgcolor: "#f5f5f5",
                borderRadius: 4,
                backgroundImage: `url(/placeholder.svg?height=350&width=500)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              {steps.map((step, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "flex-start", mb: index < steps.length - 1 ? 4 : 0 }}
                >
                  <Paper
                    sx={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    <Typography variant="h6">{step.number}</Typography>
                  </Paper>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography color="text.secondary">{step.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

