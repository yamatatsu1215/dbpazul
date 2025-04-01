"use client";

import React, { useEffect, useState } from "react";
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
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon, Videocam } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { navItems } from "@/data/lang_data";
import { supabase } from "@/lib/supabase";

interface User {
  id: string;
  email: string | undefined;
  user_metadata: {
    username: string;
    profileImage: string;
  };
}
export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        setUser({
          id: data.user.id,
          email: data.user.email || "",
          user_metadata: {
            username: data.user.user_metadata?.username || "",
            profileImage: data.user.user_metadata?.profileImage || "/default-avatar.png",
          },
        });
      }
    };
    fetchUser();

    // リアルタイムでユーザー情報を監視
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      return setUser(
        session?.user
          ? {
              id: session.user.id,
              email: session.user.email || "",
              user_metadata: {
                username: session.user.user_metadata?.username || "",
                profileImage: session.user.user_metadata?.profileImage || "/default-avatar.png",
              },
            }
          : null
      );
    });
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

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

              {user ? (
                // 🔹 ログイン後の表示
                <>
                  <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                    <Avatar src={user.user_metadata?.profileImage || "/default-avatar.png"} />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
                    <MenuItem>{user.user_metadata?.username || "ユーザー"}</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
                  </Menu>
                </>
              ) : (
                // 🔹 未ログインのとき
                <>
                  <Button variant="outlined" color="primary" sx={{ ml: 2 }} component={Link} href="/login">
                    ログイン
                  </Button>
                  <Button variant="contained" color="primary" sx={{ ml: 2 }} component={Link} href="/signup">
                    無料登録
                  </Button>
                </>
              )}
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
            {user ? (
              <>
                <ListItem>
                  <Avatar src={user.user_metadata?.profileImage || "/default-avatar.png"} sx={{ mr: 1 }} />
                  <ListItemText primary={user.user_metadata?.username || "ユーザー"} />
                </ListItem>
              </>
            ) : (
              <>
                <ListItem component={Link} href="/login">
                  <ListItemText primary="ログイン" />
                </ListItem>
                <ListItem component={Link} href="/signup">
                  <ListItemText primary="無料登録" />
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
