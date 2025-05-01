// components/ChatTab.tsx
import {
  Box,
  List,
  ListItem,
  Paper,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { ChatTabProps } from "@/types/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatTab({
  messages,
  message,
  setMessage,
  onSendMessage,
  roomId,
}: ChatTabProps) {
  const router = useRouter();
  const [userId, setUserId] = useState(""); // ユーザーIDを取得する処理を追加

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("/api/user"); // Cookie経由で認証＆user取得
      if (res.ok) {
        const data = await res.json();
        setUserId(data.user.id); // ユーザーIDだけ取り出して保存
      } else {
        router.push("/login"); // 未認証ならログインへ
      }
    }
    fetchUser();
  }, [router]);
  // チャット機能の実装DBにメッセージを保存する処理を追加
  const saveMessageToDB = async (message: string) => {
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
          senderId: userId, // ユーザーIDを渡す
          roomId: roomId, // ルームIDを渡す
          createdAt: new Date(),
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to save message to the database");
      }
      console.log("Message saved to DB");
    } catch (error) {
      console.error("Error saving message to DB:", error);
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <List sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((msg) => (
          <ListItem
            key={msg.id}
            sx={{
              justifyContent:
                msg.senderId === "You" ? "flex-end" : "flex-start",
            }}
          >
            <Paper
              sx={{
                p: 1.5,
                maxWidth: "80%",
                bgcolor:
                  msg.senderId === "You" ? "primary.light" : "background.paper",
                color: msg.senderId === "You" ? "white" : "inherit",
                borderRadius: 2,
              }}
            >
              {msg.senderId !== "You" && (
                <Typography variant="subtitle2">{msg.senderId}</Typography>
              )}
              <Typography variant="body2">{msg.content}</Typography>
              <Typography
                variant="caption"
                sx={{ textAlign: "right", display: "block", mt: 0.5 }}
              >
                {msg.createdAt.toLocaleString()}
              </Typography>
            </Paper>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          p: 2,
          borderTop: 1,
          borderColor: "divider",
          display: "flex",
          gap: 1,
        }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") onSendMessage();
          }}
        />
        <IconButton color="primary" onClick={() => saveMessageToDB(message)}>
          <Send />
        </IconButton>
      </Box>
    </Box>
  );
}
