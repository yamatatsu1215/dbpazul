// components/ParticipantsTab.tsx
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Badge, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { ParticipantsTabProps } from "@/types/types"; // Adjust the import path as necessary
export default function ParticipantsTab({ participants }: ParticipantsTabProps) {
  return (
    <List>
      {participants.map((p) => (
        <ListItem key={p.id}>
          <ListItemAvatar>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              color={p.isSpeaking ? "success" : "default"}
            >
              <Avatar src={p.avatar} alt={p.name} />
            </Badge>
          </ListItemAvatar>
          <ListItemText primary={p.name} secondary={p.isSpeaking ? "Speaking" : "Not speaking"} />
          {p.id !== 1 && (
            <IconButton size="small">
              <MoreVert fontSize="small" />
            </IconButton>
          )}
        </ListItem>
      ))}
    </List>
  );
}