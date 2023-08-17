import React from 'react';
import "./Purchase.css";
import Icon1 from "../../svg/Icon1Svg";
import Icon2 from "../../svg/Icon2Svg";
import Icon3 from "../../svg/Icon3Svg";
import Icon4 from "../../svg/Icon4Svg";
import Photo from "../../images/allphoto.jpg"
import BaseForm from '../form/BaseForm';

const Purchase = () => {
    return (
        <section id='purchase'>
            <p className='orange'>Способы оплаты</p>
            <h2>Оплачивайте так, <br /> как удобно вам</h2>
            <div className="cards">
                <div className="card">
                    <Icon1 className="icon" />
                    <div>
                        <p className="title">Рассрочка от <br /> застройщика</p>
                        <p className="text">36 месяцев</p>
                    </div>
                </div>
                <div className="card">
                    <Icon2 className="icon" />
                    <div>
                        <p className="title">Ипотека</p>
                        <p className="text">Altyn Bank</p>
                    </div>
                </div>
                <div className="card">
                    <Icon3 className="icon" />
                    <div>
                        <p className="title">Программа</p>
                        <p className="text">Trade-In</p>
                    </div>
                </div>
                <div className="card">
                    <Icon4 className="icon" />
                    <div>
                        <p className="title">Программа</p>
                        <p className="text">Auto Trade-In</p>
                    </div>
                </div>
            </div>
            <div className="photo"></div>
            <BaseForm/>
        </section>
    )
}

export default Purchase