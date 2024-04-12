import React from 'react'
import "@/styles/globals.css"
import "@/styles/styles.module.css"
import NavBar from "../components/NavBar"
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
  <>
    <NavBar />
      <div className="pagescroll">
        <div className="app">
          <Component {...pageProps} />
          
        </div>
        <Footer/>
      </div>
      
    </>
  )
}
