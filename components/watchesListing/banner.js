import React, { Component } from 'react';

class WatchesListingBanner extends Component {
    render() {
        return (
            <div className="watchesListing__banner">
                <div className="info">
                    <p>
                        The finest watches on the market
                    </p>
                    <p>
                        Explore our watches
                    </p>
                    <p>
                        Free Next Day Delivery
                    </p>
                </div>

                <div className='image'>
                    <img src="/images/banners/watchesListingBanner.png" alt="watchesListing"/>
                </div>
            </div>
        );
    }
}

export default WatchesListingBanner;