import React from 'react';
import MobileInfoCard from './../../components/mobile-info-card/mobile-info-card.component';
import {mobileInfo} from './../../database/mobile-info.js';

import './mobile-page.styles.scss';

const MobilePage = () => {
    //console.log(mobileInfo);
    return ( 
        <div className="App">
            <h1> Mobile Page </h1>
            <ul className="mobile-info-list">
                { mobileInfo.map( mobile => (
                    <li key={mobile.id}>
                        <MobileInfoCard mobile={mobile} />
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default MobilePage;