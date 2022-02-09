import React from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Header from './Header'
import Requests from './RequestsBar'
import './console-page.css'
import MainBlock from './MainBlock'

const ConsolePage = () =>  {
    const handle = useFullScreenHandle();
    return (
        <>  
            <FullScreen handle={handle}>
                <Header handle={handle}/>
                <Requests />
                <MainBlock />
            </FullScreen>
        </>
    )
}

export default ConsolePage
