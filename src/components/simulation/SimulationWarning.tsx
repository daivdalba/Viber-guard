import React, { useState } from 'react';
import { SimulationMethodType, SimulationWarningType } from '../../models/simulation/Transaction';
import styles from './simulation.module.css';
import {AiOutlineWarning} from "react-icons/ai";
import Header from '../app-dashboard/Header';
import Footer from '../app-dashboard/Footer';
import { RxArrowRight } from "react-icons/rx";

export interface OverviewProps {
//   warningType: SimulationWarningType;
//   message: string[];
//   method?: SimulationMethodType | string;
}

const SimulationWarning = (props: OverviewProps) => {
    const [flag, setFlag] = useState(false);
    return (
        <div className='full-content title-font mt-8'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <g id="triangle-warning-2 1" clip-path="url(#clip0_24_160)">
                <path id="Vector" d="M56.25 43.75V64.5833C56.25 68.0416 53.4583 70.8333 50 70.8333C46.5417 70.8333 43.75 68.0416 43.75 64.5833V43.75C43.75 40.2916 46.5417 37.5 50 37.5C53.4583 37.5 56.25 40.2916 56.25 43.75ZM50 79.1666C46.5417 79.1666 43.75 81.9583 43.75 85.4166C43.75 88.875 46.5417 91.6666 50 91.6666C53.4583 91.6666 56.25 88.875 56.25 85.4166C56.25 81.9583 53.4583 79.1666 50 79.1666ZM96.0417 61.7083L63.7917 11.375C60.6667 6.87496 55.5 4.16663 50 4.16663C44.5 4.16663 39.3333 6.87496 36.0833 11.5833L4.12499 61.5C-0.416673 68 -1.25001 75.875 1.95833 82C5.16666 88.1666 11.7083 91.6666 19.9583 91.6666H27.125C30.5833 91.6666 33.375 88.875 33.375 85.4166C33.375 81.9583 30.5833 79.1666 27.125 79.1666H19.9583C17.9583 79.1666 14.4167 78.7916 13.0417 76.2083C12 74.2083 12.5 71.3333 14.5 68.4166L46.4583 18.5C47.625 16.8333 49.3333 16.6666 50 16.6666C50.6667 16.6666 52.375 16.8333 53.4167 18.2916L85.6667 68.625C87.5417 71.2916 88.0417 74.2083 87 76.2083C85.6667 78.7916 82.0833 79.1666 80.0833 79.1666H72.9167C69.4583 79.1666 66.6667 81.9583 66.6667 85.4166C66.6667 88.875 69.4583 91.6666 72.9167 91.6666H80.0833C88.2917 91.6666 94.875 88.125 98.0833 82C101.292 75.875 100.458 68 96.0833 61.7083H96.0417Z" fill="#F07054"/>
                </g>
                <defs>
                <clipPath id="clip0_24_160">
                <rect width="100" height="100" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <div className='mt-8 large-font'>This website might be harmful</div>
            <div className='mt-2'>The website (https://phishingwebsite.abc) you’re trying to visit might be a phishing attempt.</div>
            <div className='mt-5'>We think you might be looking for <a href='notphishingwebsite.abc'>notphishingwebsite.abc</a></div>
            <div className='mt--70'>
                <button className='btn btn-reject'>Proceed Anyway</button>
                <button className='btn btn-continue'>Go To notphishingwebsite.abc<RxArrowRight className='ml-1 inline-block'/></button>
            </div>
            <div className="ab ls ys mt--40 flex">
                <div className="ls nx yu mr-2">
                    <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" className="nr rs adk afq ayc bnm" />
                </div>
                <div className="jr avv awk">
                    <label htmlFor="candidates" className="avz axq">If you think this was a mistake, click here to mark false positive</label> 
                </div>
            </div>
            <div className='flex items-center mt--84'>
                <img src='/images/asset_logos/logo.png' className='inline-block' alt='logo' />
                <div className='inline-block'>
                    <div className='title'>VIBRANIUM SHIELD A.I</div>
                    <div className='protection'>Phishing Protection</div>
                </div>
            </div>
        </div>
  );
};
export default SimulationWarning;