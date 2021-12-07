import { PieChartStyled } from "./styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { ExpenseData } from "../../../assets/types";
import { useState, useEffect } from "react";

import { useUserInfo } from "../../../providers/UserInfo";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const { currentExpenses } = useUserInfo();

  const [labels, setLabels] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        label: "R$ gastos",
        data: values,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  });

  const dataGenerator = () => {
    const expensesByGroup: { group: number } = currentExpenses.reduce<any>(
      (acm: any, cv: ExpenseData) => {
        const { group, value } = cv;
        return acm[group.toLowerCase()] === undefined
          ? { ...acm, [group.toLowerCase()]: value }
          : { ...acm, [group.toLowerCase()]: acm[group.toLowerCase()] + value };
      },
      {}
    );

    const expensesEntriesSorted = Object.entries(expensesByGroup).sort(
      (a, b) => b[1] - a[1]
    );

    setLabels([
      ...expensesEntriesSorted.map((expense) => expense[0].toLowerCase()),
    ]);
    setValues([...expensesEntriesSorted.map((expense) => expense[1])]);

    let colorsArray = [
      "rgba(255, 99, 132)",
      "rgba(54, 162, 235)",
      "rgba(255, 206, 86)",
      "rgba(75, 192, 192)",
      "rgba(153, 102, 255)",
      "rgba(255, 159, 64)",
      "rgba(100, 159, 64)",
      "rgba(230, 130, 200)",
      "rgba(50, 60, 150)",
      "rgba(0, 200, 70)",
      "rgba(200, 10, 64)",
      "rgba(160, 169, 64)",
      "rgba(200, 0, 200)",
    ];

    if (expensesEntriesSorted.length <= colorsArray.length) {
      setColors(colorsArray.slice(0, expensesEntriesSorted.length));
    } else {
      for (
        let i = 0;
        i < expensesEntriesSorted.length - colorsArray.length;
        i++
      ) {
        colorsArray.push(
          `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)})`
        );
      }
      setColors(colorsArray);
    }
  };

  useEffect(() => {
    dataGenerator();
  }, [currentExpenses]);

  return (
    <PieChartStyled>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              label: "R$ gastos",
              data: values,
              backgroundColor: colors,
              borderColor: colors,
              borderWidth: 1,
            },
          ],
        }}
      />
    </PieChartStyled>
  );
}

export default PieChart;
