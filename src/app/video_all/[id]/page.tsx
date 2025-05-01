// VideoCallApp.tsx
"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import AppHeader from "../../components/video_component/AppHeader";
import ParticipantsGrid from "../../components/video_component/ParticipantsGrid";
import ControlBar from "../../components/video_component/ControlBar";
import SidebarDrawer from "../../components/video_component/SidebarDrawer";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function VideoCallApp() {
  const { id } = useParams();
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [message, setMessage] = useState("");

  const participants = [
    { id: 1, name: "You", avatar: "/placeholder.svg", isSpeaking: true },
    {
      id: 2,
      name: "Alex Johnson",
      avatar: "/placeholder.svg",
      isSpeaking: false,
    },
    {
      id: 3,
      name: "Maria Garcia",
      avatar: "/placeholder.svg",
      isSpeaking: false,
    },
    {
      id: 4,
      name: "Hiroshi Tanaka",
      avatar: "/placeholder.svg",
      isSpeaking: false,
    },
  ];

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const roomId = Array.isArray(id) ? id.join(",") : id || "";
        const response = await fetch(`/api/messages?roomId=${roomId}`);
        setMessages(response.ok ? await response.json() : []);
        console.log("Fetched messages:", response.ok ? await response.json() : []);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, [id]);

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
        micOn={micOn}
        setMicOn={setMicOn}
        videoOn={videoOn}
        setVideoOn={setVideoOn}
        screenSharing={screenSharing}
        setScreenSharing={setScreenSharing}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
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
        roomId={Array.isArray(id) ? id.join(",") : id || ""} // ルームIDを渡す
      />
    </Box>
  );
}
