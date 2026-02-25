
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

import { Outlet } from "react-router-dom"

const layout = () => {
    return(
        <>
        <Header/>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        
        
        </>
    )
}

export default layout;