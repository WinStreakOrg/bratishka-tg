import React, { FC, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';


interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: any;
  onKeyDown?: any;
  isCode?: boolean;
  type: string;
  value?: string;
  placeholder?: string;
  ref?: any;
}


export const Root = styled.input<IProps>`
  width: 358px;
  height: 45px;
  padding: 12px 16px 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #afadad;
  border-radius: 8px;
  color: white;
  text-align: start;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  ${({ isCode }) => isCode && css`
    width: 36px;
    height: 36px;
    border: 1px solid #afadad;
    border-radius: 8px;
    padding: 0 12px;
  `}
`;


export const Input: FC<IProps> = React.forwardRef(
  (props: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { placeholder, value, type, isCode, onChange, onKeyDown, ...rest } = props;

    return (
      <Root
        placeholder={placeholder}
        value={value}
        type={type}
        isCode={isCode}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={ref}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';
