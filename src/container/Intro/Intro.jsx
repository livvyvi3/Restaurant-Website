import React from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react'

import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {
  
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidref}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
    </div>
  )
};

export default Intro;
