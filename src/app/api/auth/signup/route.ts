import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import prisma from "@/server/prisma/prisma"; // Prisma クライアントのインポート
import { v4 as uuidv4 } from "uuid"; // UUID を生成するライブラリ
import bcrypt from "bcryptjs"; // パスワードのハッシュ化

interface User {
  id: string;
  email: string;
  username: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const { username, email, password }: User = await request.json();

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

    // ユーザーの ID を取得（Supabase の ID）
    const userId = data.user?.id || uuidv4(); // 万が一 ID が null なら、UUID を生成

    // パスワードをハッシュ化
    const hashedPassword = await bcrypt.hash(password, 10);

    // SQL でデータベースに登録
    await prisma.$executeRaw`
      INSERT INTO User (id, email, username, password)
      VALUES (${userId}, ${email}, ${username}, ${hashedPassword});
    `;

    return NextResponse.json({ message: "登録成功！確認メールを送信しました", userId });
  } catch (error) {
    console.error("サーバーエラー:", error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
