import React, { useState } from 'react';
import { SimulationMethodType, SimulationWarningType } from '../../models/simulation/Transaction';
import styles from './simulation.module.css';
import {AiOutlineWarning} from "react-icons/ai";
import Header from '../app-dashboard/Header';
import Footer from '../app-dashboard/Footer';

export interface OverviewProps {
//   warningType: SimulationWarningType;
//   message: string[];
//   method?: SimulationMethodType | string;
}

const SimulationResult = (props: OverviewProps) => {
    const [error, setError] = useState(false);
    return (
        <div className='content main-font'>
            {error ?
            <div className='warning-container'>
                <div className='warning-header'><AiOutlineWarning />Warning</div>
                <div className='warning-content'>We have flagged this website as phishing. Please do not engage with this signature. This signaure will list MURI [9753] on OpenSea. This signature is intended for OpenSea. This website is not OpenSea.</div>
            </div>
            :
            <div className='success-container'>
                <div className='success-header'>
                    <img src='/images/extra/check-true.svg' className='inline-block mr-2' />
                    <span className='title-font'>All Clear</span>
                </div>
            </div>
            }
            <div className='vibranium-subtitle'>Signature Details</div>
            <div className='vibranium-subdescription mt-2'>Website</div>
            <div className='flex justify-between items-center vibranium-subdescription-content'>
            {error?
            <>
                <div>
                    <span>abcdx.miniwallet.net</span>
                    <AiOutlineWarning className='ml-2 inline-block color-warning' />
                </div>
                <div className='color-warning font-extrabold'>Low Trust Website</div>
            </>
                :
            <>
                <div className='flex'>
                    <span>abcdx.miniwallet.net</span>
                    <img src='/images/extra/check-true.svg' className='ml-2 w-4'/>
                </div>
                <div className='color-success font-extrabold'>Trusted Site</div>
            </>

            }
            </div>
            <div className='vibranium-subtitle'>Signature Details</div>
            <div className='vibranium-detail-container flex items-center'>
                <img src='/images/extra/image.png' alt='' />
                <div className='main-font ml-2'>
                    <div className='font-extrabold'>
                        MURI(9753)
                    </div>
                    <div className='font-normal'>
                        MURI
                        <img src='/images/extra/badge-check 1.svg' className='ml-1 inline-block' />
                    </div>
                </div>
            </div>
        </div>
  );
};
export default SimulationResult;