import styled from 'styled-components';

export const Block = styled.header`
  width: 100%;
  z-index: 1;
  margin-bottom: 15px;
  padding: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  position: static;
  box-shadow: 1px 5px 10px rgb(52, 60, 62);
  background: linear-gradient(
    32deg,
    rgba(246, 243, 26, 1) 14%,
    rgba(246, 243, 26, 1) 39%,
    rgba(57, 118, 246, 1) 61%
  );
`;

export const TextError = styled.p`
  color: red;
  font-weight: bold;
  font-size: 20px;
`;
