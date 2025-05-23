// components/SidebarDrawer.tsx
import { Drawer, Tabs, Tab, Divider } from "@mui/material";
import ChatTab from "../video_component/ChatTab";
import ParticipantsTab from "../video_component/ParticipantsTab";
import { Chat, People } from "@mui/icons-material";
import { SidebarDrawerProps } from "@/types/types"; // Adjust the import path as necessary

export default function SidebarDrawer({ open, onClose, tabValue, onTabChange, participants, messages, message, setMessage, onSendMessage, roomId }: SidebarDrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose} variant="persistent" sx={{ width: 320, flexShrink: 0, '& .MuiDrawer-paper': { width: 320, boxSizing: 'border-box', top: 64, height: 'calc(100% - 64px)' } }}>
      <Tabs value={tabValue} onChange={onTabChange} variant="fullWidth">
        <Tab icon={<Chat />} label="Chat" />
        <Tab icon={<People />} label="Participants" />
      </Tabs>
      <Divider />
      {tabValue === 0 ? (
        <ChatTab messages={messages} message={message} setMessage={setMessage} onSendMessage={onSendMessage} roomId={roomId} />
      ) : (
        <ParticipantsTab participants={participants} />
      )}
    </Drawer>
  );
}