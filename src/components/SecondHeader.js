import React from 'react';
import { Link } from "react-router-dom";

import TwitterLogo from '../logos/twitter-logo.png';
import FacebookLogo from '../logos/facebook-logo.png';
import InstagramLogo from '../logos/instagram-logo.png';
import YoutubeLogo from '../logos/youtube-logo.png';


function SecondHeader() {

  const handleHide = (e) => {
    document.getElementsByClassName('header__second')[0].style.display = 'none';
  }

  return (
    <div className='flex-container header__second'>
      <div className='header__second-tabs'>
        <div className='header__second-all'>ALL</div>
        <Link to='/twitter' >
          <img src={TwitterLogo} height='25' width='25' />
        </Link>
        <Link to='/facebook' >
          <img src={FacebookLogo} height='25' width='25' />
        </Link>
        <Link to='/instagram' >
          <img src={InstagramLogo} height='25' width='35' />
        </Link>
        <Link to='/youtube' >
          <img src={YoutubeLogo} height='25' width='25' />
        </Link>
      </div>
      <button className='header__second-button' onClick={handleHide} >Hide</button>
    </div>
  )
}

export default SecondHeader