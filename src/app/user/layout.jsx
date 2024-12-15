import React from 'react'
import Header from "./component/Header.jsx"
import Footer from "./component/Footer.jsx"
const layout = ({children}) => {
  return (
    <main>
        <Header/>
        {children}
        <Footer/>
    </main>
  )
}

export default layout
