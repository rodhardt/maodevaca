import { DashboardStyled } from "./styles";
import Header from "../../components/Header";
import CurrentBalance from "../../components/Dashboard/CurrentBalance";
import PieChart from "../../components/Dashboard/PieChart";
import HorizontalBar from "../../components/Dashboard/HorizontalBar";
import Links from "../../components/Links";

import { useEffect } from "react";
import { useUserInfo } from "../../providers/UserInfo";
import { useNavigate } from "react-router-dom";

import { FaMoneyBillAlt } from "react-icons/fa";

function Dashboard() {
  let navigate = useNavigate();
  const { getUserInfo, finances, getCurrentExpenses, currentExpenses } =
    useUserInfo();

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getCurrentExpenses();
  }, [finances]);

  return (
    <>
      <Header />
      <DashboardStyled>
        <Links isDashboard={true} />
        <CurrentBalance />
        {currentExpenses.length > 0 ? (
          <>
            {" "}
            <PieChart />
            <HorizontalBar />{" "}
          </>
        ) : (
          <div className="current-empty">
            <p>Não há nenhum gasto no período</p>
            <FaMoneyBillAlt />
            <p>Registre em:</p>
            <button onClick={() => navigate("/gastos")}>Gastos</button>
          </div>
        )}
      </DashboardStyled>
    </>
  );
}

export default Dashboard;
