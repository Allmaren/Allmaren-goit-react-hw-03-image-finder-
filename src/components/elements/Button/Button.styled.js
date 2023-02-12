import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  margin: auto;
  padding: 15px;
  border: none;
  border-radius: 10px;
  min-width: 60px;
  color: #f6f5f5;
  cursor: pointer;
  color: #0eba11;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  font-size: 25px;
  font-weight: 700;
  z-index: 1;
  position: relative;
  bottom: 0vh;
  right: 38vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover,
  &:hover {
    scale: 1.02;
    background-color: #eadb10;
  }
`;

export const ButtonUp = styled.button`
  position: fixed;
  font-size: 25px;
  bottom: 3vh;
  right: 2vw;
  z-index: 1;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  color: #0eba11;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:hover {
    scale: 1.02;
    background-color: #eadb10;
  }
`;
