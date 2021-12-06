import { CurrentBalanceStyled } from "./styles";
import { useState, useEffect } from "react";

import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

import { useUserInfo } from "../../../providers/UserInfo";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CurrentBalance() {
  const { finances, currentExpenses, updateFinances } = useUserInfo();

  const [wage, setWage] = useState(finances.wage.value);
  const [payday, setPayday] = useState(finances.wage.day);
  const [newWage, setNewWage] = useState(wage.toFixed(2).replace(".", ","));
  const [newPayday, setNewPayday] = useState(
    `${payday < 10 ? `0${payday}` : payday}`
  );

  const current = new Date();
  const today = { day: current.getDate(), month: current.getMonth() + 1 };

  const dateRange = () => {
    const paydayString = `${payday < 10 ? `0${payday}` : payday}`;
    const nextMonth = today.month === 12 ? 1 : today.month + 1;
    const previousMonth = today.month === 1 ? 12 : today.month - 1;
    return today.day < payday
      ? `${paydayString}/${
          previousMonth < 10 ? `0${previousMonth}` : `${previousMonth}`
        } - ${paydayString}/${
          today.month < 10 ? `0${today.month}` : `${today.month}`
        }`
      : `${paydayString}/${
          today.month < 10 ? `0${today.month}` : `${today.month}`
        } - ${paydayString}/${
          nextMonth < 10 ? `0${nextMonth}` : `${nextMonth}`
        }`;
  };

  useEffect(() => {
    setWage(finances.wage.value);
    setPayday(finances.wage.day);
  }, [finances]);

  const expensesTotal = currentExpenses.reduce((acm, cv) => acm + cv.value, 0);
  const balance = wage - expensesTotal;

  const invalidPayday = () =>
    toast.warn("Dia inválido", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const updateWage = () => {
    if (Number(newPayday) > 0 && Number(newPayday) <= 28) {
      const newFinances = {
        finances: {
          wage: { value: Number(newWage), day: Number(newPayday) },
          expenses: finances.expenses,
        },
      };
      updateFinances(newFinances);
      setNewWage("");
      setNewPayday("");
    } else {
      invalidPayday();
    }
  };

  return (
    <CurrentBalanceStyled>
      <h2>Balanço {dateRange()}</h2>
      <table>
        <tr>
          <th>Salário</th>
          <th>Dia</th>
        </tr>
        <tr className="wage-row">
          <td>
            <input
              type="number"
              placeholder={`${wage.toFixed(2).replace(".", ",")}`}
              value={newWage}
              min="0"
              onChange={(evt) => setNewWage(evt.target.value)}
            />
          </td>

          <td className="day">
            <input
              type="number"
              value={newPayday}
              min="0"
              max="28"
              placeholder={`${payday < 10 ? `0${payday}` : payday}`}
              onChange={(evt) => setNewPayday(evt.target.value)}
            />
          </td>
          <p className="currency">R$</p>
          <button
            onClick={() => {
              updateWage();
            }}
          >
            Alterar
          </button>
        </tr>
        <tr className="expense-row">
          <td>{expensesTotal.toFixed(2).replace(".", ",")}</td>
          <td>Gasto</td>
          <p className="currency">R$</p>
          <div className="icon-container">
            <AiFillMinusCircle className="minus" />
          </div>
        </tr>
        {/* <tr>
          <td>R$ 1250,00</td>
          <td>
            <p>Previsto</p>
          </td>
          <AiFillMinusCircle />
        </tr> */}
        <tr
          className={`balance-row ${
            balance > 0 ? "profit" : balance < 0 ? "loss" : "neutral"
          }`}
        >
          <td className={balance > 0 ? "balance positive" : "balance negative"}>
            {balance.toFixed(2).replace(".", ",")}
          </td>
          <td>Saldo</td>
          <p className="currency">R$</p>
          {balance > 0 ? (
            <div className="icon-container">
              <AiFillPlusCircle className="plus" />
            </div>
          ) : (
            <div className="icon-container">
              <AiFillMinusCircle className="minus" />
            </div>
          )}
        </tr>
      </table>
    </CurrentBalanceStyled>
  );
}

export default CurrentBalance;
