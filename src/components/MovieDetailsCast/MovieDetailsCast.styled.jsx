import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 80px);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  border-radius: 2px;
  height: 100%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const CastDescription = styled.div`
  padding: 5px;
  flex-grow: 1;
`;
export const Image = styled.img`
  object-fit: cover;
  min-height: 364px;
`;
