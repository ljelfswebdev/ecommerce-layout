import React, { Component } from 'react';

import watches from '../../data/items';

class Watch extends Component {
    render() {
        return (
            <div>
                <p>{watches.name}</p>
            </div>
        );
    }
}

export default Watch;