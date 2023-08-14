import React from 'react';
import Navigation from '../navigation/Navigation';
import "./Banner.css";
import Logo from "../../svg/LogoSvg";
import Phone from "../../svg/PhoneSvg";
import Banner1Img from "../../images/banner1.jpg";
import Banner2Img from "../../images/banner2.jpg";
import Banner3Img from "../../images/banner3.jpg";
import { Carousel } from 'antd';
import Bg from "../../svg/BannerBg";
import Bg2 from "../../svg/Banner2Bg";

const Banner = () => {
    const images = [Banner1Img, Banner2Img, Banner3Img];
    return (
        <section id='banner'>
            <Bg className="bg"/>
            <Bg2 className="bg bg2"/>
            <div className="main">
                <div className="header">
                    <Logo className="logo" />
                    <Navigation className="navigation" />
                    <div className="phone">
                        <Phone className="phone-svg" />
                        <span>+7 727 <span>222 44 44</span></span>
                    </div>
                </div>
                <div className="headings">
                    <h2>Новая жизнь городской легенды</h2>
                    <h1>РАССРОЧКА<br /> ОТ ЗАСТРОЙЩИКА</h1>
                    <h3>до 40 мес. | 0% переплаты<br /> 30% первоначальный взнос</h3>
                    <button className='primary'>Оставить заявку</button>
                </div>
            </div>
            <div className="carousel">
                <Carousel dots={false} autoplay autoplaySpeed={4000}>
                    {
                        images.map((img, i) => (
                            <div key={i} className="img-con">
                                <img src={img} alt="" />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default Banner;