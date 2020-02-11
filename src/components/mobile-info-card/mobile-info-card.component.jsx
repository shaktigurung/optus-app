import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './../custom-button/custom-button.component';

import OptusLogo from './../../assets/optuslogo.png';

import './mobile-info-card.styles.scss';

const MobileInfoCard = ({mobile}) => {
    //console.log(mobile);
    return (
        <div className="card" style={{width: "20rem"}}>
            <img src={OptusLogo} className="card-img-top" alt={mobile.title} />
            <div className="card-body">
                <h5 className="card-title">{mobile.title}</h5>
                <p className="card-text">{mobile.describe}</p>
                <Link to=''> <CustomButton name="Shop now"/> </Link>
            </div>
        </div>
      );
}
 
export default MobileInfoCard;