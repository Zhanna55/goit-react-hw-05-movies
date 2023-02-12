import styled from 'styled-components';

export const FormWrapper = styled.div`
  padding: 15px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 60px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
