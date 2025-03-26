import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { serialize } from "cookie";

export async function POST(req: Request) {
    const { email, password } = await req.json();
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return NextResponse.error();
    }

    const cookie = serialize("auth_token", data.session?.access_token || "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });

    return new NextResponse(JSON.stringify({ user: data.user}), {
        headers: {
            "Set-Cookie": cookie,
        },
    });
    
}