import React from "react";
import { TEXT_REQUEST, TEXT_RESPONSE } from "../text_constants";

const MainBlock = () => {
    // let req = api.sendsay.request({
    //     "action":"pong"
    //   })
    const req = fetch('https://api.sendsay.ru/general/api/v100/json/alangare13@gmail.com/').then((response) => {
        console.log(response)    
    return response.json();
      })
      
    console.log("req",req)
    return (
        <div className="main-block">
            <div className="response-answer-area">
                <span>{TEXT_REQUEST}</span>
                <textarea></textarea>
            </div>
            <img className="main-block-dots" src="/icons/dots.svg" alt="dots" />
            <div className="response-answer-area">
                <span>{TEXT_RESPONSE}</span>
                <textarea readOnly></textarea>
            </div>
        </div>
    )
}

export default MainBlock;
