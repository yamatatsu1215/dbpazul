"use client"

import type React from "react"

import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from "@mui/material"
import { Menu as MenuIcon, Videocam, People, Security, ScreenShare, Chat, ExpandMore, Check } from "@mui/icons-material"
import { useTheme } from "@mui/material/styles"
import Link from "next/link"

export default function TopPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }
    setDrawerOpen(open)
  }

  const navItems = [
    { text: "機能", href: "#features" },
    { text: "料金プラン", href: "#pricing" },
    { text: "よくある質問", href: "#faq" },
    { text: "お問い合わせ", href: "#contact" },
  ]

  const features = [
    {
      icon: <Videocam fontSize="large" color="primary" />,
      title: "高品質ビデオ通話",
      description: "HD画質のビデオ通話で、クリアな映像と音声を実現。最大50人まで同時接続可能です。",
    },
    {
      icon: <ScreenShare fontSize="large" color="primary" />,
      title: "画面共有",
      description: "プレゼンテーションや資料の共有も簡単。ワンクリックで画面共有を開始できます。",
    },
    {
      icon: <Chat fontSize="large" color="primary" />,
      title: "チャット機能",
      description: "通話中でもテキストでコミュニケーション。ファイル共有も可能です。",
    },
    {
      icon: <People fontSize="large" color="primary" />,
      title: "グループ管理",
      description: "チームやプロジェクト単位でグループを作成。効率的な会議管理ができます。",
    },
    {
      icon: <Security fontSize="large" color="primary" />,
      title: "セキュリティ",
      description: "エンドツーエンドの暗号化で、安全な通信を確保。プライバシーを守ります。",
    },
  ]

  const pricingPlans = [
    {
      title: "無料プラン",
      price: "¥0",
      period: "/月",
      features: ["最大4人までの通話", "40分の通話時間制限", "基本的な画面共有", "標準画質ビデオ"],
      buttonText: "無料で始める",
      buttonVariant: "outlined",
    },
    {
      title: "プロフェッショナル",
      price: "¥1,500",
      period: "/月",
      features: ["最大15人までの通話", "時間制限なし", "高度な画面共有", "HD画質ビデオ", "クラウド録画 (10GB)"],
      buttonText: "今すぐ登録",
      buttonVariant: "contained",
      highlighted: true,
    },
    {
      title: "ビジネス",
      price: "¥3,000",
      period: "/月",
      features: [
        "最大50人までの通話",
        "時間制限なし",
        "高度な画面共有",
        "フルHD画質ビデオ",
        "クラウド録画 (無制限)",
        "管理コンソール",
        "優先サポート",
      ],
      buttonText: "お問い合わせ",
      buttonVariant: "outlined",
    },
  ]

  const faqs = [
    {
      question: "何人まで同時に通話できますか？",
      answer:
        "プランによって異なります。無料プランでは最大4人、プロフェッショナルプランでは最大15人、ビジネスプランでは最大50人まで同時に通話できます。",
    },
    {
      question: "通話の録画はできますか？",
      answer:
        "はい、プロフェッショナルプラン以上では通話の録画が可能です。録画はクラウドに保存され、後から視聴やダウンロードができます。",
    },
    {
      question: "モバイルデバイスでも使用できますか？",
      answer: "はい、iOS、Androidアプリを提供しています。また、モバイルブラウザからもアクセス可能です。",
    },
    {
      question: "インターネット接続の要件は何ですか？",
      answer:
        "快適にご利用いただくには、上り下り共に最低2Mbpsの接続速度を推奨しています。HD画質では5Mbps以上が理想的です。",
    },
    {
      question: "支払い方法は何がありますか？",
      answer: "クレジットカード（Visa、Mastercard、American Express、JCB）、PayPal、銀行振込に対応しています。",
    },
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* ヘッダー */}
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Videocam sx={{ mr: 1 }} color="primary" />
            <Typography variant="h6" component="div">
              VideoConnect
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navItems.map((item) => (
                <Button key={item.text} color="inherit" component={Link} href={item.href} sx={{ mx: 1 }}>
                  {item.text}
                </Button>
              ))}
              <Button variant="outlined" color="primary" sx={{ ml: 2 }} component={Link} href="/login">
                ログイン
              </Button>
              <Button variant="contained" color="primary" sx={{ ml: 2 }} component={Link} href="/signup">
                無料登録
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* モバイルメニュー */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} component={Link} href={item.href}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem component={Link} href="/login">
              <ListItemText primary="ログイン" />
            </ListItem>
            <ListItem component={Link} href="/signup">
              <ListItemText primary="無料登録" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* ヒーローセクション */}
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

      {/* 機能セクション */}
      <Box id="features" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" sx={{ mb: 2, fontWeight: 700 }}>
            主な機能
          </Typography>

          <Typography
            variant="h6"
            component="p"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: "700px", mx: "auto" }}
          >
            ビジネスやプライベートでのコミュニケーションを強化する 充実した機能を提供します
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 3, boxShadow: 2 }}>
                  <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 4 }}>
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">{feature.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

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

      {/* よくある質問セクション */}
      <Box id="faq" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" align="center" sx={{ mb: 2, fontWeight: 700 }}>
            よくある質問
          </Typography>

          <Typography
            variant="h6"
            component="p"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: "700px", mx: "auto" }}
          >
            ご不明な点がございましたら、お気軽にお問い合わせください
          </Typography>

          <Box sx={{ mt: 4 }}>
            {faqs.map((faq, index) => (
              <Accordion key={index} sx={{ mb: 2, boxShadow: 1, borderRadius: "8px !important", overflow: "hidden" }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTAセクション */}
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

      {/* フッター */}
      <Box sx={{ py: 6, bgcolor: "background.paper", borderTop: 1, borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Videocam sx={{ mr: 1 }} color="primary" />
                <Typography variant="h6" component="div">
                  VideoConnect
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                高品質なビデオ会議サービスで、どこからでもシームレスにコミュニケーション。
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>{/* ソーシャルメディアアイコンをここに配置 */}</Box>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                製品
              </Typography>
              <List disablePadding>
                {["機能", "ダウンロード", "料金プラン", "アップデート情報"].map((item) => (
                  <ListItem key={item} disablePadding sx={{ py: 0.5 }}>
                    <Link href="#" style={{ textDecoration: "none", color: "inherit" }}>
                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                サポート
              </Typography>
              <List disablePadding>
                {["ヘルプセンター", "お問い合わせ", "コミュニティ", "ステータス"].map((item) => (
                  <ListItem key={item} disablePadding sx={{ py: 0.5 }}>
                    <Link href="#" style={{ textDecoration: "none", color: "inherit" }}>
                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                会社情報
              </Typography>
              <List disablePadding>
                {["会社概要", "ブログ", "採用情報", "プレスリリース"].map((item) => (
                  <ListItem key={item} disablePadding sx={{ py: 0.5 }}>
                    <Link href="#" style={{ textDecoration: "none", color: "inherit" }}>
                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={6} sm={3} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                法的情報
              </Typography>
              <List disablePadding>
                {["利用規約", "プライバシーポリシー", "セキュリティ", "Cookie設定"].map((item) => (
                  <ListItem key={item} disablePadding sx={{ py: 0.5 }}>
                    <Link href="#" style={{ textDecoration: "none", color: "inherit" }}>
                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} VideoConnect. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

