import { HorizontalBarStyled } from "./styles";
import { ExpenseData } from "../../../assets/types/index";

import { useState, useEffect } from "react";

function HorizontalBar() {
  const [expenses, setExpenses] = useState([
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
  ]);

  useEffect(() => {}, []);

  const expensesByGroup: { group: number } = expenses.reduce<any>(
    (acm: any, cv: ExpenseData) => {
      const { group, value } = cv;
      return acm[group] === undefined
        ? { ...acm, [group]: value }
        : { ...acm, [group]: acm[group] + value };
    },
    {}
  );

  const expensesEntriesSorted = Object.entries(expensesByGroup).sort(
    (a, b) => b[1] - a[1]
  );
  const expensesValues = Object.values(expensesByGroup);

  const maxValue = expensesValues.reduce((acm: number, cv: number) => {
    return acm > cv ? acm : cv;
  }, expensesValues[0]);
  const minValue = expensesValues.reduce((acm: number, cv: number) => {
    return acm < cv ? acm : cv;
  }, expensesValues[0]);

  return (
    <HorizontalBarStyled>
      <h2>Gastos</h2>
      {expenses.length}
      <table>
        {expensesEntriesSorted.map(
          (group: [group: string, value: number], index: number) => (
            <tr key={index}>
              <th>
                <p>{group[0]}</p>
              </th>
              <div
                className="group-bar"
                style={{
                  width: `calc(${group[1] / maxValue} * (100% - 100px))`,
                  backgroundColor: `rgb(220, 20, 20, ${
                    group[1] / maxValue < 0.2 ? 0.2 : group[1] / maxValue
                  })`,
                }}
              ></div>
              <div
                className="bar-value"
                style={{
                  left: `${
                    group[1] / maxValue < 0.5
                      ? `calc(105px + (${
                          group[1] / maxValue
                        } * (100% - 100px)))`
                      : `calc(105px + (${
                          group[1] / maxValue
                        } * (100% - 100px) / 2))`
                  }`,
                }}
              >
                R$ {group[1]}
              </div>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )
        )}
      </table>
    </HorizontalBarStyled>
  );
}

export default HorizontalBar;
