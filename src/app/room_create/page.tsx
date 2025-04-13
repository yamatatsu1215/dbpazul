"use client";

import { useRouter } from "next/navigation";
import React,{  useState } from "react";

export default function RoomCreatePage() {
    const [roomName, setRoomName] = useState("");
    const router = useRouter(); // ルーターを使用してリダイレクトするために必要


    async function createRoom() {
        const response = await fetch("/api/room", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: roomName,
            }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log("ルーム作成成功:", data);
            router.push("/room_select"); // ルーム作成成功後にルーム選択画面に遷移
        }
    }

    return (
        <div>
            <h1>ルーム作成</h1>
            <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                placeholder="ルーム名"
            />
            <button onClick={createRoom}>作成</button>
        </div>
    );
}