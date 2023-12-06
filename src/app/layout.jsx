import "./globals.css"
import { Analytics } from '@vercel/analytics/react';
import Tabs from "./Tabs"
import db from "src/jennaDB"


export const metadata = {
    title: 'Jenna Mathison',
}

function Header() {
    return (
    <div className="w-full flex flex-col m-8 space-y-2">
        <h1 className="w-fit text-center text-4xl font-bold whitespace-nowrap self-center">Jenna Mathison</h1>
        <div className="flex flex-row w-full space-x-1 justify-center ml-5 ">
            <h2 className="w-fit text-start text-2xl whitespace-nowrap">Web Developer | Computer Consultant II</h2>
        </div>
    </div>)
}

export default async function RootLayout({ children }) {
    const tabsList = await db.getTabs()
    
    return (
    <html lang="en" >
        <body className="bg-rose-300 min-w-fit h-screen">
            <Header />
            <main className="flex flex-col items-center h-full">
                <div className="w-full flex flex-col items-center">
                    <div className="flex flex-col w-5/6 md:w-3/5 lg:w-1/2 p-1 pt-1 items-center bg-rose-200 rounded-xl shadow-md">
                        <div className="w-full h-auto flex flex-row justify-center"><Tabs tabsList={tabsList}/></div>
                        <div className="flex flex-col items-center w-full pb-6 px-6 pt-4">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            <Analytics />
        </body>
    </html>)
}