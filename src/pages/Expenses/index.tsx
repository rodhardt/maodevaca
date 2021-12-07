import { ExpensesPageStyled } from "./styles";
import Header from "../../components/Header";
import Links from "../../components/Links";
import ExpensesRegister from "../../components/Expenses/ExpenseRegister";
import ExpensesTable from "../../components/Expenses/ExpensesTable";

import { useEffect } from "react";
import { useUserInfo } from "../../providers/UserInfo";

function ExpensesPage() {
  const { getUserInfo, finances, getCurrentExpenses } = useUserInfo();

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getCurrentExpenses();
  }, [finances]);

  return (
    <>
      <Header />
      <ExpensesPageStyled>
        <Links isDashboard={false} />
        <ExpensesRegister />
        <ExpensesTable />
      </ExpensesPageStyled>
    </>
  );
}

export default ExpensesPage;
