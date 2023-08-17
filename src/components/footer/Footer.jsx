import React from 'react';
import "./Footer.css";
import FooterSvg from "../../svg/FooterSvg";

const Footer = () => {
    return (
        <footer>
            <div className="inner">
                <div className="container">
                    <div className="left">
                        <FooterSvg className="logo" />
                    </div>
                    <div className="right">
                        <div className="top">
                            <div className="addresses">
                                <div className="block">
                                    <h4>Комфорт</h4>
                                    <p>Rams city</p>
                                    <p>Navoi 3.0</p>
                                    <p>Nomad 2</p>
                                </div>
                                <div className="block">
                                    <h4>Комфорт</h4>
                                    <p>Rams city</p>
                                    <p>Navoi 3.0</p>
                                    <p>Nomad 2</p>
                                </div>
                                <div className="block">
                                    <h4>Комфорт</h4>
                                    <p>Rams city</p>
                                    <p>Navoi 3.0</p>
                                    <p>Nomad 2</p>
                                </div>
                                <div className="block">
                                    <h4>Контакты</h4>
                                    <a href="tel: +77072124444" className="phone">+7 707 212 44 44</a>
                                    <button>Оставить заявку</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <p>Архитектура проекта, изображения благоустройства, фасадов, интерьера, применяемых материалов, их нумерация, инфраструктура комплекса являются условными и могут быть изменены в ходе проектирования, строительства и эксплуатации в рамках положительного заключения государственной экспертизы. Настоящая реклама, в соответствии со ст. 395 ГК РК не является публичной офертой.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer