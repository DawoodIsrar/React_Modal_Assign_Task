import styled from "styled-components";
export const Form = styled.form`
  border: 1px dotted black;
  height: 400px;
  width: 400px;
  display: block;
  justify-content: center;
  align-content: center;
`;
export const FormLable = styled.label`
  font-size: 15px;
  font-family: serif;
  display: block;
  color: ${(props) => props.color};
`;
export const FormInput = styled.input`
  border: 1px 2px solid black;
  height: 30px;
  margin-top: 10px;
  &:focus {
    // Change the border color for focus state
    outline: black; // Remove the default focus outline (if desired)
    // Add any other styles you want for the focus state
  }
`;
export const SubmitButton = styled.button`
  display: block;
  width: 150px;
  height: 50px;
  background-color: black;
  margin-left: 120px;

  color: white;
  &:hover {
    color: black;
    background-color: white;
  }
`;
