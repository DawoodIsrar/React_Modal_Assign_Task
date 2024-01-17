import styled from "styled-components";

export const Styledbutton = styled.button`
  height: 50px;
  width: 150px;
  background-color: ${(props) =>
    props.varient === "green" ? "green" : " white"};
  border: 1px solid greenyellow;
  text-align: center;
  display: inline-block;
  padding: 15px 10px;
  color: ${(props) => (props.varient === "green" ? "white" : props.varient)};
  font-size: 15px;

  &:hover {
    background-color: ${(props) =>
      props.varient !== "green" ? "green" : " white"};
    border: 1px solid greenyellow;
    text-align: center;
    display: inline-block;
    padding: 15px 10px;
    color: ${(props) => (props.varient !== "green" ? "white" : " green")};
  }
  @media (min-width: 550px) {
  }
`;

export const FancyButton = styled(Styledbutton)`
  height: 50px;
  width: 150px;
  background-image: linear-gradient(to right white green);
  border: 1px solid greenyellow;
  text-align: center;
  display: inline-block;
  padding: 15px 10px;
  color: ${(props) => (props.varient === "green" ? "white" : " green")};
  font-size: 15px;
`;
