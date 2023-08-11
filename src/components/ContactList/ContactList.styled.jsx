import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  list-style: none;
  margin: 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
`;

export const Text = styled.p`
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  color: #472c4c;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
`;
