"use client";
import { Room } from "@/types/types";
import React, { useEffect, useState } from "react";

const RoomSelectPage = () => {
    const [room, setRoom] = useState<Room[]>([]);

    useEffect(() => {
        async function fetchRooms() {
            const response = await fetch("/api/room",{
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
    },[]);
    return (
        <div>
            <h1>ルーム一覧</h1>
            <ul>
                {room.map((r) => (
                    <li key={r.id}>
                        <h2>{r.name}</h2>
                        <p>ルームID: {r.id}</p>
                        <p>作成日時: {new Date(r.createdAt).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomSelectPage;