import React from 'react'
import ChildChildComponent from './ChildChildComponent';



const ChildComponent = ({
  RGB,
  factor,
}) => (
  <div
    style={{
      height: '100%',
      width: '100%',
      padding: '40px',
      backgroundColor: 'black', 
    }}
  >
    <ChildChildComponent
      factor={factor}
      RGB = {RGB.map(color => Math.floor(color*factor))}
    />
  </div>
);

export default ChildComponent;
