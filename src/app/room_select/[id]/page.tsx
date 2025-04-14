// Room単体取得表示

"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Room } from "@/types/types";
import { useParams } from "next/navigation";


export default function RoomSelectPage() {
    const { id } = useParams(); // URLからIDを取得
    const [room, setRoom] = useState<Room | null>(null); // Roomデータを保持するステート
    const router = useRouter(); // ルーターを取得

    useEffect(() => {
        async function fetchRoom() {
            const res = await fetch(`/api/room/${id}`); // IDを使ってAPIからデータを取得
            if (res.ok) {
                const data = await res.json();
                setRoom(data); // データをステートに保存
            } else {
                alert("ルーム情報の取得に失敗しました。");
            }
        }
        fetchRoom();
    }, [id]); // IDが変わったら再実行

    return (
        <div>
            <h1>ルーム選択</h1>
            {room ? (
                <div>
                    <h2>{room.name}</h2> {/* ルーム名を表示 */}
                    <button onClick={() => router.push("/room_create")}>新しいルームを作成</button> {/* 新規作成ボタン */}
                </div>
            ) : (
                <p>Loading...</p> // データがまだない場合の表示
            )}
        </div>
    );
}