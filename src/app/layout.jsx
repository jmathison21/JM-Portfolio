import "./globals.css"
import { Analytics } from '@vercel/analytics/react';
import Tabs from "./Tabs"


export const metadata = {
    title: 'Jenna Mathison',
}

function Header() {
    return (
    <div className="w-full min-w-fit">
        <h1 className="w-f text-center text-4xl font-bold p-10 md:pb-14 whitespace-nowrap">Jenna Mathison</h1>
    </div>)
}

async function getTabs() {
    let baseURL = "http://" + process.env.HOSTNAME
    process.env.PORT == 3000 ? baseURL = baseURL + ":" + process.env.PORT : Null

    const fetchURL = new URL("/api", baseURL)
    fetchURL.searchParams.append("query","tabs")

    const res = await fetch(fetchURL,{cache: "no-store"})

    if(!res.ok) {
        return undefined
    } 

    return await res.json()
}


export default async function RootLayout({ children }) {
    //Get page tabs from db to pass to Tabs componenet
    const tabsList = await getTabs()
    
    return (
    <html lang="en" >
        <body className="bg-rose-300 min-w-fit h-screen">
            <Header />
            <main className="flex flex-col items-center h-screen">
                <div className="w-full flex flex-col items-center">
                    <div className="flex flex-col w-5/6 md:w-3/5 lg:w-1/2 p-1 pt-1 items-center bg-rose-200 rounded-xl shadow-md">
                        <Tabs tabsList={tabsList}/>
                        <div className="flex flex-col items-center w-full pb-6 px-6">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            <Analytics />
        </body>
    </html>)
}