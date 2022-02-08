import format from './icons/format';
import React from "react";

const Footer = () => {
    return (
        <div className="console-footer">
            <button className="blue-button">Отправить</button>
            <span><a href="https://github.com/AlanG1111">@github.com/AlanG1111</a></span>
            <div className='console-colored-button console-footer-format'>
                {format} <span>Форматировать</span> 
            </div>
        </div>
    )
}

export default Footer;
