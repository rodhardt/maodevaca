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
          <td>05</td>
        </tr>
        <tr>
          <td>R$ 4150,00</td>
          <td>Realizados</td>
        </tr>
        <tr>
          <td>R$ 4150,00</td>
          <td>Previstos</td>
        </tr>
        <tr>
          <td>R$ 4150,00</td>
          <td></td>
        </tr>
      </table>
    </CurrentBalanceStyled>
  );
}

export default CurrentBalance;
