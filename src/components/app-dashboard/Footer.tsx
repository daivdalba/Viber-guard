import React from 'react';
import { RxCross1, RxArrowRight } from "react-icons/rx";
 interface FooterProps {
  popupIndex: number;
  setPopupIndex: React.Dispatch<React.SetStateAction<number>>;
}
 const Footer: React.FC<FooterProps> = (props) => {
  const handleContinue = () => {
    props.setPopupIndex(props.popupIndex + 1);
  };
   return (
    <div className='my-5 bottom-4 w-100'>
      <div className='footer flex justify-between items-center container'>
        <button className='btn btn-reject'>
          Reject
          <RxCross1 className='ml-1' />
        </button>
        <button className='btn btn-continue' onClick={handleContinue}>
          Continue
          <RxArrowRight className='ml-1' />
        </button>
      </div>
    </div>
  );
};
 export default Footer;