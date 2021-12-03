import { ExpenseModalStyled } from "./styles";

function ExpenseModal() {
  return (
    <ExpenseModalStyled>
      <div className="opacity"></div>
      <div className="expense-card">
        <table>
          <tr>
            <th>Nome</th>
            <td>Compras bistek</td>
          </tr>
          <tr>
            <th>Valor</th>
            <td>R$ 550,00</td>
          </tr>
          <tr>
            <th>Grupo</th>
            <td>Alimentação</td>
          </tr>
          <tr>
            <th>Sub-grupo</th>
            <td>bistek</td>
          </tr>
          <tr>
            <th>Frequência</th>
            <td>Única</td>
          </tr>
          <tr>
            <th>Data</th>
            <td>15/11/2012</td>
          </tr>
        </table>
        <div className="buttons-container">
          <button>Alterar</button>
          <button>Excluir</button>
        </div>
      </div>
    </ExpenseModalStyled>
  );
}

export default ExpenseModal;
