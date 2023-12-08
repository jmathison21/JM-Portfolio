import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import Tabs from "./Tabs"
import db from "src/jennaDB"

export const metadata = {
    title: "Jenna Mathison",
}

function Header() {
    return (
        <div className="flex w-screen flex-col space-y-1 py-8">
            <h1 className="w-fit self-center whitespace-nowrap text-center text-3xl font-bold antialiased">
                Jenna Mathison
            </h1>
            <div className="flex w-full flex-row justify-center space-x-1 pl-4 ">
                <h2 className="w-fit whitespace-nowrap text-start text-l antialiased">
                    Web Developer | Computer Consultant II
                </h2>
            </div>
        </div>
    )
}

export default async function RootLayout({ children }) {
    const tabsList = await db.getTabs()

    return (
        <html lang="en">
            <body className="min-h-screen overflow-x-hidden bg-rose-300">
                <Header />
                <main className="mb-16 flex w-screen min-w-fit flex-col items-center">
                    <div className="flex w-screen min-w-fit flex-col items-center">
                        <div className="flex w-5/6 flex-col items-center rounded-xl bg-rose-200 p-1 pt-1 shadow-md ">
                            <div className="flex h-auto w-full flex-row justify-center">
                                <Tabs tabsList={tabsList} />
                            </div>
                            <div className="flex w-full flex-col items-center px-6 pb-6 pt-2">
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
                <Analytics />
            </body>
        </html>
    )
}
