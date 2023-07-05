import React from 'react';

export interface ChildProps {
    isPhish: boolean;
}

const Header: React.FC<ChildProps> =  ({ isPhish }) => {
    return (
        <div className='header flex justify-between items-center'>
        <div className='flex items-center'>
            <img src='/images/asset_logos/logo.png' className='inline-block' alt='logo' />
            <div className='inline-block'>
                <div className='title'>VIBRANIUM</div>
                <div className='author'>SHIELD A.I</div>
            </div>
        </div>
        {
            isPhish ? 
            <button type='button' className='btn connect-btn small-font' >Connect</button>
            :
            ''
        }
    </div>
    )
}

export default Header;