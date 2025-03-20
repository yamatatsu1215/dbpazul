"use client"

import type React from "react"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  Divider,
  Paper,
} from "@mui/material"
import { Menu as Check } from "@mui/icons-material"
import { useTheme } from "@mui/material/styles"
import { pricingPlans } from "../data/lang_data"
import CTA from "./components/landing/CTA"
import FAQ from "./components/landing/FAQ"
import Features from "./components/landing/Features"
import Footer from "./components/landing/Footer"
import Header from "./components/landing/Header"
import Hero from "./components/landing/Hero"

export default function TopPage() {
  const theme = useTheme()

  return (
    <Box sx={{ flexGrow: 1 }}>

      <Header />

      <Hero />
      <Features />

      {/* 使い方セクション */}
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
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
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
                    <Typography variant="h6">1</Typography>
                  </Paper>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      アカウント登録
                    </Typography>
                    <Typography color="text.secondary">
                      メールアドレスで簡単に登録。ソーシャルアカウントでのログインも可能です。
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
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
                    <Typography variant="h6">2</Typography>
                  </Paper>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      ミーティングを作成
                    </Typography>
                    <Typography color="text.secondary">
                      新しいミーティングを作成するか、既存のミーティングに参加します。
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
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
                    <Typography variant="h6">3</Typography>
                  </Paper>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      招待を共有
                    </Typography>
                    <Typography color="text.secondary">
                      リンクやコードを共有して、参加者を招待します。メールでの招待も可能です。
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 料金プランセクション */}
      <Box id="pricing" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" sx={{ mb: 2, fontWeight: 700 }}>
            料金プラン
          </Typography>

          <Typography
            variant="h6"
            component="p"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: "700px", mx: "auto" }}
          >
            あらゆる規模のチームやビジネスに対応する 柔軟な料金プランをご用意しています
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    boxShadow: plan.highlighted ? 6 : 2,
                    border: plan.highlighted ? `2px solid ${theme.palette.primary.main}` : "none",
                    transform: plan.highlighted ? "scale(1.05)" : "none",
                    zIndex: plan.highlighted ? 1 : "auto",
                    position: "relative",
                  }}
                >
                  {plan.highlighted && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: -12,
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                        py: 0.5,
                        px: 2,
                        borderRadius: 5,
                        fontSize: "0.875rem",
                        fontWeight: "bold",
                      }}
                    >
                      人気プラン
                    </Box>
                  )}
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography variant="h5" component="h3" align="center" gutterBottom>
                      {plan.title}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "baseline", mb: 4 }}>
                      <Typography variant="h3" component="span" fontWeight="bold">
                        {plan.price}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="span">
                        {plan.period}
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 3 }} />
                    <List sx={{ mb: 2 }}>
                      {plan.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ px: 0, py: 1 }}>
                          <Check color="primary" sx={{ mr: 1, flexShrink: 0 }} />
                          <Typography variant="body1">{feature}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <CardActions sx={{ p: 4, pt: 0 }}>
                    <Button
                      fullWidth
                      variant={plan.buttonVariant as "outlined" | "contained"}
                      color="primary"
                      size="large"
                    >
                      {plan.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <FAQ />
      <CTA />
      <Footer />
    </Box>
  )
}

