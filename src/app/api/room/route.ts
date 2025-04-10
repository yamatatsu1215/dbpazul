// Roomテーブルの新規作成と全件取得
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Room } from '@/types/types';

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
    const { name,userId } = await request.json();

    const { data, error } = await supabase.from('room').insert([
        {
            name,
            userId
        },
    ]);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
}
