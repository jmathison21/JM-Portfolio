import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import Tabs from "./Tabs"

export const metadata = {
    title: "Jenna Mathison",
}

function Header() {
    return (
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
    )
}

async function getDB() {
    const revalidate =
        process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ? 0 : 3600
    const dbURL =
        revalidate != 0
            ? process.env.NEXT_PUBLIC_DB_URL
            : process.env.DEV_DB_URL
    const res = await fetch(dbURL, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        next: { revalidate: revalidate },
    })

    if (!res.ok) {
        return null
    }

    return await res.json()
}

export default async function RootLayout({ children }) {
    const db = await getDB()
    const tabsList = db.tabs.map(tab => tab.name)

    return (
        <html lang="en">
            <body className="min-h-screen overflow-x-hidden bg-rose-300">
                <Header />
                <main className="mb-16 flex w-screen min-w-fit flex-col items-center">
                    <div className="flex w-screen min-w-fit flex-col items-center">
                        <div className="flex w-5/6 flex-col items-center rounded-xl bg-rose-200 p-1 pt-1 shadow-md sm:3/4 xl:w-3/5 2xl:w-1/2">
                            <div className="flex h-auto w-full flex-row justify-center">
                                <Tabs tabsList={tabsList} />
                            </div>
                            <div className="flex w-full flex-col items-center px-4 pb-6 pt-2 sm:px-6">
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
