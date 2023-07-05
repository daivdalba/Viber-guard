import React, { useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdFeedback } from 'react-icons/md';
import { FaShare } from 'react-icons/fa';
import posthog from 'posthog-js';

export function Logo () {
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const vibraniumLogo = 'images/wg_logos/vibranium-logo.png'

  const toggleFeedback = () => {
    posthog.capture('toggle feedback');
    setShowFeedback(!showFeedback);
  };

  return (
    <div className='vibranium-logo-wrapper flex items-center'>
        <img src={vibraniumLogo} alt='vibranium-logo'/>
        <div className='vibranium-logo-meta-wrapper uppercase'>
            vibranium
        </div>
      {/* <div style={{ position: 'fixed', bottom: '0px', right: '0px', paddingRight: '1%', paddingBottom: '1%' }}>
        <button>
          <MdFeedback size={'35px'} color="gray" onClick={() => toggleFeedback()} />
        </button>
      </div> */}
    </div>
  );
}
