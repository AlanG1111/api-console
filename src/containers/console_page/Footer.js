import React from "react";
import format from './icons/format';
import { TEXT_FORMAT, TEXT_GITHUB_ADRESS, TEXT_SEND } from '../text_constants';

const Footer = () => {
    function formatText() {
        const textarea = document.getElementById('textarea-to-format')
        let wrongValue = textarea.value
        const formatedValue = JSON.stringify(wrongValue, undefined, 4)
        console.log('textarea', formatedValue)
        document.getElementById('textarea-to-format').innerHTML = formatedValue
    }
    return (
        <div className="console-footer">
            <button className="blue-button-submit">{TEXT_SEND}</button>
            <span><a href="https://github.com/AlanG1111">{TEXT_GITHUB_ADRESS}</a></span>
            <div onClick={() => formatText()} className='console-colored-button console-footer-format'>
                {format} <span>{TEXT_FORMAT}</span> 
            </div>
        </div>
    )
}

export default Footer;
