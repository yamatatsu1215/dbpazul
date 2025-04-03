import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


interface User {
    id: string;
    email: string | null;
    username: string | null;
    profileImage: string | null;
}
export async function GET(req: Request) {
    const cookies = req.headers.get("cookie") || "";
    const authToken = cookies
        .split("; ")
        .find((row) => row.startsWith("auth_token="))
        ?.split("=")[1];

    if (!authToken) {
        return NextResponse.json({ error: "未認証です" }, { status: 401 });
    }

    const { data, error } = await supabase.auth.getUser(authToken);

    if (error || !data.user) {
        return NextResponse.json({ error: "認証エラー" }, { status: 401 });
    }

    // ユーザー詳細情報を取得（username, profileImage など）
    const { data: userDetails, error: userError } = await supabase
        .from("User")
        .select("username, profileImage")
        .eq("id", data.user.id)
        .single();

    if (userError) {
        return NextResponse.json({ error: "ユーザー情報取得エラー" }, { status: 500 });
    }

    const user: User = {
        id: data.user.id,
        email: data.user.email || "",
        username: userDetails?.username || "未設定",
        profileImage: userDetails?.profileImage || "/default-avatar.png",
    };

    return NextResponse.json({ user });
}
