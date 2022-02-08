import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "src/store/actions";
import { TEXT_REQUEST, TEXT_RESPONSE } from "../text_constants";

const MainBlock = () => {
    const dispatch = useDispatch()
    const answerSuccess = useSelector(state => state.auth.data.data)
    const answerFailure = useSelector(state => state.auth.data)
    const [request, setRequest] = useState('')
    const [answer, setAnswer] = useState('')
    const ACT = { "action": "pong"}
    function getDataBtn () {
        // dispatch(getData(JSON.stringify(ACT)))
        dispatch(getData(request))
        setAnswer(JSON.stringify(answerSuccess, undefined, 4))
        console.log('answer', answer)
    }
    
    function formatText() {
        const textarea = document.getElementById('textarea-to-format')
        let wrongValue = textarea.value
        const res = JSON.stringify(JSON.parse(wrongValue), undefined, 4)
        setRequest(res)
        console.log('res', res)
    }
    
    return (
        <div className="main-block">
            <div className="response-answer-area">
                <span>{TEXT_REQUEST}</span>
                <textarea id="textarea-to-format" value={request} onChange={(e) => setRequest(e.target.value)} />
            </div>
            <img className="main-block-dots" src="/icons/dots.svg" alt="dots" />
            <button onClick={() => getDataBtn()}>GET_DATA</button>
            <button onClick={() => formatText()}>FORMAT</button>
            <div className="response-answer-area">
                <span>{TEXT_RESPONSE}</span>
                <textarea readOnly value={answer} />
            </div>
        </div>
    )
}

export default MainBlock;
