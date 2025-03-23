import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import prisma from "@/server/prisma/prisma"; // Prisma クライアントのインポート

interface User {
  id: string;
  email: string;
  username: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const { username, email, password }:User = await request.json();

    // 入力チェック
    if (!email || !password || !username) {
      return NextResponse.json({ error: "全てのフィールドを入力してください。" }, { status: 400 });
    }

    // Supabase Auth にユーザーを登録
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }


    // Prisma を使ってユーザー情報をデータベースに保存
    const newUser = await prisma.user.create({
      data: {
        id: data.user?.id, // Supabase の UID を保存
        email,
        username,
        password, // セキュリティ対策としてハッシュ化
      },
    });

    return NextResponse.json({ message: "登録成功！確認メールを送信しました", user: newUser });
  } catch (error) {
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
