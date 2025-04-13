"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function RoomCreatePage() {
    const [roomName, setRoomName] = useState("");
    const [userId, setUserId] = useState("");
    const router = useRouter();

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

    async function createRoom() {
        const res = await fetch("/api/room", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: roomName,
                userId: userId, // ユーザーIDを渡す
            }),
        });

        if (res.ok) {
            const data = await res.json();
            console.log("ルーム作成成功:", data);
            router.push("/room_select");
        } else {
            const error = await res.json();
            alert(`ルーム作成失敗: ${error.error}`);
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
            <button onClick={createRoom} disabled={!userId}>作成</button>
        </div>
    );
}
