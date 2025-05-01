// components/ControlBar.tsx
import { Paper, IconButton, Badge } from "@mui/material";
import { Mic, MicOff, Videocam, VideocamOff, ScreenShare, StopScreenShare, Chat, People, CallEnd } from "@mui/icons-material";
import { ControlBarProps } from "@/types/types"; // Adjust the import path as necessary

export default function ControlBar({ micOn, setMicOn, videoOn, setVideoOn, screenSharing, setScreenSharing, sidebarOpen, setSidebarOpen, tabValue }: ControlBarProps) {
  return (
    <Paper sx={{ p: 2, display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
      <IconButton onClick={() => setMicOn(!micOn)}>
        {micOn ? <Mic /> : <MicOff color="error" />}
      </IconButton>
      <IconButton onClick={() => setVideoOn(!videoOn)}>
        {videoOn ? <Videocam /> : <VideocamOff color="error" />}
      </IconButton>
      <IconButton onClick={() => setScreenSharing(!screenSharing)}>
        {screenSharing ? <StopScreenShare color="success" /> : <ScreenShare />}
      </IconButton>
      <IconButton color="error">
        <CallEnd />
      </IconButton>
      <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
        {tabValue === 0 ? (
          <Badge badgeContent={2} color="primary">
            <Chat color={sidebarOpen ? "primary" : "inherit"} />
          </Badge>
        ) : (
          <People color={sidebarOpen ? "primary" : "inherit"} />
        )}
      </IconButton>
    </Paper>
  );
}