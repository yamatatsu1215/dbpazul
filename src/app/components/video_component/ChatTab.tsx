// components/ChatTab.tsx
import { Box, List, ListItem, Paper, Typography, TextField, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
import { ChatTabProps } from "@/types/types";

export default function ChatTab({ messages, message, setMessage, onSendMessage }: ChatTabProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <List sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((msg) => (
          <ListItem key={msg.id} sx={{ justifyContent: msg.senderId === "You" ? "flex-end" : "flex-start" }}>
            <Paper sx={{ p: 1.5, maxWidth: "80%", bgcolor: msg.senderId === "You" ? "primary.light" : "background.paper", color: msg.senderId === "You" ? "white" : "inherit", borderRadius: 2 }}>
              {msg.senderId !== "You" && <Typography variant="subtitle2">{msg.senderId}</Typography>}
              <Typography variant="body2">{msg.content}</Typography>
              <Typography variant="caption" sx={{ textAlign: "right", display: "block", mt: 0.5 }}>{msg.createdAt.toLocaleString()}</Typography>
            </Paper>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, borderTop: 1, borderColor: "divider", display: "flex", gap: 1 }}>
        <TextField
          fullWidth size="small" placeholder="Type a message"
          value={message} onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => { if (e.key === "Enter") onSendMessage(); }}
        />
        <IconButton color="primary" onClick={onSendMessage}>
          <Send />
        </IconButton>
      </Box>
    </Box>
  );
}