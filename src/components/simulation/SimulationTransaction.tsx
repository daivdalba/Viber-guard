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

const SimulationTransaction = (props: OverviewProps) => {
    const [error, setError] = useState(false);
    return (
        <div className='content main-font'>

            <div className='title-font mt-8'>Transaction Details</div>
            <div className='color-info mt-2'>Website</div>
            <div className='flex justify-between items-center vibranium-subdescription-content'>
                <div className='flex'>
                    <span className='mr-2'>testnets.opensea.io</span>
                    <svg className='i-verified' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="badge-check 1" clip-path="url(#clip0_12_110)">
                            <path id="Vector" d="M14.0002 7.00009C14.0002 6.01076 13.4985 5.13868 12.7355 4.62418C12.9111 3.72118 12.6492 2.74993 11.9497 2.04993C11.2503 1.35051 10.2791 1.0886 9.37549 1.26418C8.861 0.501178 7.98891 -0.000488281 6.99958 -0.000488281C6.01024 -0.000488281 5.13816 0.501178 4.62366 1.26418C3.72066 1.0886 2.74883 1.35051 2.04941 2.04993C1.34999 2.74934 1.08808 3.72059 1.26366 4.62418C0.50066 5.13868 -0.00100708 6.01076 -0.00100708 7.00009C-0.00100708 7.98943 0.50066 8.86151 1.26366 9.37601C1.08808 10.279 1.34999 11.2508 2.04941 11.9503C2.74883 12.6497 3.72008 12.9116 4.62366 12.736C5.13816 13.499 6.01024 14.0007 6.99958 14.0007C7.98891 14.0007 8.861 13.499 9.37549 12.736C10.2785 12.9116 11.2503 12.6497 11.9497 11.9503C12.6492 11.2508 12.9111 10.2796 12.7355 9.37601C13.4985 8.86151 14.0002 7.98943 14.0002 7.00009ZM6.94708 8.99451C6.72133 9.22026 6.42441 9.33284 6.12633 9.33284C5.82824 9.33284 5.52841 9.21909 5.30033 8.99159L3.67749 7.41893L4.49008 6.58068L6.11933 8.15976L9.50791 4.83418L10.3269 5.66543L6.94708 8.99451Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_12_110">
                                <rect width="14" height="14" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className='color-verified font-extrabold'>Verified by Vibranium</div>
            </div>
            <div className='color-info mt-8'>Contract</div>
            <div className='flex items-center mt-2'>
                <div className='px-4 py-2 bg-secondary mr-2'>0x0120...se61</div>
                <svg className='i-success' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="badge-check 1" clip-path="url(#clip0_12_110)">
                        <path id="Vector" d="M14.0002 7.00009C14.0002 6.01076 13.4985 5.13868 12.7355 4.62418C12.9111 3.72118 12.6492 2.74993 11.9497 2.04993C11.2503 1.35051 10.2791 1.0886 9.37549 1.26418C8.861 0.501178 7.98891 -0.000488281 6.99958 -0.000488281C6.01024 -0.000488281 5.13816 0.501178 4.62366 1.26418C3.72066 1.0886 2.74883 1.35051 2.04941 2.04993C1.34999 2.74934 1.08808 3.72059 1.26366 4.62418C0.50066 5.13868 -0.00100708 6.01076 -0.00100708 7.00009C-0.00100708 7.98943 0.50066 8.86151 1.26366 9.37601C1.08808 10.279 1.34999 11.2508 2.04941 11.9503C2.74883 12.6497 3.72008 12.9116 4.62366 12.736C5.13816 13.499 6.01024 14.0007 6.99958 14.0007C7.98891 14.0007 8.861 13.499 9.37549 12.736C10.2785 12.9116 11.2503 12.6497 11.9497 11.9503C12.6492 11.2508 12.9111 10.2796 12.7355 9.37601C13.4985 8.86151 14.0002 7.98943 14.0002 7.00009ZM6.94708 8.99451C6.72133 9.22026 6.42441 9.33284 6.12633 9.33284C5.82824 9.33284 5.52841 9.21909 5.30033 8.99159L3.67749 7.41893L4.49008 6.58068L6.11933 8.15976L9.50791 4.83418L10.3269 5.66543L6.94708 8.99451Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_12_110">
                            <rect width="14" height="14" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className='color-info mt-8'>You are giving</div>
            <div className='vibranium-detail-container flex justify-between items-center p-2 mt-2'>
                <div className='flex'>
                    <img src="/images/extra/eth.svg" alt="" className='vibranium-detail-image' />
                    <div className='flex items-center'>
                        <span className='ml-2'>ETH</span>
                        <svg className='i-success ml-2' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="badge-check 1" clip-path="url(#clip0_12_110)">
                                <path id="Vector" d="M14.0002 7.00009C14.0002 6.01076 13.4985 5.13868 12.7355 4.62418C12.9111 3.72118 12.6492 2.74993 11.9497 2.04993C11.2503 1.35051 10.2791 1.0886 9.37549 1.26418C8.861 0.501178 7.98891 -0.000488281 6.99958 -0.000488281C6.01024 -0.000488281 5.13816 0.501178 4.62366 1.26418C3.72066 1.0886 2.74883 1.35051 2.04941 2.04993C1.34999 2.74934 1.08808 3.72059 1.26366 4.62418C0.50066 5.13868 -0.00100708 6.01076 -0.00100708 7.00009C-0.00100708 7.98943 0.50066 8.86151 1.26366 9.37601C1.08808 10.279 1.34999 11.2508 2.04941 11.9503C2.74883 12.6497 3.72008 12.9116 4.62366 12.736C5.13816 13.499 6.01024 14.0007 6.99958 14.0007C7.98891 14.0007 8.861 13.499 9.37549 12.736C10.2785 12.9116 11.2503 12.6497 11.9497 11.9503C12.6492 11.2508 12.9111 10.2796 12.7355 9.37601C13.4985 8.86151 14.0002 7.98943 14.0002 7.00009ZM6.94708 8.99451C6.72133 9.22026 6.42441 9.33284 6.12633 9.33284C5.82824 9.33284 5.52841 9.21909 5.30033 8.99159L3.67749 7.41893L4.49008 6.58068L6.11933 8.15976L9.50791 4.83418L10.3269 5.66543L6.94708 8.99451Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_12_110">
                                    <rect width="14" height="14" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='text-right color-warning'>
                    <div>-0.0004 ETH</div>
                    <div>$7.64</div>
                </div>
            </div>
            <div className='color-info mt-8'>You are receiving</div>
            <div className='vibranium-detail-container flex justify-between items-center p-2 mt-2'>
                <div className='flex items-center'>
                    <img src="/images/image/image1.jpg" alt="" className='mr-2 w-10' />
                    <div>
                        <span>Seattle Coin Shop</span>
                        <div className='small-font'>g8s9 3jsn4</div>
                    </div>
                </div>
                <div className='text-right color-verified'>
                    <div>+1 NFT</div>
                    <div>$2.21</div>
                </div>
            </div>
            <div className='vibranium-detail-container flex justify-between items-center p-2 mt-2'>
                <div className='flex items-center'>
                    <img src="/images/image/image2.jpg" alt="" className='mr-2 w-10' />
                    <div>
                        <span>Meme Factory</span>
                        <div className='small-font'>e4ls 4g35</div>
                    </div>
                </div>
                <div className='text-right color-verified'>
                    <div>+1 NFT</div>
                    <div>$5.43</div>
                </div>
            </div>
        </div>
  );
};
export default SimulationTransaction;