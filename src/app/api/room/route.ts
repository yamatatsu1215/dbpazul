// Roomテーブルの新規作成と全件取得
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Room } from '@/types/types';
import { cookies } from 'next/headers';

// Roomテーブルの全件取得
export async function GET() {
    const { data, error } = await supabase.from('room').select('*');

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data as Room[]);
}


// Roomテーブルの新規作成
export async function POST(request: Request) {
    const { name } = await request.json();

    const cookie = await cookies();
    const token = cookie.get('auth_token')?.value;

    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    // トークンを使用してユーザー情報を取得する例
    const { data: userData, error: userError } = await supabase.auth.getUser(token);
    if (userError) {
        return NextResponse.json({ error: userError.message }, { status: 401 });
    }
    const user = userData.user;
    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userId = user.id;

    const { data, error } = await supabase.from('room').insert([
        {
            name: name,
            createdBy: userId,
        },
    ]);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
}
