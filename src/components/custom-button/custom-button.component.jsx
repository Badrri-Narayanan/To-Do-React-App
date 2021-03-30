import React from 'react'

import './custom-button.styles.css'

const CustomButton = ({children, ...otherProps}) => (
    <div className="custom-button" >
        <button {...otherProps}>
            {children}
        </button>
    </div>
);

export default CustomButton;