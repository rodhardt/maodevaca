import { DashboardStyled } from "./styles";
import Header from "../../components/Header";
import CurrentBalance from "../../components/Dashboard/CurrentBalance";
import PieChart from "../../components/Dashboard/PieChart";
import HorizontalBar from "../../components/Dashboard/HorizontalBar";

function Dashboard() {
  return (
    <>
      <Header />
      <DashboardStyled>
        <CurrentBalance />
        <PieChart />
        <HorizontalBar />
      </DashboardStyled>
    </>
  );
}

export default Dashboard;
