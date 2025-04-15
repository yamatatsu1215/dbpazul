"use client";
import { Room } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RoomSelectPage = () => {
  const [room, setRoom] = useState<Room[]>([]);

  useEffect(() => {
    async function fetchRooms() {
      const response = await fetch("/api/room", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setRoom(data);
      }
    }
    fetchRooms();
  }, []);
  return (
    <div>
      <h1>ルーム一覧</h1>
      <ul>
        {room.map((r) => (
          <li key={r.id}>
            <Link href={`/room_select/${r.id}`}>
              <h2>{r.name}</h2>
              <p>ルームID: {r.id}</p>
              <p>作成日時: {new Date(r.createdAt).toLocaleString()}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="room_create">ルーム作成</Link>
    </div>
  );
};

export default RoomSelectPage;
