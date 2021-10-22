import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  margin-right: 30px;
  width: 100%;

  & textarea {
    width: 390px;
    height: 200px;
    max-width: 390px;
    max-height: 200px;
    border: 1px solid #ccc;
    padding: 10px;
  }
`;

export const Label = styled.label`
  font-size: 1.2em;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const StyledField = styled(Field)`
  border: 0;
  font-size: 1em;
  width: 80%;
  margin: 8px;
  border-bottom: 1px solid #ccc;
`;

export const Row = styled.div`
  display: flex;
`;


export const RowLabel = styled.label`
  font-size: 1em;
`;

export const RowField = styled(Field)`
  border: 0;
  font-size: .9em;
  width: 80%;
  margin: 8px;
  border-bottom: 1px solid #ccc;
`

export const Button = styled.button`
  font-size: 1em;
  background-color: #00b894;
  border: 0;
  border-radius: 3px;
  color: white;
  padding: .6em 1em;
  cursor: pointer;
`;

export const ExitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content:center;
  position: absolute;
  top:-1.5em;
  right: -1.5em;
  width: 3em;
  height: 3em;
  background-color: #e74c3c;
  border: 0;
  border-radius: 50%;
  color: white;
  padding: 1em;
  cursor: pointer;
`;
