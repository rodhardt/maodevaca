import { useState } from "react";

import { ExpensesTableStyled } from "./styles";
import { BsFillTrashFill } from "react-icons/bs";
import ExpenseModal from "../ExpenseModal";

function ExpensesTable() {
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);

  const expenses = [
    {
      id: 1,
      name: "compras bistek",
      value: 500,
      group: "mercado",
      subgroup: "comidas",
      frequency: "",
      date: "20/11/2021",
    },
    {
      id: 2,
      name: "aluguel",
      value: 1200,
      group: "aluguel",
      subgroup: "",
      frequency: "mensal",
      date: "",
    },
    {
      id: 3,
      name: "gasolina",
      value: 100,
      group: "transporte",
      subgroup: "carro",
      frequency: "semanal",
      date: "",
    },
    {
      id: 4,
      name: "consulta oftalmologista",
      value: 100,
      group: "saúde",
      subgroup: "",
      frequency: "",
      date: "14/11/2021",
    },
    {
      id: 5,
      name: "ração",
      value: 150,
      group: "animais",
      subgroup: "",
      frequency: "",
      date: "17/11/2021",
    },
    {
      id: 6,
      name: "pizza",
      value: 150,
      group: "alimentação",
      subgroup: "",
      frequency: "",
      date: "19/11/2021",
    },
    {
      id: 7,
      name: "geladal",
      value: 120,
      group: "lazer",
      subgroup: "",
      frequency: "",
      date: "19/11/2021",
    },
    {
      id: 8,
      name: "passado",
      value: 1200,
      group: "TESTE",
      subgroup: "",
      frequency: "",
      date: "04/10/2021",
    },
    {
      id: 9,
      name: "futuro",
      value: 800,
      group: "TESTE",
      subgroup: "",
      frequency: "",
      date: "06/12/2021",
    },
    {
      id: 10,
      name: "futuro",
      value: 20,
      group: "saúde",
      subgroup: "",
      frequency: "",
      date: "06/12/2021",
    },
  ];

  return (
    <>
      <ExpensesTableStyled>
        {isExpenseOpen && <ExpenseModal />}
        <table>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>
                {expense.name.length > 12
                  ? `${expense.name.slice(0, 12)}...`
                  : expense.name}
              </td>

              <td>{expense.value.toFixed(2).replace(".", ",")}</td>
              <td>{expense.date.slice(0, 5)}</td>
              <div className="full-name">{expense.name}</div>
              <div>
                <BsFillTrashFill />
              </div>
            </tr>
          ))}
        </table>
      </ExpensesTableStyled>
    </>
  );
}

export default ExpensesTable;
