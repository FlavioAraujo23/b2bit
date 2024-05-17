import React from 'react';

type InputType = React.ComponentProps<'input'> & {
  label?: string;
  labelStyle?: string
  type: string;
};

const Input = ({ label, labelStyle, type, ...props }: InputType) => {
  return (
    <div>
      {label && <label className={labelStyle} htmlFor={label}>{label}</label>}
      <input id={label} type={type} {...props} />
    </div>
  );
};

export default Input;
