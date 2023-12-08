import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import Tabs from "./Tabs"
import db from "src/jennaDB"

export const metadata = {
    title: "Jenna Mathison",
}

function Header() {
    return (
        <div className="flex w-screen flex-col space-y-2 py-8">
            <h1 className="w-fit self-center whitespace-nowrap text-center text-4xl font-bold">
                Jenna Mathison
            </h1>
            <div className="flex w-full flex-row justify-center space-x-1 pl-9 ">
                <h2 className="w-fit whitespace-nowrap text-start text-2xl">
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
                <main className="mb-16 flex w-screen flex-col items-center">
                    <div className="flex w-screen flex-col items-center">
                        <div className="flex w-5/6 flex-col items-center rounded-xl bg-rose-200 p-1 pt-1 shadow-md md:w-3/5 lg:w-1/2">
                            <div className="flex h-auto w-full flex-row justify-center">
                                <Tabs tabsList={tabsList} />
                            </div>
                            <div className="flex w-full flex-col items-center px-6 pb-6 pt-4">
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
