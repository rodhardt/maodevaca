import { LinksStyled } from "./styles";
import { useNavigate } from "react-router-dom";

interface LinksProps {
  isDashboard: boolean;
}

function Links({ isDashboard }: LinksProps) {
  let navigate = useNavigate();
  return (
    <LinksStyled>
      <ul>
        <li
          className={isDashboard ? "current-page" : "new-page"}
          onClick={() => (isDashboard ? null : navigate("/dashboard"))}
        >
          Informações
        </li>
        <li
          className={isDashboard ? "new-page" : "current-page"}
          onClick={() => (isDashboard ? navigate("/gastos") : null)}
        >
          Gastos
        </li>
      </ul>
    </LinksStyled>
  );
}

export default Links;
