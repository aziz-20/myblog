import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './component/Navbar'
import MyProfileImage from './component/MyProfileImage'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Embarking on Academic Excellence: The CSC Scholarship Unveiled',
  description: 'Created by ALI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MyProfileImage />
        {children}
        </body>
    </html>
  )
}
