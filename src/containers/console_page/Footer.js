import React from "react";
import format from './icons/format';
import { TEXT_FORMAT, TEXT_GITHUB_ADRESS, TEXT_SEND } from '../text_constants';

const Footer = () => {
    return (
        <div className="console-footer">
            <button className="blue-button-submit">{TEXT_SEND}</button>
            <span><a href="https://github.com/AlanG1111">{TEXT_GITHUB_ADRESS}</a></span>
            <div className='console-colored-button console-footer-format'>
                {format} <span>{TEXT_FORMAT}</span> 
            </div>
        </div>
    )
}

export default Footer;
