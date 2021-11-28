import styled from "styled-components";

export const HeaderStyled = styled.header`
  color: white;

  background-color: #353535;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5px 10px;
  }

  .image-container {
    width: 30px;
    margin-right: 5px;
  }

  .image-container img {
    width: 100%;
    height: 100%;
  }

  h1 {
    margin-left: 5px;
    font-family: "Lobster", cursive;
    font-size: 20px;
  }

  .logout-container {
    width: 30px;
    position: relative;
  }

  .logout-container svg {
    width: 30px;
    height: 30px;
  }

  .logout-container svg:hover {
    cursor: pointer;
  }

  .logout-container svg:hover + p {
    display: block;
    position: absolute;
    transform: translateX(-50%);
    text-decoration: underline;
  }

  .logout-container p {
    display: none;
  }
`;
