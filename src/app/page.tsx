import { Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Typography variant="h4" component="h1">
        DB設計パズル
      </Typography>
      <div className="flex flex-col items-center gap-4">
        <TextField label="テーブル名" variant="outlined" />
        <TextField label="カラム名" variant="outlined" />
        <Button variant="contained" color="primary">
          追加
        </Button>
      </div>
      <Typography variant="body2" color="textSecondary">
        © 2023 DB Puzzle
      </Typography>
    </div>
  );
}
