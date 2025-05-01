// components/ParticipantTile.tsx
import { Box, Paper, Typography } from "@mui/material";
import { MicOff } from "@mui/icons-material";
import { Participant } from "@/types/types"; // Adjust the import path as necessary

export default function ParticipantTile({ participant, micOn }: { participant: Participant; micOn: boolean }) {
  return (
    <Paper
      elevation={3}
      sx={{ height: 240, position: "relative", borderRadius: 2, overflow: "hidden", border: participant.isSpeaking ? "2px solid #4caf50" : "none" }}
    >
      <Box
        sx={{ height: "100%", bgcolor: "#333", backgroundImage: `url(${participant.avatar})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <Box
        sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 1, bgcolor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center" }}
      >
        <Typography variant="body2" color="white" sx={{ flexGrow: 1 }}>
          {participant.name}
        </Typography>
        {!micOn && participant.id === 1 && (
          <MicOff fontSize="small" sx={{ color: "white", mr: 1 }} />
        )}
      </Box>
    </Paper>
  );
}