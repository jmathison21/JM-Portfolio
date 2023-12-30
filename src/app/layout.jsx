import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import Tabs from "./Tabs"
import {getDB}from "./data"

export const metadata = {
    title: "Jenna Mathison",
}

function Header({tabsList}) {
    return (
        <div className="flex flex-row h-16 sticky top-0 shadow-md bg-slate-500 border-bottom items-center lg:h-20 xl:h-24">
            <Tabs tabsList={tabsList}/>
        </div>
    )
}

function NameTitle() {
    <div className="flex w-screen flex-col space-y-1 py-8 lg:py-12">
        <h1 className="w-fit self-center whitespace-nowrap text-center text-3xl font-bold antialiased sm:text-4xl xl:text-5xl">
            Jenna Mathison
        </h1>
        <div className="flex w-full flex-row justify-center space-x-1 pl-4 sm:pl-5">
            <h2 className="text-l w-fit whitespace-nowrap text-start antialiased sm:text-xl xl:text-2xl">
                Web Developer | Computer Consultant II
            </h2>
        </div>
    </div>
}

export default async function RootLayout({ children }) {
    const db = await getDB()
    const tabsList = db.tabs.map(tab => tab.name)

    return (
        <html lang="en">
            <body className="">
                <Header tabsList={tabsList}/>
                <main className="min-h-screen pb-12">
                    {children}
                </main>
                <Analytics />
            </body>
        </html>
    )
}
