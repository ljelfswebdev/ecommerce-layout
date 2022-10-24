import React, { Component } from 'react';

import WatchesListingBanner from '../../components/watchesListing/banner';
import WatchesProductListingCard from '../../components/watchesListing/card';

class watchesListing extends Component {
    render() {
        return (
            <div className="watchesListing">
                <div>
                    <WatchesListingBanner />
                </div>

                <div className="products">
                    <WatchesProductListingCard/>    
                </div>
            </div>
        );
    }
}

export default watchesListing;