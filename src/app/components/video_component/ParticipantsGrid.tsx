// components/ParticipantsGrid.tsx
import { Grid } from "@mui/material";
import ParticipantTile from "./ParticipantTile";

export default function ParticipantsGrid({ participants, micOn }) {
  return (
    <Grid container spacing={2}>
      {participants.map((p) => (
        <Grid item xs={12} sm={6} md={6} key={p.id}>
          <ParticipantTile participant={p} micOn={micOn} />
        </Grid>
      ))}
    </Grid>
  );
}