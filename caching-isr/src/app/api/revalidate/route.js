import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function GET(request) {
    //get the path so that we can validate via path
    const path = request.nextUrl.searchParams.get('path') || '/timecache/Kolkata';
    //get the tag so that we can validate via tag
    const collection =
        request.nextUrl.searchParams.get('collection') || 'collection';

    //revalidatePath(path);
    revalidateTag(collection);
    console.log('revalidated', path, collection);
    // console.log('revalidated', path);
    return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        cache: 'no-store',
    });
}