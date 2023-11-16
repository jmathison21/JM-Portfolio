import { Analytics } from '@vercel/analytics/react';
import "./global.css"


export const metadata = {
  title: 'Jenna Mathison',
}

export default function PortfolioLayout({ children }) {
    return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
    );
  }