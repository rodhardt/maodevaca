import { ExpensesPageStyled } from "./styles";
import Header from "../../components/Header";
import Links from "../../components/Links";
import ExpensesRegister from "../../components/Expenses/ExpenseRegister";
import ExpensesTable from "../../components/Expenses/ExpensesTable";

function ExpensesPage() {
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
