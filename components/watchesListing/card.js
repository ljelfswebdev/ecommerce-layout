import React, { Component } from 'react';

import watches from '../../data/items';

class WatchesProductListingCard extends Component {
    render() {
        return (
            <>
            {watches.map((w) => (
                <div className="watchesListing__card">
                <div className="image">
                    <img src={`/images/products/watches/${w.image}.png`} alt={w.name}/> 
                </div>
                    
                <p>{w.name}</p>
                <div className="color">
                    <span className="color" style={{backgroundColor:w.color}}></span>
                </div>
                    
                <p>£{w.price}.00</p>
            </div>
            ))};

        </>

        );
    }
}

export default WatchesProductListingCard;