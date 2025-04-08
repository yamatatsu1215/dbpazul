import { NextResponse } from 'next/server';

//messageの削除
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
    }

    try {
        // Assuming you have a function `deleteMessageById` to handle the deletion
        const result = await deleteMessageById(id);

        if (!result) {
            return NextResponse.json({ error: 'Message not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Message deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
    }
}

// Mock function for deleting a message
async function deleteMessageById(id: string): Promise<boolean> {
    // Replace this with actual database logic
    console.log(`Deleting message with ID: ${id}`);
    return true; // Simulate successful deletion
}