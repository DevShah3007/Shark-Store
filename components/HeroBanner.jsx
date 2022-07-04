import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <h4 className="beats-solo">{heroBanner.discount}</h4>
        <h1>{heroBanner.largeText1}</h1>
        <h1>{heroBanner.largeText2}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Great Discounts</h5>
            <p>{heroBanner.saleTime}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner