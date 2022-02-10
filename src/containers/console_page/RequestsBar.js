import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeHistory, removeHistoryElement } from "src/store/actions/history";
import { TEXT_COPIED, TEXT_COPY, TEXT_FULFILL, TEXT_REMOVE } from "../text_constants";

const RequestsBar = ({getDataBtn}) => {
    const dispatch = useDispatch()
    const savedhistory = useSelector(state => state.history.history)
    console.log('savehistory',savedhistory)

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
                    <HistoryElement obj={obj} getDataBtn={getDataBtn}/> 
                : null) }
            </div>  
            <div onClick={() => {deleteHistoryElement()}} className="delete-request">
                <img src="/icons/cross.svg" alt="cross" />
            </div> 
        </div>
    )
}

const HistoryElement = ({obj, getDataBtn}) => {
    const dispatch = useDispatch()
    const toggleInput = (id, e) => {
        const el = document.getElementById(id);
        if (el.style.display === "flex" && e.target.id !== id) {
            el.style.display = "none";
        } else {
            el.style.display = "flex";
        }
    }

    const fulfill = (obj) => {
        const request = { action: obj.action}
        console.log('request', request)
        getDataBtn(JSON.stringify(request))
        // dispatch(getData(request))
    }

    const removeElement = (id) => {
        dispatch(removeHistoryElement(id))
    }

    const copy = (id,str,e) => {
        const copied = JSON.stringify({ action: str})
        const area = document.createElement('textarea');
        const el = document.getElementById(id);
        console.log('el',el)
        if (e.target.id !== id) {
            console.log('el2',el)
            el.classList.add('showed')
        }

        document.body.appendChild(area);  
          area.value = copied;
          area.select();
          document.execCommand("copy");
        document.body.removeChild(area);
        console.log('copied',copied)
        console.log('id',id)
    }
    
    return (
        <div key={obj.id} id={obj.id + 1} className="requests-tracker-element">
            <span>{`${obj.action}`}</span>
            <img id={obj.id + 2} onClick={(e) => toggleInput(obj.id, e)} className="request-tracker-dots" src="/icons/dots.svg" alt="dots" />
            <span id={obj.id + 3} className="request-tracker-copied hidden">{TEXT_COPIED}</span>
            <div id={obj.id} className="request-tracker-dropdown">
                <div className="dropdown-buttons">
                    <div onClick={() => {fulfill(obj)}} className="dropdown-buttons-fulfill dropdown-buttons-el">{TEXT_FULFILL}</div>
                    <div onClick={(e) => {copy(obj.id + 3,obj.action,e)}} className="dropdown-buttons-copy dropdown-buttons-el">{TEXT_COPY}</div>
                    <div className="dropdown-buttons-space dropdown-buttons-border"></div>
                    <div className="dropdown-buttons-space"></div>
                    <div onClick={() => {removeElement(obj.id)}} className="dropdown-buttons-remove dropdown-buttons-el">{TEXT_REMOVE}</div>
                    <div className="dropdown-buttons-space"></div>
                </div>
            </div>
        </div>       
    )
}

export default RequestsBar;
