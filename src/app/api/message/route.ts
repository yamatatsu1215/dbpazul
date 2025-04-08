// messageテーブルの全件取得とcreate

import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Message } from '@/types/types';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const { data, error } = await supabase
        .from('message')
        .select('*')
        .eq('roomId', id)
        .order('createdAt', { ascending: true });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data as Message[]);
}

// messageテーブルの新規作成
export async function POST(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await req.json();
    const { content } = body;

    const { data, error } = await supabase
        .from('message')
        .insert([
            {
                roomId: id,
                content,
            },
        ])
        .select('*')
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data as Message);
}

