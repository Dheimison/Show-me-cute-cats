import styled, { css } from 'styled-components';

export const Sidebar = styled.aside`
  height: 100%;
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 680px) {
    display: ${props => (props.modal ? 'flex' : 'none')};
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
  }

  h2 {
    color: #fff;
    text-transform: uppercase;
    margin: 40px 0 20px 0;
    font-size: 38px;
  }
`;

export const ListCategory = styled.ul`
  li {
    color: #fff;
    font-size: 36px;
    margin: 0 0 10px 0;
  }
`;

export const ButtonCategory = styled.button`
  width: 160px;
  padding: 10px 0;
  background: none;
  border: 2px solid #fff;
  border-radius: 50px;
  color: #fff;
  text-transform: uppercase;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background: #4c25eb;
  }

  ${props =>
    props.value === false &&
    css`
      background: #4c25eb;
    `}
`;
