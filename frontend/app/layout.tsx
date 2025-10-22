import React from 'react'

export const metadata = {
  title: 'Shah Alvi Association',
  description: 'Community website for the Shah Alvi Association',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{padding:12, borderBottom:'1px solid #ddd'}}>
          <h1>Shah Alvi Association</h1>
        </header>
        <main style={{padding:12}}>{children}</main>
        <footer style={{padding:12, borderTop:'1px solid #ddd'}}>
          © Shah Alvi Association
        </footer>
      </body>
    </html>
  )
}
