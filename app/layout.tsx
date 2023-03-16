import './globals.css'

export const metadata = {
  title: 'wretched stars',
  description: 'cool stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
