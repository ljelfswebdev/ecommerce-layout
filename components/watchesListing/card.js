import React, { Component } from 'react';

import Link from 'next/link';

import watches from '../../data/items';

class WatchesProductListingCard extends Component {
    render() {
        return (
            <>
            {watches.map((w) => (
                <div className="watchesListing__card" key={w.id}>
                <div className="image">
                    <img src={`/images/products/watches/${w.image}.png`} alt={w.name}/> 
                </div>
                    
                <p>{w.name}</p>
                <div className="color">
                    <span className="color" style={{backgroundColor:w.color}}></span>
                </div>
                    
                <p>£{w.price}.00</p>

                <div className="buttons">
                      <Link href={`/watches/${w.id}`}>
                       <button className="button button--light-blue">
                         Buy Now
                       </button>
                      </Link>
                    </div>
            </div>
            ))}

        </>

        );
    }
}

export default WatchesProductListingCard;