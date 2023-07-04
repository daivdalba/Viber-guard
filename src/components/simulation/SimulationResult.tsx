import React from 'react';
import { SimulationMethodType, SimulationWarningType } from '../../models/simulation/Transaction';
import styles from './simulation.module.css';
import {AiOutlineWarning} from "react-icons/ai";
import { RxCross1, RxArrowRight } from "react-icons/rx";

export interface OverviewProps {
//   warningType: SimulationWarningType;
//   message: string[];
//   method?: SimulationMethodType | string;
}

const SimulationResult = (props: OverviewProps) => {
  return (
    <>
        <div className='container popup-container'>
            <div className='header flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src='/images/asset_logos/logo.png' className='inline-block' alt='logo' />
                    <div className='inline-block'>
                        <div className='title'>VIBRANIUM</div>
                        <div className='author'>SHIELD A.I</div>
                    </div>
                </div>
                <button type='button' className='btn connect-btn' >connect</button>
            </div>
            <div className='content'>
                <div className='warning-container'>
                    <div className='warning-header'><AiOutlineWarning />Warning</div>
                    <div className='warning-content'>We have flagged this website as phishing. Please do not engage with this signature. This signaure will list MURI [9753] on OpenSea. This signature is intended for OpenSea. This website is not OpenSea.</div>
                </div>
                <div className='vibranium-subtitle'>Signature Details</div>
                <div className='vibranium-subdescription'>Website</div>
                <div className='flex justify-between items-center vibranium-subdescription-content'>
                    <div>abcdx.miniwallet.net<AiOutlineWarning className='ml-2 inline-block color-warning' /></div>
                    <div className='color-warning font-extrabold'>Low Trust Website</div>
                </div>
                <div className='vibranium-subtitle'>Signature Details</div>
                <div className='vibranium-detail-container flex items-center'>
                    <img src='/images/extra/image.png' alt='' />
                    <div className='main-font ml-1'>
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
        </div>
        <div className='fixed bottom-4 w-100'>
            <div className='footer flex justify-between items-center container'>
                <button className='btn btn-reject'>Reject<RxCross1/></button>
                <button className='btn btn-continue'>Continue<RxArrowRight/></button>
            </div>
        </div>
    </>
  );
};
export default SimulationResult;