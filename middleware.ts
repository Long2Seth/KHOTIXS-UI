
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {MiddlewareAPI} from "@reduxjs/toolkit";


export async function middleware(req: NextRequest,api: MiddlewareAPI) {

    return NextResponse.next();

}
export const config = {
};

