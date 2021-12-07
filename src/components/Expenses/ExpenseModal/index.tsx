import { ExpenseModalStyled } from "./styles";
import { ExpenseData } from "../../../assets/types";

interface ExpenseModalProps {
  expense: ExpenseData;
  closeModal: () => void;
}

function ExpenseModal({ expense, closeModal }: ExpenseModalProps) {
  return (
    <ExpenseModalStyled>
      <div className="opacity" onClick={() => closeModal()}></div>
      <div className="expense-card">
        <table>
          <tr>
            <th>Nome</th>
            <td>{expense.name}</td>
          </tr>
          <tr>
            <th>Valor</th>
            <td>R$ {expense.value.toFixed(2).replace(".", ",")}</td>
          </tr>
          <tr>
            <th>Grupo</th>
            <td>{expense.group}</td>
          </tr>
          <tr>
            <th>Sub-grupo</th>
            <td>{expense.subgroup}</td>
          </tr>
          <tr>
            <th>Frequência</th>
            <td>{expense.frequency}</td>
          </tr>
          <tr>
            <th>Data</th>
            <td>{expense.date}</td>
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
