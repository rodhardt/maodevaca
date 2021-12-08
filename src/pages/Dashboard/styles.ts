import styled from "styled-components";

export const DashboardStyled = styled.main`
  .current-empty {
    width: 90%;
    margin: 70px auto;
    text-align: center;
    color: #303030;
  }

  .current-empty p {
    font-size: 22px;
  }

  .current-empty svg {
    color: #009000;
    width: 60px;
    height: 60px;
  }

  .current-empty p:not(:first-child) {
    margin-top: 40px;
  }

  .current-empty button {
    width: 150px;
    margin: 20px auto 0;
    height: 40px;
    font-size: 18px;
    border: 1px solid var(--darkerGray);
    border-radius: 5px;
    border-color: #00000000;
    transition: 0.3s;
    background-color: #e663a3;
    color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }

  .current-empty button:hover {
    color: #c64383;
    font-weight: bold;
    background-color: #e663a360;
  }
`;
