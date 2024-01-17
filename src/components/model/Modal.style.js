import { keyframes } from "styled-components";
import styled from "styled-components";
const popup = keyframes`  

from{   
  transform: translateX(-100%);
  opacity: 0;

}
to{
  transform: translateX(0%);
  opacity: 1;
}
`;
export const Model = styled.div`
  position: absolute;
  top: 0;
  width: 20%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.8;
  display: ${(props) => (props.display === "false" ? "none" : "block")};
  animation: ${popup};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalForm = styled.div`
  position: absolute;
  background-color: white;

  width: 90%;
  height: 50%;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
export const Input = styled.input`
  width: 60px;
`;
export const ClosedButton = styled.button`
  position: absolute;
  left: 93%;
  top: -10%;
`;
//import styled, { keyframes } from "styled-components";

// Other styled components...
