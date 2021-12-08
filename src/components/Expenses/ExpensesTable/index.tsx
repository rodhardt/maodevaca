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
      {isExpenseOpen && (
        <ExpenseModal modalExpense={expenseForModal} closeModal={closeModal} />
      )}
      <ExpensesTableStyled>
        <table>
          <tr className="heads">
            <th className="head-name">Nome</th>
            <th className="head-value">Valor (R$)</th>
            <th className="head-date">Data</th>
            <th className="head-icons"></th>
          </tr>
          {currentExpenses.length === 0 && (
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          )}
          {currentExpenses
            .sort((a, b) => {
              return (
                Number(
                  `${b.date.slice(6, 10)}${b.date.slice(3, 5)}${b.date.slice(
                    0,
                    2
                  )}`
                ) -
                Number(
                  `${a.date.slice(6, 10)}${a.date.slice(3, 5)}${a.date.slice(
                    0,
                    2
                  )}`
                )
              );
            })
            .map((expense, index) => (
              <tr key={index} onClick={() => handleExpenseModal(expense)}>
                <td>{expense.name}</td>

                <td>{expense.value.toFixed(2).replace(".", ",")}</td>
                <td>{expense.date?.slice(0, 5)}</td>

                <div className="icon-container">
                  <BsFillTrashFill
                    className="delete-icon"
                    onClick={(evt) => deleteExpense(evt, expense)}
                  />
                </div>
              </tr>
            ))}

          <tr className="title-row">
            <h3>Despesas de outros períodos</h3>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          {finances.expenses.filter((expense) =>
            currentExpenses.every((current) => current.id !== expense.id)
          ).length === 0 && (
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td></td>
            </tr>
          )}
          {finances.expenses
            .filter((expense) =>
              currentExpenses.every((current) => current.id !== expense.id)
            )
            .sort((a, b) => {
              return (
                Number(
                  `${b.date.slice(6, 10)}${b.date.slice(3, 5)}${b.date.slice(
                    0,
                    2
                  )}`
                ) -
                Number(
                  `${a.date.slice(6, 10)}${a.date.slice(3, 5)}${a.date.slice(
                    0,
                    2
                  )}`
                )
              );
            })
            .map((expense, index) => (
              <tr key={index} onClick={() => handleExpenseModal(expense)}>
                <td>{expense.name}</td>

                <td>{expense.value.toFixed(2).replace(".", ",")}</td>
                <td>{expense.date.slice(0, 5)}</td>

                <div className="icon-container">
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
