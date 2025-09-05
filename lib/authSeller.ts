import { clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const authSeller = async (userId: string) => {
    try {

        const client = await clerkClient()
        const user = await client.users.getUser(userId)

        if (user.publicMetadata.role === 'seller') {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        const error = err as Error 
        return NextResponse.json({ success: false, message: error.message });
    }
}

export default authSeller;