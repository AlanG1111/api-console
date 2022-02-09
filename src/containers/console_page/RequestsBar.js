import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeHistory } from "src/store/actions";

const RequestsBar = () => {
    const dispatch = useDispatch()
    const savedhistory = useSelector(state => state.auth.history)
    console.log('savehistory',savedhistory.length)

    if(savedhistory.length > 15) {
        const removedLast = savedhistory.slice(0, savedhistory.length - 1)
        dispatch(removeHistory(removedLast))
    }

    function deleteHistoryElement() {
        const deleted = savedhistory.slice(1, savedhistory.length)
        console.log('deleted', deleted)
        dispatch(removeHistory(deleted))
    }
    return (
        <div className="requests-bar">
            <div className="requests-tracker">
                {savedhistory?.map((obj) => obj ? 
                    <HistoryElement obj={obj}/> 
                : null) }
            </div>  
            <div onClick={() => {deleteHistoryElement()}} className="delete-request">
                <img src="/icons/cross.svg" alt="cross" />
            </div> 
        </div>
    )
}

const HistoryElement = ({obj}) => {
    return (
        <div key={Math.random()} className="requests-tracker-element">
            <span>{`${obj.action}`}</span>
            <img className="request-tracker-dots" src="/icons/dots.svg" alt="dots" />
            <div className="request-tracker-dropdown">Выполнить</div>
        </div>       
    )
}

export default RequestsBar;
