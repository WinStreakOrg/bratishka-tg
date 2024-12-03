import styled from 'styled-components';


export const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  //justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 358px;
  border-radius: 8px 0 0 0;

`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 358px;
  height: 100%;
  border-radius: 8px 0 0 0;
  justify-content: space-between;

`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;

  p {
    color: white;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;

  }
`;

