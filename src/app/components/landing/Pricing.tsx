"use client"

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
} from "@mui/material"
import { Check } from "@mui/icons-material"
import { useTheme } from "@mui/material/styles"
import { pricingPlans } from "@/data/lang_data"

export default function Pricing() {
  const theme = useTheme()

  return (
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
  )
}

