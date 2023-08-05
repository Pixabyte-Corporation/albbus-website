import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import './custom-phone-input.scss';


const Phonecountry = () => {
  return (
    <div>
      <PhoneInput
        country={'mx'}
        value={''} 
        onChange={(phone) => console.log(phone)}
      />
    </div>
  );
};

export default Phonecountry;
