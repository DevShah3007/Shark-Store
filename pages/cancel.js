import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillFrown } from 'react-icons/ai';

import { useStateContext } from '../context/StateContext';

const Cancel = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <AiFillFrown />
        </p>
        <h1>OOPS!!</h1>
        <h4>We could not place your order.</h4>
        <h4>It seems there was an unexpected error!</h4>
        <p className="email-msg">Please consider placing your order again. Sorry for inconvenience!</p>
        <p className="description">
          If you have any queries, please email
          <a className="email" href="mailto:orderquery@example.com">
            orderquery@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cancel