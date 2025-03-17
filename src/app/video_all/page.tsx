"use client";

import type React from "react";

import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Paper,
  Grid,
  Avatar,
  Badge,
  Drawer,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Divider,
} from "@mui/material";
import {
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  ScreenShare,
  StopScreenShare,
  Chat,
  People,
  CallEnd,
  MoreVert,
  Send,
} from "@mui/icons-material";

export default function VideoCallApp() {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [message, setMessage] = useState("");

  const participants = [
    {
      id: 1,
      name: "You",
      avatar: "/placeholder.svg?height=40&width=40",
      isSpeaking: true,
    },
    {
      id: 2,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      isSpeaking: false,
    },
    {
      id: 3,
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
      isSpeaking: false,
    },
    {
      id: 4,
      name: "Hiroshi Tanaka",
      avatar: "/placeholder.svg?height=40&width=40",
      isSpeaking: false,
    },
  ];

  const messages = [
    { id: 1, sender: "Alex Johnson", text: "Hello everyone!", time: "10:01" },
    {
      id: 2,
      sender: "Maria Garcia",
      text: "Hi Alex, how are you?",
      time: "10:02",
    },
    { id: 3, sender: "You", text: "Good morning team!", time: "10:03" },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, you would add the message to the messages array
      setMessage("");
    }
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* App Bar */}
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Team Weekly Meeting
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
            00:15:32
          </Typography>
          <IconButton color="inherit">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 2, bgcolor: "#f5f5f5", overflow: "auto" }}>
        <Grid container spacing={2}>
          {participants.map((participant) => (
            <Grid item xs={12} sm={6} md={6} key={participant.id}>
              <Paper
                elevation={3}
                sx={{
                  height: 240,
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: participant.isSpeaking ? "2px solid #4caf50" : "none",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    bgcolor: "#333",
                    backgroundImage: `url(/placeholder.svg?height=240&width=320)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 1,
                    bgcolor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{ flexGrow: 1 }}
                  >
                    {participant.name}
                  </Typography>
                  {!micOn && participant.id === 1 && (
                    <MicOff fontSize="small" sx={{ color: "white", mr: 1 }} />
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Control Bar */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton
          size="large"
          onClick={() => setMicOn(!micOn)}
          sx={{
            bgcolor: micOn ? "transparent" : "rgba(244, 67, 54, 0.1)",
            "&:hover": {
              bgcolor: micOn ? "rgba(0, 0, 0, 0.04)" : "rgba(244, 67, 54, 0.2)",
            },
          }}
        >
          {micOn ? <Mic /> : <MicOff color="error" />}
        </IconButton>

        <IconButton
          size="large"
          onClick={() => setVideoOn(!videoOn)}
          sx={{
            bgcolor: videoOn ? "transparent" : "rgba(244, 67, 54, 0.1)",
            "&:hover": {
              bgcolor: videoOn
                ? "rgba(0, 0, 0, 0.04)"
                : "rgba(244, 67, 54, 0.2)",
            },
          }}
        >
          {videoOn ? <Videocam /> : <VideocamOff color="error" />}
        </IconButton>

        <IconButton
          size="large"
          onClick={() => setScreenSharing(!screenSharing)}
          sx={{
            bgcolor: screenSharing ? "rgba(76, 175, 80, 0.1)" : "transparent",
            "&:hover": {
              bgcolor: screenSharing
                ? "rgba(76, 175, 80, 0.2)"
                : "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          {screenSharing ? (
            <StopScreenShare color="success" />
          ) : (
            <ScreenShare />
          )}
        </IconButton>

        <IconButton
          size="large"
          color="error"
          sx={{
            bgcolor: "rgba(244, 67, 54, 0.1)",
            "&:hover": { bgcolor: "rgba(244, 67, 54, 0.2)" },
          }}
        >
          <CallEnd />
        </IconButton>

        <IconButton
          size="large"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          sx={{
            bgcolor: sidebarOpen ? "rgba(33, 150, 243, 0.1)" : "transparent",
            "&:hover": {
              bgcolor: sidebarOpen
                ? "rgba(33, 150, 243, 0.2)"
                : "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          {tabValue === 0 ? (
            <Badge badgeContent={2} color="primary">
              <Chat color={sidebarOpen ? "primary" : "inherit"} />
            </Badge>
          ) : (
            <People color={sidebarOpen ? "primary" : "inherit"} />
          )}
        </IconButton>
      </Paper>

      {/* Sidebar */}
      <Drawer
        anchor="right"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        variant="persistent"
        sx={{
          width: 320,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 320,
            boxSizing: "border-box",
            top: 64,
            height: "calc(100% - 64px)",
          },
        }}
      >
        <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
          <Tab icon={<Chat />} label="Chat" />
          <Tab icon={<People />} label="Participants" />
        </Tabs>

        <Divider />

        {tabValue === 0 ? (
          // Chat Tab
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <List sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
              {messages.map((msg) => (
                <ListItem
                  key={msg.id}
                  alignItems="flex-start"
                  sx={{
                    mb: 1,
                    justifyContent:
                      msg.sender === "You" ? "flex-end" : "flex-start",
                  }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 1.5,
                      maxWidth: "80%",
                      bgcolor:
                        msg.sender === "You"
                          ? "primary.light"
                          : "background.paper",
                      color: msg.sender === "You" ? "white" : "inherit",
                      borderRadius: 2,
                    }}
                  >
                    {msg.sender !== "You" && (
                      <Typography variant="subtitle2" component="div">
                        {msg.sender}
                      </Typography>
                    )}
                    <Typography variant="body2">{msg.text}</Typography>
                    <Typography
                      variant="caption"
                      color={
                        msg.sender === "You"
                          ? "rgba(255,255,255,0.7)"
                          : "text.secondary"
                      }
                      sx={{ display: "block", textAlign: "right", mt: 0.5 }}
                    >
                      {msg.time}
                    </Typography>
                  </Paper>
                </ListItem>
              ))}
            </List>

            <Box sx={{ p: 2, borderTop: 1, borderColor: "divider" }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Type a message"
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                />
                <IconButton color="primary" onClick={handleSendMessage}>
                  <Send />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ) : (
          // Participants Tab
          <List>
            {participants.map((participant) => (
              <ListItem key={participant.id}>
                <ListItemAvatar>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                    color={participant.isSpeaking ? "success" : "default"}
                  >
                    <Avatar alt={participant.name} src={participant.avatar} />
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={participant.name}
                  secondary={
                    participant.isSpeaking ? "Speaking" : "Not speaking"
                  }
                />
                {participant.id !== 1 && (
                  <IconButton size="small">
                    <MoreVert fontSize="small" />
                  </IconButton>
                )}
              </ListItem>
            ))}
          </List>
        )}
      </Drawer>
    </Box>
  );
}
