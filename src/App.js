import "./App.css";
import { FancyButton, Styledbutton } from "./components/button/Button.style";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import LoginForm from "./components/Login/LoginForm";
import Modal from "./components/model/Modal";
import { Button } from "./components/button/Button";
import { useState } from "react";
import Main from "./components/pages/Main";
import Task from "./components/uitask/Task";
// we can specify theme for overall the components
const theme = {
  dark: {
    primary: "black",
    text: "white",
  },
  ligth: {
    primary: "white",
    text: "black",
  },
};

// we can declared the globals also by using createGlobalStyle from styled components

const globals = createGlobalStyle`
button {
  font-family:"roboto"
}
`;
function App() {
  const [showModal, setShowModal] = useState(false);
  const handleCLick = (showModal) => {
    setShowModal(true);
  };

  const modalSwitcher = (value) => {
    console.log("warka dang", value);
    setShowModal(value);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <button onClick={handleCLick}>Show modal</button> */}
        {/* <Styledbutton varient="outline">Hey from styled</Styledbutton>

        <Styledbutton varient="green">Hey from styled</Styledbutton>

        <FancyButton>Fancy</FancyButton>
        <LoginForm></LoginForm> */}
        {/* {showModal && <Modal open={showModal} setModal={modalSwitcher}></Modal>} */}
        {/* <Button /> */}
        {/* <Main></Main> */}
        <Task></Task>
      </ThemeProvider>
    </div>
  );
}

export default App;
