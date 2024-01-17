import React from "react";
import { Model, ModalForm, ModalContent, ClosedButton } from "./Modal.style";
import { useEffect, useState } from "react";

function Modal({ setModal, open }) {
  const [isOpen, setIsopen] = useState(true);
  const HandleClosed = () => {
    setModal(!open);
  };

  return (
    <>
      {
        <Model display={open}>
          <ModalForm>
            <ClosedButton onClick={HandleClosed}>X</ClosedButton>
            <h2>Contact Info</h2>
            <ModalContent>
              <br></br>
              <label>
                Enter name:<input></input>
              </label>
            </ModalContent>
            <br></br>
            <br></br>
            <ModalContent>
              <br></br>
              <label>
                Enter name:<input></input>
              </label>
            </ModalContent>{" "}
            <br></br>
            <br></br>
            <ModalContent>
              <br></br>
              <label>
                Enter name:<input></input>
              </label>
            </ModalContent>
          </ModalForm>
        </Model>
      }
    </>
  );
}

export default Modal;
