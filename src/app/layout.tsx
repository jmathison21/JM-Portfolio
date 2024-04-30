import { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
    title: "Jenna Mathison",
    description: "Portfolio Website for Jenna Mathison showcasing her experience and projects as a University of Michigan - Dearborn Graduate and Software Developer",
    metadataBase: new URL("https://jennamat.com"),
    authors: [{name: "Jenna Mathison"}],
    referrer: "origin-when-cross-origin",
    openGraph: {
        title: "Jenna Mathison Portfolio",
        description: "Portfolio Website for Jenna Mathison showcasing her experience and projects as a University of Michigan - Dearborn Graduate and Software Developer",
        url: "https://jennamat.com",
        siteName: "Jenna Mathison",
        locale: "en_US",
        type: "website"
    }
}


export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className="">
                {children}
                <Analytics />
            </body>
        </html>
    )
}
