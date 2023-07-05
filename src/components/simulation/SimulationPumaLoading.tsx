import React, { useState } from 'react';
import { SimulationMethodType, SimulationWarningType } from '../../models/simulation/Transaction';
import styles from './simulation.module.css';
import { Loading } from 'react-loading-dot'
import {AiOutlineWarning} from "react-icons/ai";
import { RxCross1, RxArrowRight } from "react-icons/rx";
import Header from '../app-dashboard/Header';
import Footer from '../app-dashboard/Footer';

export interface OverviewProps {
//   warningType: SimulationWarningType;
//   message: string[];
//   method?: SimulationMethodType | string;
}

const SimulationPumaLoading = (props: OverviewProps) => {
    const [error, setError] = useState(false);
    return (
    <>
        <div className='container popup-container mt-40 mb-28'>
            <div className='flex items-center justify-center flex-col'>
                <img src='/images/extra/puma.png'/>
                <div className='mt-12 dot-loading'>
                    <Loading />
                </div>
            </div>
        </div>
    </>
  );
};
export default SimulationPumaLoading;