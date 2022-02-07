import React from "react";

const Footer = () => {
    return (
        <div className="console-footer">
            <button className="blue-button">Отправить</button>
            <span><a href="https://github.com/AlanG1111">@github.com/AlanG1111</a></span>
            <div className="console-footer-format">
                <img src="/icons/format.svg" alt="format" />
                <span>Форматировать</span>
            </div>
        </div>
    )
}

export default Footer;
