import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  :hover,
  :focus {
    background-color: #b4b3b3;
  }
`;

export const Contact = styled.p`
  word-break: break-all;
  font-size: 18px;
`;

export const Number = styled.span`
  margin-left: 10px;
  font-weight: 500;
`;

export const ContactsDeleteBtn = styled.button`
  min-width: 120px;
  margin-left: auto;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 18px;
  background-color: #d1d1d1b8;

  :hover,
  :focus {
    background-color: #b4b3b3;
  }
`;
