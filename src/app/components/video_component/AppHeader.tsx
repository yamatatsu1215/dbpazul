// components/AppHeader.tsx
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { useEffect, useState } from "react";
function formatTime(seconds: number): string {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [hrs, mins, secs]
        .map((val) => String(val).padStart(2, "0"))
        .join(":");
}
export default function AppHeader() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = formatTime(time);
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Team Weekly Meeting
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
            {formattedTime}
        </Typography>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}