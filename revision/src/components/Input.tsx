import React, { useState } from "react";

interface inputProps {
    value : string ,
    handleChange: (event : React.ChangeEvent<HTMLInputElement>)=> void
}

const Input = ({value, handleChange } : inputProps ) => {

  return <input value={value} onChange={handleChange} />;
  
};

export default Input;
