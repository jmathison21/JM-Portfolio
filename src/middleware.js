import { NextResponse } from "next/server";
import db from "/src/jennaDB.js"

const paths = db.getTabs()

export default function middleware(request) {
    const pathname = request.nextUrl.pathname

    for (let path in paths) {
        if (pathname.startsWith("/" + path.toLowerCase())) {
            console.log("here")
            return NextResponse.cookies.set("content", db.getTabContent(path))
        }
    }

    if (pathname.endsWith("/")) {
        return NextResponse.redirect(new URL("/about", request.url))
    }
}