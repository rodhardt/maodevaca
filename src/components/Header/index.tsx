import { HeaderStyled } from "./styles";
import Logo from "../../assets/images/mao-de-vaca.png";
import { MdOutlineLogout } from "react-icons/md";

import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <HeaderStyled>
      <div className="logo-container">
        <div className="image-container">
          <img src={Logo} alt="mao-de-vaca" />
        </div>
        <h1>mão-de-vaca</h1>
      </div>
      <div className="logout-container" onClick={() => logout()}>
        <MdOutlineLogout />
        <p>Logout</p>
      </div>
    </HeaderStyled>
  );
}

export default Header;
