import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({name}) => {
    return (
        <button  className="button">
            {name}
        </button>
    );
}

export default CustomButton;