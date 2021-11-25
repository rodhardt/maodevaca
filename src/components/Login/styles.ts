import styled from "styled-components";

export const LoginStyled = styled.section`
  width: 95%;
  max-width: 450px;
  padding-bottom: 60px;
  background-color: var(--mainGray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  border-radius: 25px;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;
    background-color: #252525;
    padding: 5px 10px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  .image-container {
    width: 40px;
    margin-right: 5px;
  }

  .image-container img {
    width: 100%;
    height: 100%;
  }

  h1 {
    margin-left: 5px;
    font-family: "Lobster", cursive;
    font-size: 30px;
  }

  h3 {
    font-size: 18px;
    text-align: center;
    margin: 20px auto 10px;
    color: #404040;
  }

  form {
    width: 85%;
    margin: 40px auto 25px;
    display: flex;
    flex-direction: column;
  }

  .input-container {
    position: relative;
    margin-bottom: 35px;
  }

  form input {
    width: 100%;
    font-size: 20px;
    height: 34px;
    border: none;
    border-radius: 5px;
    background-color: var(--lightGray);
    border-bottom: 1px solid var(--darkGray);
    padding-left: 10px;
    color: #404040;
  }

  label {
    position: absolute;
    padding: 0 4px;
    color: red;
    top: 4px;
    left: 10px;
    color: #404040;
    font-size: 20px;
    transition: 0.1s;
    pointer-events: none;
  }

  input:focus {
    background-color: var(--darkGray);
  }

  input {
    &:not(:placeholder-shown) + label,
    &:focus + label {
      transition: 0.3s;
      top: 0px;
      left: 5px;
      transform: translateY(-100%);
      font-size: 16px;
      padding-bottom: 5px;
      color: #707070;
    }
  }

  input:-webkit-autofill + label {
    transition: 0s;
    top: 0px;
    left: 5px;
    transform: translateY(-100%);
    font-size: 16px;
    padding-bottom: 5px;
    color: #707070;
  }

  .fail input + label,
  .fail input {
    color: #ee0000;
    border-color: #ee0000;
  }

  .fail input {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .button-container {
    width: 85%;
    margin: auto;
  }

  .button-container button {
    width: 100%;
  }

  button {
    height: 40px;
    font-size: 18px;
    border: 1px solid var(--darkerGray);
    border-radius: 5px;
    border-color: #00000000;
    transition: 0.3s;
  }

  .confirm-button {
    background-color: #e663a3;
    color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }

  .confirm-button:hover {
    color: #c64383;
    font-weight: bold;
    background-color: #e663a360;
  }

  .switch-button {
    border: none;
    border-bottom: 2px solid #00cc00;
    background-color: #00cc0020;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    color: #006000;
  }

  .switch-button:hover {
    background-color: #00900090;
    color: white;
    font-weight: bold;
    border-color: #008000;
  }
`;
