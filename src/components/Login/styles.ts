import styled from "styled-components";

export const LoginStyled = styled.section`
  width: 95%;
  max-width: 450px;
  height: 500px;
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
    background-color: #202020;
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

  form {
    width: 85%;
    margin: 40px auto 10px;
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
  }

  label {
    position: absolute;
    padding: 0 4px;
    color: red;
    top: 0;
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
    &:not(:placeholder-shown) + label {
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
    color: #dd0000;
    border-color: #dd0000;
  }

  .button-container {
    width: 85%;
    margin: auto;
  }

  .button-container button {
    width: 100%;
  }

  button {
    height: 32px;
    border: 1px solid var(--darkerGray);
    border-radius: 5px;
  }

  .confirm-button {
    background-color: #eec0cb;
  }
`;
