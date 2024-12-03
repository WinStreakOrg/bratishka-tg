import React, { FC } from 'react';
import { Root } from './Elements';

interface IProps {
  onChange?: any;
  onKeyDown?: any;
  isCode?: boolean;
  type: string;
  value?: string;
  placeholder?: string;
}

export const Input: FC<IProps> = (props) => {

  const { placeholder, value, type, isCode, onChange, onKeyDown } = props;
  return (
    <Root placeholder={placeholder}
          value={value}
          type={type}
          isCode={isCode}
          onChange={onChange}
          onKeyDown={onKeyDown} />
  );
};
