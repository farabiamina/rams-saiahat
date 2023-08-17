import React from 'react';
import "./Advantages.css";
import BaseForm from '../form/BaseForm';

const Advantages = () => {
    return (
        <section id='advantages'>
            <div className="inner">
                {/* <div className="left">
                    <div className="column">
                        <div className="item">
                            <h2>Школа и детский сад</h2>
                            <p>Пусть дети будут рядом – школа и детский сад во дворе RAMS Saiahat</p>
                        </div>
                        <div className="item">
                            <h2>Просторный внутренний двор</h2>
                        </div>
                    </div>
                    <div className="item">
                        <h2>Башня с часами</h2>
                        <p>Возрождение легендарной достопримечательности и новое место для теплых встреч.</p>
                    </div>
                </div>
                <div className="right">
                    <div className="row">
                        <div className="item">
                            <h2>Открытый парк для всех</h2>
                            <p>Сотни деревьев, кустарников и цветов на месте легендарного автовокзала Саяхат.</p>
                        </div>
                        <div className="item">
                            <h2>Все важное рядом</h2>
                        </div>
                    </div>
                    <div className="item">
                        <h2>На пересечении Суюнбая-Райымбек</h2>
                        <p>Вблизи от станции метро Райымбек Батыра, вокзала Алматы-2 и дороги в аэропорт.</p>
                    </div>
                </div> */}
                <table>
                    <tr>
                        <td className="cell1">
                            <div className="content item item1">
                                <h2>Школа и детский сад</h2>
                                <p>Пусть дети будут рядом – школа и детский сад во дворе RAMS Saiahat</p>
                            </div>
                        </td>
                        <td className="cell2" rowSpan="2">
                            <div className="content item item3">
                                <h2>Башня с часами</h2>
                                <p>Возрождение легендарной достопримечательности и новое место для теплых встреч.</p>
                            </div>
                        </td>
                        <td className="cell3">
                            <div className="content item item2">
                                <h2>Открытый парк для всех</h2>
                                <p>Сотни деревьев, кустарников и цветов на месте легендарного автовокзала Саяхат.</p>
                            </div>
                        </td>
                        <td className="cell4">
                            <div className="content item item5">
                                <h2>Все важное рядом</h2>
                                <p>Поблизости ТРЦ и гипермаркеты, Зеленый базар, Центральная мечеть, Парк 28 гвардейцев-панфиловцев.</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="cell1">
                            <div className="content item item4">
                                <h2>Просторный внутренний двор</h2>
                            </div>
                        </td>
                        <td className="cell5" colSpan="2">
                            <div className="content item item6">
                                <h2>На пересечении Суюнбая-Райымбек</h2>
                                <p>Вблизи от станции метро Райымбек Батыра, вокзала Алматы-2 и дороги в аэропорт.</p>
                            </div>
                        </td>
                    </tr>
                </table>
                <table className='short'> 
                    <tr>
                        <td className="cell1">
                            <div className="content item item1">
                                <h2>Школа и детский сад</h2>
                                <p>Пусть дети будут рядом – школа и детский сад во дворе RAMS Saiahat</p>
                            </div>
                        </td>
                        <td className="cell2" rowSpan="2">
                            <div className="content item item3">
                                <h2>Башня с часами</h2>
                                <p>Возрождение легендарной достопримечательности и новое место для теплых встреч.</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="cell1">
                            <div className="content item item4">
                                <h2>Просторный внутренний двор</h2>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="cell3">
                            <div className="content item item2">
                                <h2>Открытый парк для всех</h2>
                                <p>Сотни деревьев, кустарников и цветов на месте легендарного автовокзала Саяхат.</p>
                            </div>
                        </td>
                        <td className="cell4">
                            <div className="content item item5">
                                <h2>Все важное рядом</h2>
                                <p>Поблизости ТРЦ и гипермаркеты, Зеленый базар, Центральная мечеть, Парк 28 гвардейцев-панфиловцев.</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="cell5" colSpan="2">
                            <div className="content item item6">
                                <h2>На пересечении Суюнбая-Райымбек</h2>
                                <p>Вблизи от станции метро Райымбек Батыра, вокзала Алматы-2 и дороги в аэропорт.</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <BaseForm type="up"/>
        </section>
    )
}

export default Advantages;