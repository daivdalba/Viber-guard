import React from 'react';
import { SimulationMethodType, SimulationWarningType } from '../../models/simulation/Transaction';
import styles from './simulation.module.css';
import Header from '../app-dashboard/Header';
import Footer from '../app-dashboard/Footer';
import SimulationResult from './SimulationResult';

export interface OverviewProps {
//   warningType: SimulationWarningType;
//   message: string[];
//   method?: SimulationMethodType | string;
}

const SimulationPopup = (props: OverviewProps) => {
    return (
    <>
        <div className='container popup-container'>
            <Header />
            <SimulationResult />
        </div>
        <Footer />
    </>
  );
};
export default SimulationPopup;