import { LoginPageStyled } from "./styles";

import { useState } from "react";

import Login from "../../components/Login/login";
import Register from "../../components/Login/register";

function LoginPage() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (boolean: boolean) => {
    setIsRegistered(boolean);
  };

  return (
    <LoginPageStyled>
      <div className="background-opacity">
        {isRegistered ? (
          <Register handleRegister={handleRegister} />
        ) : (
          <Login handleRegister={handleRegister} />
        )}
      </div>
    </LoginPageStyled>
  );
}

export default LoginPage;
