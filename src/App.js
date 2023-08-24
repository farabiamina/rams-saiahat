import './App.css';
import React, { useRef, useEffect, useContext } from "react";
import Advantages from './components/advantages/Advantages';
import AllInOne from './components/all-in-one/AllInOne';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Location from './components/location/Location';
import ModalHeader from './components/modalHeader/ModalHeader';
import Purchase from './components/purchase/Purchase';
import ModalForm from './components/modalForm/ModalForm';
import { AppContext } from './components/context/Context';

function App() {
  const { isFormOpen, setIsFormOpen, is404, setIs404, isSubmitted } = useContext(AppContext);
  return (
    <div className="App">
      <ModalHeader/>
      <Banner/>
      <Advantages/>
      <Location/>
      <AllInOne/>
      <Purchase/>
      <Footer/>
      <ModalForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} formId="pop-up" />
    </div>
  );
}

export default App;
