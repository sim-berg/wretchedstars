import './globals.css'
import NoSSRWrapper from './components/NoSSRWrapper'
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
      <body><NoSSRWrapper>{children}</NoSSRWrapper></body>
    </html>
  )
}
