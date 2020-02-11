import React from 'react';

import './mobile-info-card.styles.scss';

const MobileInfoCard = ({mobile}) => {
    return (
        <div className="mobile-info">
            <h2>{mobile.title}</h2>
            <p> {mobile.describe} </p>
        </div>
      );
}
 
export default MobileInfoCard;