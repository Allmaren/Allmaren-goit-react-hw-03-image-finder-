import styled from 'styled-components';

export const PhotoCard = styled.li`
  display: flex;
  max-width: 320px;
  max-height: 240px;
  flex-direction: column;
  border-bottom-left-radius: 6px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const GalleryImage = styled.img`
  object-fit: cover;
  flex-basis: calc((100% - 120px) / 4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  height: 320px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  &hover,
  &:focus {
    cursor: zoom-in;
  }
`;

export const GalleryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;
