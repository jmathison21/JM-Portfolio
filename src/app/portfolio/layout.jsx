import { Analytics } from '@vercel/analytics/react';
import "./globals.css"


export const metadata = {
  title: 'Jenna Mathison',
}

export default function PortfolioLayout({ children }) {
    return (
    <html lang="en" >
      <body className="bg-rose-300 min-w-fit h-screen">
        {children}
        <Analytics />
      </body>
    </html>
    );
  }