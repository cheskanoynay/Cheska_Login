import React from 'react';

interface InputFieldProps {
  placeholder: string;
  type: string;
}


function InputField({ placeholder, type }: InputFieldProps) {
  return (
    <div>
      <label htmlFor="input_name"></label>
      <input name="input_name" type={type} placeholder={placeholder} />
    </div>
  );
}

export default InputField;

