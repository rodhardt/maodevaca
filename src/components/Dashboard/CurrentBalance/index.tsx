import { CurrentBalanceStyled } from "./styles";
import { useState } from "react";

import { AiFillMinusCircle } from "react-icons/ai";

function CurrentBalance() {
  const [wage, setWage] = useState(5500);
  const [payday, setPayday] = useState(5);
  const [newWage, setNewWage] = useState(wage.toFixed(2).replace(".", ","));
  const [newPayday, setNewPayday] = useState(
    `${payday < 10 ? `0${payday}` : payday}`
  );

  return (
    <CurrentBalanceStyled>
      <h2>Balanço</h2>
      <table>
        <tr>
          <th>Salário</th>
          <th>Dia</th>
        </tr>
        <tr>
          <td>
            <input
              type="number"
              placeholder={`R$ ${wage.toFixed(2).replace(".", ",")}`}
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
          <button
            onClick={() => {
              console.log(newWage);
            }}
          >
            Atualizar
          </button>
        </tr>
        <tr>
          <td>R$ 2000,00</td>
          <td>
            <p>Gasto</p>
          </td>
          <AiFillMinusCircle />
        </tr>
        <tr>
          <td>R$ 1250,00</td>
          <td>
            <p>Previsto</p>
          </td>
          <AiFillMinusCircle />
        </tr>
        <tr>
          <td>R$ 1000,00</td>
          <td>Saldo</td>
        </tr>
      </table>
    </CurrentBalanceStyled>
  );
}

export default CurrentBalance;
