import React from 'react';
import { AiFillInstagram, AiOutlineTwitter,AiOutlineFacebook,AiFillCopyrightCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p> <AiFillCopyrightCircle/> 2022 Shark Store All rights reserved.</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineFacebook/>
      </p>
    </div>
  )
}

export default Footer