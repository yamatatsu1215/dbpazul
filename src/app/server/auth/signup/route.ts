import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function post(request: Request) {
    const { email, password } = await request.json();
    
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });
    
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
    
    return NextResponse.json({ data });
    }