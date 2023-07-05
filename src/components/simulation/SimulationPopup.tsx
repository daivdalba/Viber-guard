import React, { useEffect, useState } from 'react';
import { SimulationMethodType, SimulationWarningType } from '../../models/simulation/Transaction';
import styles from './simulation.module.css';
import Header from '../app-dashboard/Header';
import Footer from '../app-dashboard/Footer';
import SimulationResult from './SimulationResult';
import SimulationTransaction from './SimulationTransaction';
import SimulationPumaLoading from './SimulationPumaLoading';

export interface OverviewProps {
    // isPhish: boolean;
//   warningType: SimulationWarningType;
//   message: string[];
//   method?: SimulationMethodType | string;
}

const SimulationPopup = (props: OverviewProps) => {
    
    const [ popupIndex, setPopupIndex ] = useState(0); 
    useEffect(() => {
        if (popupIndex === 2) {
            setTimeout(() => {
                setPopupIndex(3);
            }, 2000)
        }
        if (popupIndex === 4) {
            window.close()
        }
    }, [popupIndex])

    return (
    <>
        <div className='container popup-container'>
            <Header isPhish={true} />
            {
                popupIndex === 0 &&
                    <SimulationResult trust={false} />
            }
            {
                popupIndex === 1 &&
                    <SimulationTransaction />
            }
            {
                popupIndex === 2 && 
                    <SimulationPumaLoading />
            }
            {
                popupIndex === 3 && 
                    <SimulationResult trust={true} />
            }
        </div>
        <Footer popupIndex={popupIndex} setPopupIndex={setPopupIndex}/>
        {/* <div className='container lg-popup-container'>
            <Header isPhish={false}/>
            <SimulationWarning />
        </div> */}
    </>
  );
};
export default SimulationPopup;