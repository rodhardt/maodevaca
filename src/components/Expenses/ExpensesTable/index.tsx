import { useState, useEffect } from "react";

import { ExpensesTableStyled } from "./styles";
import { BsFillTrashFill } from "react-icons/bs";
import ExpenseModal from "../ExpenseModal";

import { useUserInfo } from "../../../providers/UserInfo";
import { ExpenseData } from "../../../assets/types";

function ExpensesTable() {
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);
  const [expenseForModal, setExpenseForModal] = useState<ExpenseData>(
    {} as ExpenseData
  );
  const { finances, currentExpenses, updateFinances } = useUserInfo();

  const handleExpenseModal = (currentExpense: ExpenseData) => {
    setExpenseForModal(currentExpense);
    setIsExpenseOpen(true);
  };

  const closeModal = () => {
    setIsExpenseOpen(false);
  };

  const deleteExpense = (evt: any, deletedExpense: ExpenseData) => {
    evt.stopPropagation();
    const newFinances = {
      finances: {
        wage: finances.wage,
        expenses: finances.expenses.filter(
          (expense) => expense.id !== deletedExpense.id
        ),
      },
    };
    updateFinances(newFinances);
  };

  return (
    <>
      <ExpensesTableStyled>
        {isExpenseOpen && (
          <ExpenseModal expense={expenseForModal} closeModal={closeModal} />
        )}
        <table>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
          {currentExpenses.map((expense, index) => (
            <tr key={index} onClick={() => handleExpenseModal(expense)}>
              <td>
                {expense.name.length > 12
                  ? `${expense.name.slice(0, 12)}...`
                  : expense.name}
              </td>

              <td>{expense.value.toFixed(2).replace(".", ",")}</td>
              <td>{expense.date?.slice(0, 5)}</td>
              <div className="full-name">{expense.name}</div>
              <div>
                <BsFillTrashFill
                  className="delete-icon"
                  onClick={(evt) => deleteExpense(evt, expense)}
                />
              </div>
            </tr>
          ))}
          <h3>Despesas de outros períodos</h3>
          {finances.expenses
            .filter((expense) =>
              currentExpenses.every((current) => current.id !== expense.id)
            )
            .map((expense, index) => (
              <tr key={index} onClick={() => handleExpenseModal(expense)}>
                <td>
                  {expense.name.length > 12
                    ? `${expense.name.slice(0, 12)}...`
                    : expense.name}
                </td>

                <td>{expense.value.toFixed(2).replace(".", ",")}</td>
                <td>{expense.date?.slice(0, 5)}</td>
                <div className="full-name">{expense.name}</div>
                <div>
                  <BsFillTrashFill
                    className="delete-icon"
                    onClick={(evt) => deleteExpense(evt, expense)}
                  />
                </div>
              </tr>
            ))}
        </table>
      </ExpensesTableStyled>
    </>
  );
}

export default ExpensesTable;
