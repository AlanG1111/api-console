import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, saveHistory } from "src/store/actions";
import { TEXT_REQUEST, TEXT_RESPONSE } from "../text_constants";
import Footer from "./Footer";
import RequestsBar from "./RequestsBar";

const MainBlock = () => {
    const dispatch = useDispatch()
    const answerSuccess = useSelector(state => state.data.data?.data)
    const answerFailure = useSelector(state => state.data.error)
    const [request, setRequest] = useState('')
    const [answer, setAnswer] = useState('')
    
    const ACT = { "action": "pong"}
    function getDataBtn (requestFromHistory) {
        console.log('requestFromHistory',requestFromHistory)
        if(requestFromHistory) {
            dispatch(getData(requestFromHistory))
        } else {
            dispatch(getData(request))
        }
        if(answerSuccess) {
            setAnswer(JSON.stringify(answerSuccess, undefined, 4))
        } else {
            setAnswer(JSON.stringify(answerFailure, undefined, 4))
        }
        
        dispatch(saveHistory(request))
        
        console.log('answerSuccess', answerSuccess)
        console.log('answerFailure', answerFailure)
    }
    
    function formatText() {
        const textarea = document.getElementById('textarea-to-format')
        let wrongValue = textarea.value
        if(wrongValue.length > 0 && isJsonString(wrongValue)) {
            const res = JSON.stringify(JSON.parse(wrongValue), undefined, 4)
            setRequest(res)
        }
    }

    const handlerGetDataBtn = () => {
        isJsonString(request)
        getDataBtn()
        haveAnswerError()
    }

    function isJsonString(str) {
        const textarea = document.getElementById('textarea-to-format')
        try {
            JSON.parse(str);
        } catch (e) {
            textarea.style.borderColor = "red"
            return false;
        }
        textarea.style.borderColor = "rgba(0, 0, 0, 0.2)"
        return true;
    }

    function haveAnswerError() {
        const textarea = document.getElementById('textarea-for-answer')
        if(!answerSuccess) {
            textarea.style.borderColor = "red"
        } else {
            textarea.style.borderColor = "rgba(0, 0, 0, 0.2)"
        }
    }
    
    return (
        <>
        <RequestsBar getDataBtn={getDataBtn} />
        <div className="main-block">
            <div className="response-answer-area">
                <span>{TEXT_REQUEST}</span>
                <textarea id="textarea-to-format" value={request} onChange={(e) => setRequest(e.target.value)} />
            </div>
            <img className="main-block-dots" src="/icons/dots.svg" alt="dots" />
            <div className="response-answer-area">
                <span>{TEXT_RESPONSE}</span>
                <textarea id="textarea-for-answer" readOnly value={answer} />
            </div>
        </div>
        <Footer handlerGetDataBtn={handlerGetDataBtn} formatText={formatText}/>
        </>
)}

export default MainBlock;
