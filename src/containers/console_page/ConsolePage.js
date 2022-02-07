import React from 'react'
import Header from './Header'
import Requests from './RequestsBar'
import './console-page.css'
import Footer from './Footer'
import MainBlock from './MainBlock'

const ConsolePage = () =>  {
    return (
        <>
            <Header />
            <Requests />
            <MainBlock />
            <Footer />
        </>
    )
}

export default ConsolePage
