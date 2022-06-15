import React from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Header from './Header'
import './console-page.css'
import MainBlock from './MainBlock'

const ConsolePage = () =>  {
    const handle = useFullScreenHandle();
    return (
        <>  
            <FullScreen handle={handle}>
                <Header handle={handle}/>
                <MainBlock />
            </FullScreen>
        </>
    )
}

export default ConsolePage
