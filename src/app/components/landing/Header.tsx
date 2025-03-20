"use client"

import type React from "react"

import { useState } from "react"
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material"
import { Menu as MenuIcon, Videocam } from "@mui/icons-material"
import { useTheme } from "@mui/material/styles"
import Link from "next/link"
import { navItems } from "@/data/lang_data"

export default function Header() {
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

  return (
    <>
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
    </>
  )
}

