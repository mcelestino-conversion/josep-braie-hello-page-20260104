import './globals.css'

export const metadata = {
  title: 'hello page',
  description: 'a simple hello world page built with next.js, typescript, and tailwind css.',
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
