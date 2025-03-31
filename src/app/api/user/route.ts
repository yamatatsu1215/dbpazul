"use client";
import { NextResponse } from "next/server";

import prisma from "@/server/prisma/prisma"; // Prisma クライアントのインポート

//ユーザー一覧取得
export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "ユーザーの取得に失敗しました" }, { status: 500 });
    }
}
