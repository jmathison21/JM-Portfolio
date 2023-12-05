import { NextResponse } from "next/server"
import db from "src/jennaDB.js"

export async function GET(req) {
    const params = req.nextUrl.searchParams
    const query = params.get("query")

    let data = {}
    let status = {status: 200}
    if (query === "tabs") {
        data = await db.getTabs()
    } else if (query === "content") {
        const page = params.get("page")
        data = await db.getTabContent(page)
        if (data == "Content Not Found")
            status = {status: 512, statusText: data}
    } else {
        status = {status: 513, statusText: "Query Not Found"}
    }

    return NextResponse.json(data,status)
}