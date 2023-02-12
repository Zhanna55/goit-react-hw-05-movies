import styled from 'styled-components';

export const MovieItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  border-radius: 2px;
  height: 100%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  min-height: 583px;
`;
export const Title = styled.p`
  font-size: 20px;
  padding: 5px;
  flex-grow: 1;
`;
