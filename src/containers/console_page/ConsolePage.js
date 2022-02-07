import React from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Header from './Header'
import Requests from './RequestsBar'
import './console-page.css'
import Footer from './Footer'
import MainBlock from './MainBlock'

const ConsolePage = () =>  {
    const handle = useFullScreenHandle();
    return (
        <>  
            <FullScreen handle={handle}>
                <div style={{height:'100%'}}>
                    <Header handle={handle}/>
                    <Requests />
                    <MainBlock />
                    <Footer />
                </div>
            </FullScreen>
        </>
    )
}

export default ConsolePage
