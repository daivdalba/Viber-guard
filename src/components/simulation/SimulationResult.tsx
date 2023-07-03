import React from 'react';
import { SimulationMethodType, SimulationWarningType } from '../../models/simulation/Transaction';
import styles from './simulation.module.css';

export interface OverviewProps {
//   warningType: SimulationWarningType;
//   message: string[];
//   method?: SimulationMethodType | string;
}

const SimulationResult = (props: OverviewProps) => {
  return (
    <div className='container popup-container'>
        <div className='header flex justify-between items-center'>
            <div>
                <img src='/images/asset_logos/logo.png' alt='logo' />
                <div>
                    <div>VIBRANIUM</div>
                    <div>SHIELD A.I</div>
                </div>
            </div>
            <button type='button' className='btn connect-btn' >connect</button>
        </div>
        <div className='content'>
            <div className='warning-text'>
                <div><span></span>Warning</div>
                <div>We have flagged this website as phishing. Please do not engage with this signature. This signaure will list MURI [9753] on OpenSea. This signature is intended for OpenSea. This website is not OpenSea.</div>
            </div>
            <div>Signature Details</div>
            <div>Website</div>
            <div>
                <div>abcdx.miniwallet.net</div>
                <div>Low Trust Website</div>
            </div>
            <div>Signature Details</div>
            <div>
                <img src='' alt='' />
                <div>
                    MURI(9753)
                </div>
                <div>
                    MURI
                </div>
            </div>
        </div>
    </div>
  );
};
export default SimulationResult;