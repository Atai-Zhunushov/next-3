"use client"
import './globals.css'
import Header from "@/components/header/header";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
      <div>
          <Header></Header>
          {children}
      </div>

  )
}
