import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 80px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const Wrapper = styled.div`
  border-bottom: 1px solid gray;
`;
