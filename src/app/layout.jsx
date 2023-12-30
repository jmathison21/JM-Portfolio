import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import Tabs from "./Tabs"
import {getDB}from "./data"

export const metadata = {
    title: "Jenna Mathison",
}

function Header({tabsList}) {
    return (
        <div className="flex flex-row h-16 sticky top-0 shadow-md bg-slate-500 items-center lg:h-20 xl:h-24">
            <h1 className="text-4xl font-bold ml-4 text-rose-300 drop-shadow-md sm:ml-6 lg:ml-8 lg:text-5xl">JM</h1>
            <Tabs tabsList={tabsList}/>
        </div>
    )
}

export default async function RootLayout({ children }) {
    const db = await getDB()
    const tabsList = db.tabs.map(tab => tab.name)

    return (
        <html lang="en">
            <body className="">
                <Header tabsList={tabsList}/>
                <main className="min-h-screen pb-12 bg-slate-100">
                    {children}  
                </main>
                <Analytics />
            </body>
        </html>
    )
}
