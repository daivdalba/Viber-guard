import React from 'react';
import { RxCross1, RxArrowRight } from "react-icons/rx";
export default function Footer() {
    return (
        <div className='fixed bottom-4 w-100'>
            <div className='footer flex justify-between items-center container'>
                <button className='btn btn-reject'>Reject<RxCross1 className='ml-1'/></button>
                <button className='btn btn-continue'>Continue<RxArrowRight className='ml-1'/></button>
            </div>
        </div>
    )
}