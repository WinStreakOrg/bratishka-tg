import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Root = styled.select`
  width: 358px;
  height: 45px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #afadad;
  border-radius: 8px;
  color: white;
  text-align: start;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  outline: none;
  appearance: none;
  cursor: pointer;

  //&:focus {
  //  border-color: #ffffff;
  //  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  //}
`;

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}


const Select: React.FC<SelectProps> = ({ options, value, onChange, placeholder, disabled = false, ...props }) => {
  return (
    <Root value={value} onChange={onChange} disabled={disabled} {...props}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Root>
  );
};

export default Select;
