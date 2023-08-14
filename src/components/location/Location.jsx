import React from 'react';
import "./Location.css";
import Img from "../../images/location.jpg";
import CarImg from "../../images/car.png";
import { Parallax } from 'react-scroll-parallax';
import { Carousel } from 'antd';
import MapImg1 from "../../images/map1.jpg";
import MapImg2 from "../../images/map2.jpg";
import MapImg3 from "../../images/map3.jpg";
import Map from "../../svg/MapSvg";
import ZoomImg from "../../images/zoom.jpg";
import ZoomSvg from "../../svg/ZoomSvg";

const Location = () => {
    return (
        <section id='location'>
            <div className="inner">
                <img className='top-img' src={Img} alt="" />
                <div className="text">
                    <h2><span>Rams</span>Saiahat</h2>
                    <h3>Украшение района с богатой историей</h3>
                </div>
                <Parallax speed={20} className='circle'>
                    <svg viewBox="0 0 458 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 226.5C0 101.408 102.509 1.01046e-06 229 1.01046e-06C355.406 1.01046e-06 458 101.408 458 226.5C458 351.61 355.406 453 229 453C102.509 453 0 351.61 0 226.5V226.5Z" fill="#F0641E" />
                    </svg>
                </Parallax>
            </div>
            <div className="car-con">
                <div className="text2">
                    <p className='orange'>Расположение</p>
                    <h2>Жизнь в историческом центре Алматы</h2>
                    <p>Поблизости ТРЦ и гипермаркеты, Зеленый базар, Центральная мечеть, Парк 28 гвардейцев-панфиловцев.</p>
                </div>
                <div className="car">
                    <div className='line' />
                    <Parallax translateX={[-20, 550]} className='car-img'>
                        <img src={CarImg} alt="" />
                    </Parallax>
                    <div className="lcircle">
                        <div className="cir" />
                        <span>450 м</span>
                        <p>до Центральной мечети</p>
                    </div>
                    <div className="lcircle">
                        <div className="cir" />
                        <span>900 м</span>
                        <p>до Зеленого базара</p>
                    </div>
                    <div className="lcircle">
                        <div className="cir" />
                        <span>1 км</span>
                        <p>до вокзала Алматы-2</p>
                    </div>
                    <div className="lcircle">
                        <div className="cir" />
                        <span>1,2 км</span>
                        <p>до арбата</p>
                    </div>
                    <div className="lcircle">
                        <div className="cir" />
                        <span>1,3 км</span>
                        <p>до Парка 28 панфиловцев</p>
                    </div>
                    <div className="lcircle">
                        <div className="cir" />
                        <span>1,6 км</span>
                        <p>до Парка культуры и отдыха</p>
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="left">
                    <div>
                        <p className="orange">Расположение</p>
                        <h2>Все важное рядом</h2>
                        {/* <p>Поблизости ТРЦ и гипермаркеты, Зеленый базар, Центральная мечеть, Парк 28 гвардейцев-панфиловцев.</p> */}
                    </div>
                    <Carousel autoplay fade dots={false} className='carousel'>
                        <img src={MapImg1} alt="" />
                        <img src={MapImg2} alt="" />
                        <img src={MapImg3} alt="" />
                    </Carousel>
                    <button className='primary'>Проложить маршрут</button>
                </div>
                <div className="map-svg">
                    <Map />
                </div>
            </div>
            <div className="zoom">
                <img className='zoom-img' src={ZoomImg} alt="" />
                <div className="zoom-btn one">
                    <ZoomSvg className="zoom-svg"/>
                </div>
                <div className="zoom-btn two">
                    <ZoomSvg className="zoom-svg"/>
                </div>
                <div className="zoom-btn three">
                    <ZoomSvg className="zoom-svg"/>
                </div>
                <div className="zoom-btn four">
                    <ZoomSvg className="zoom-svg"/>
                </div>
            </div>
        </section>
    )
}

export default Location