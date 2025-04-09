"use client";

import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import React,{ useEffect, useState } from "react";

export default function RoomCreatePage() {
    const [roomName, setRoomName] = useState("");
    //cookieから取得したユーザーIDを使用してルームを作成する
    const [userId, setUserId] = useState<string | undefined>(""); // ユーザーIDの状態を管理
    const router = useRouter(); // ルーターを使用してリダイレクトするために必要

    useEffect(() => {
        async function fetchUserId() {
            const cookieStore = await cookies();
            setUserId(cookieStore.get("userId")?.value);
        }
        if (!userId) {
            router.push("/login"); // ユーザーIDが取得できない場合はログインページにリダイレクト
        }
        fetchUserId();
    }, [userId, router]); // userIdが変更されたときに実行

    async function createRoom() {
        const response = await fetch("/api/room", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: roomName,
                userId: userId, // ユーザーIDをリクエストボディに追加
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