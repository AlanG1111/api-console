import React from "react";

const MainBlock = () => {
    return (
        <div className="main-block">
            <div className="response-answer-area">
                <span>Запрос:</span>
                <textarea></textarea>
            </div>
            <img className="main-block-dots" src="/icons/dots.svg" alt="dots" />
            <div className="response-answer-area">
                <span>Ответ:</span>
                <textarea></textarea>
            </div>
        </div>
    )
}

export default MainBlock;
