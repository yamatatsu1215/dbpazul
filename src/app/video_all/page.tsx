// VideoCallApp.tsx
"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import AppHeader from "../components/video_component/AppHeader";
import ParticipantsGrid from "../components/video_component/ParticipantsGrid";
import ControlBar from "../components/video_component/ControlBar";
import SidebarDrawer from "../components/video_component/SidebarDrawer";

export default function VideoCallApp() {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [message, setMessage] = useState("");

  const participants = [
    { id: 1, name: "You", avatar: "/placeholder.svg", isSpeaking: true },
    { id: 2, name: "Alex Johnson", avatar: "/placeholder.svg", isSpeaking: false },
    { id: 3, name: "Maria Garcia", avatar: "/placeholder.svg", isSpeaking: false },
    { id: 4, name: "Hiroshi Tanaka", avatar: "/placeholder.svg", isSpeaking: false },
  ];

  const messages = [
    { id: "1", roomId: "1", senderId: "Alex Johnson", content: "Hello everyone!", createdAt: new Date("2023-01-01T10:01:00") },
    { id: "2", roomId: "2", senderId: "Maria Garcia", content: "Hi Alex, how are you?", createdAt: new Date("2023-01-01T10:02:00") },
    { id: "3", roomId: "3", senderId: "You", content: "Good morning team!", createdAt: new Date("2023-01-01T10:03:00") },
  ];

  const handleSendMessage = () => {
    if (message.trim()) setMessage("");
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppHeader />
      <Box sx={{ flexGrow: 1, p: 2, bgcolor: "#f5f5f5", overflow: "auto" }}>
        <ParticipantsGrid participants={participants} micOn={micOn} />
      </Box>
      <ControlBar
        micOn={micOn} setMicOn={setMicOn}
        videoOn={videoOn} setVideoOn={setVideoOn}
        screenSharing={screenSharing} setScreenSharing={setScreenSharing}
        sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
        tabValue={tabValue}
      />
      <SidebarDrawer
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        tabValue={tabValue}
        onTabChange={(e, newVal) => setTabValue(newVal)}
        participants={participants}
        messages={messages}
        message={message}
        setMessage={setMessage}
        onSendMessage={handleSendMessage}
      />
    </Box>
  );
}