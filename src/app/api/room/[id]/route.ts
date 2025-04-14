// Roomテーブルの単体取得、更新、削除

import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Room } from '@/types/types';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    const { data, error } = await supabase.from('Room').select('*').eq('id', id).single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data as Room);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const { name } = await request.json();

    const { data, error } = await supabase.from('Room').update({ name }).eq('id', id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    const { data, error } = await supabase.from('Room').delete().eq('id', id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
}