import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { serialize } from "cookie";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        console.log("Login attempt:", { email, password });
        // 入力チェック
        if (!email || !password) {
            return NextResponse.json(
                { error: "メールアドレスとパスワードを入力してください。" },
                { status: 400 }
            );
        }

        // Supabase での認証処理
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error || !data.session) {
            return NextResponse.json(
                { error: error?.message || "ログインに失敗しました。" },
                { status: 401 }
            );
        }

        // Cookie の作成
        const cookie = serialize("auth_token", data.session.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 1週間
        });

        return new NextResponse(JSON.stringify({ user: data.user }), {
            status: 200,
            headers: {
                "Set-Cookie": cookie,
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
        console.error("🔥 サーバーエラー:", err);
        return NextResponse.json(
            { error: "サーバーエラーが発生しました。" },
            { status: 500 }
        );
    }
}
