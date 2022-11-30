import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  display: block;
  min-height: 30px;
  min-width: 300px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 18px;
`;

export const SubmitBtn = styled.button`
  min-width: 150px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 18px;
  background-color: #e2e2e2;

  :hover,
  :focus {
    background-color: #c4c4c4;
  }
`;
