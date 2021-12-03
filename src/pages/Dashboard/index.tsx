import { DashboardStyled } from "./styles";
import Header from "../../components/Header";
import CurrentBalance from "../../components/Dashboard/CurrentBalance";
import PieChart from "../../components/Dashboard/PieChart";
import HorizontalBar from "../../components/Dashboard/HorizontalBar";
import Links from "../../components/Links";

import { useState, useEffect } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();

  const token = localStorage.getItem("@mao-de-vaca:token") || "";
  const userId = localStorage.getItem("@mao-de-vaca:id") || "";

  const [finances, setFinances] = useState({
    wage: { value: 1000, day: 5 },
    expenses: [],
  });

  useEffect(() => {
    api
      .get(`/users/${userId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        // navigate("/");
      });
  }, []);

  return (
    <>
      <Header />
      <DashboardStyled>
        <Links isDashboard={true} />
        <CurrentBalance />
        <PieChart />
        <HorizontalBar />
      </DashboardStyled>
    </>
  );
}

export default Dashboard;
