import { HorizontalBarStyled } from "./styles";
import { ExpenseData } from "../../../assets/types/index";

import { useState, useEffect } from "react";
import { useUserInfo } from "../../../providers/UserInfo";

function HorizontalBar() {
  const { currentExpenses } = useUserInfo();

  const [expensesEntriesSorted, setExpensesEntriesSorted] = useState<
    [string, number][]
  >([]);
  const [maxValue, setMaxValue] = useState(1);

  const chartDataGen = () => {
    const newExpensesByGroup: { group: number } = currentExpenses.reduce<any>(
      (acm: any, cv: ExpenseData) => {
        const { group, value } = cv;
        return acm[group] === undefined
          ? { ...acm, [group]: value }
          : { ...acm, [group]: acm[group] + value };
      },
      {}
    );

    setExpensesEntriesSorted(
      Object.entries(newExpensesByGroup).sort((a, b) => b[1] - a[1])
    );
    const expensesValues = Object.values(newExpensesByGroup);
    setMaxValue(
      expensesValues.reduce((acm: number, cv: number) => {
        return acm > cv ? acm : cv;
      }, expensesValues[0])
    );
  };

  useEffect(() => {
    chartDataGen();
  }, [currentExpenses]);

  return (
    <HorizontalBarStyled>
      <h2>Gastos</h2>

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
