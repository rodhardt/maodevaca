import { LoginPageStyled } from "./styles";

import { useState } from "react";

import Login from "../../components/Login";

function LoginPage() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <LoginPageStyled>
      <div className="background-opacity">
        <Login />
      </div>
    </LoginPageStyled>
  );
}

export default LoginPage;
