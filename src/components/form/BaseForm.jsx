import React from 'react';
import "./BaseForm.css";
import Form from './Form';
import FormSvg from "../../svg/FormSvg";
import Img from "../../images/form.jpg";

const BaseForm = (props) => {
    return (
        <div id='form'>
            {
                props.type === "up"
                    ?
                    <FormSvg className="svg" />
                    :
                    <img src={Img} alt="" className='img' />
            }

            <div className="text">
                <p className="orange">Заявка</p>
                <h2 className='primary'>Уже в продаже</h2>
                <p>Оставьте заявку и получите полный выбор планировок по стартовым ценам!</p>
            </div>
            <Form />
        </div>
    )
}

export default BaseForm