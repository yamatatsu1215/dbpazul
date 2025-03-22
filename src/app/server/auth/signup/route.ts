import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

interface User {
    username: string;
    email: string;
    password: string;
}

export async function post(request: Request) {
    const { username, email, password }: User = await request.json();
    
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (!error && data.user) {
        // Optionally, handle the username separately, e.g., save it in a profile table
        await supabase.from('profiles').insert({ id: data.user.id, username });
    }
    
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
    
    return NextResponse.json({ data });
    }