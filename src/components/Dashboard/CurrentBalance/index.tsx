import { CurrentBalanceStyled } from "./styles";

function CurrentBalance() {
  return (
    <CurrentBalanceStyled>
      <h2>Balanço</h2>
      <table>
        <tr>
          <th>Salário</th>
          <th>Dia</th>
        </tr>
        <tr>
          <td>R$ 4150,00</td>
          <td className="day">05</td>
        </tr>
        <tr>
          <td>R$ 2000,00</td>
          <td>- Gasto</td>
        </tr>
        <tr>
          <td>R$ 1250,00</td>
          <td>- Previsto</td>
        </tr>
        <tr>
          <td>R$ 1000,00</td>
          <td></td>
        </tr>
      </table>
    </CurrentBalanceStyled>
  );
}

export default CurrentBalance;
