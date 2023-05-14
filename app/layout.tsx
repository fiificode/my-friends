import AuthContext from './context/AuthContext'
import ToastContext from './context/ToasterContext'
import './globals.css'
import { Raleway } from 'next/font/google'

const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Friends',
  description: 'Chat App for friends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToastContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
