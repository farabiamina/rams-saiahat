import React, { useRef, useState } from 'react';
import "./AllInOne.css";
import AllInOneImg from "../../images/all-in-one.jpg";
import ArrowSvg from "../../svg/ArrowSvg";
import Carousel1Img from "../../images/carousel1.jpg";
import Carousel2Img from "../../images/carousel2.jpg";
import Carousel3Img from "../../images/carousel3.jpg";
import Carousel4Img from "../../images/carousel4.jpg";

const AllInOne = () => {
    const sliderArray = [
        {
            image: Carousel1Img,
            title: "Караоке",
            text: "Проснувшись с утра вам потребуется сделать всего пару шагов до лифта, спуститься на несколько этажей вниз, чтобы оказаться в оборудованном фитнес-зале. Занимайтесь в комфортном пространстве без посторонних людей, это отличная возможность начать день с тренировки, экономя важные минуты на дорогу. Специально для резидентов RAMS Signature он доступен круглосуточно."
        },
        {
            image: Carousel2Img,
            title: "Гостевой номер",
            text: "Собирать родственников на семейные мероприятия или встречать долгожданных друзей становится легче. Неудобства связанные с их размещением не возникнут: в системе All-In-One предусмотрены комнаты для гостей. Комфортабельный номер в жилом комплексе – это дополнительное пространство, которое могут использовать резиденты RAMS Signature."
        },
        {
            image: Carousel3Img,
            title: "Music Room",
            text: "Позвольте себе раствориться в музыке, подпевать в унисон аккордам и играть на инструментах в собственном Music Room в вашем доме. Оборудованное пространство оснащено всем необходимым для раскрытия вашего творческого потенциала. Здесь вы предоставлены только себе и своему творчеству."
        },
        {
            image: Carousel4Img,
            title: "SPA Center",
            text: "После продуктивного рабочего дня хочется полноценного отдыха, чтобы восстановить силы для новых достижений. Посвятите время себе в атмосферном SPA в вашем ЖК, это возможность отправиться на “солнечные берега” не выходя из дома. Вам не потребуется выезжать в поисках салона, забронируйте время и посетите любую процедуру, спустившись на первый этаж."
        },
    ];

    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [leftHovered, setLeftHovered] = useState(false);
    const [rightHovered, setRightHovered] = useState(false);

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 3; // scroll-fast
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleScroll = (direction) => {
        const { current } = sliderRef;
        const containerWidth = current.offsetWidth;
        const scrollAmount = containerWidth / 2;
        const maxScrollLeft = current.scrollWidth - containerWidth;

        let targetScrollLeft;
        if (direction === 'left') {
            targetScrollLeft = current.scrollLeft - scrollAmount;
        } else {
            targetScrollLeft = current.scrollLeft + scrollAmount;
        }

        const clampedScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));
        current.scrollTo({
            left: clampedScrollLeft,
            behavior: 'smooth',
        });
    };
    return (
        <section id='all-in-one'>
            <img className='left-img' src={AllInOneImg} alt="" />
            <div className="carousel">
                <div className='top'>
                    <h2>ALL-IN-ONE</h2>
                    <div className="buttons">
                        <button onClick={() => handleScroll("left")}
                            onMouseEnter={() => setLeftHovered(true)}
                            onMouseLeave={() => setLeftHovered(false)}>
                            <ArrowSvg className="left" />
                        </button>
                        <button onClick={() => handleScroll("right")}
                            onMouseEnter={() => setRightHovered(true)}
                            onMouseLeave={() => setRightHovered(false)}>
                            <ArrowSvg className="right" />
                        </button>
                    </div>
                </div>
                <p>В ЖК RAMS Saiahat будет внедрена система All-in-One, которая объединит места для работы, спорта и отдыха внутри комплекса. Здесь появятся коворкинг, фитнес-зал, кинотеатр с Playstation и детская комната – все это будет доступно для жителей комплекса.</p>
                <div className='slider' ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={isDown ? { cursor: "grabbing" } : {}}
                >
                    {sliderArray.map((el, i) => (
                        <div key={i} className="card">
                            <div className='card-bg' style={{ backgroundImage: `url(${el.image})` }}>
                                <h4>
                                    {el.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AllInOne;