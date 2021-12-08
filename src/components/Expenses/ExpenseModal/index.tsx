import { ExpenseModalStyled } from "./styles";
import { ExpenseData } from "../../../assets/types";
import { useState, useEffect } from "react";

import { useUserInfo } from "../../../providers/UserInfo";

import { BsPencilSquare } from "react-icons/bs";

interface ExpenseModalProps {
  modalExpense: ExpenseData;
  closeModal: () => void;
}

function ExpenseModal({ modalExpense, closeModal }: ExpenseModalProps) {
  const { finances, updateFinances } = useUserInfo();

  const [newValue, setNewValue] = useState(modalExpense.value);
  const [newGroup, setNewGroup] = useState(modalExpense.group);
  const [newDate, setNewDate] = useState();

  const [isValueChange, setIsValueChange] = useState(false);

  const [isNewGroup, setIsNewGroup] = useState(false);
  const [groups, setGroups] = useState<string[]>([]);

  useEffect(() => {
    const groupsArray = finances.expenses.map((expense) => expense.group);
    setGroups(
      groupsArray.filter(
        (group, index) =>
          index === groupsArray.indexOf(group) && group !== modalExpense.group
      )
    );
  }, [finances]);

  return (
    <ExpenseModalStyled>
      <div className="opacity" onClick={() => closeModal()}></div>
      <div className="expense-card">
        <header>
          <h2>{modalExpense.name}</h2>
          <button onClick={() => closeModal()}>X</button>
        </header>
        <table>
          <tr>
            <th>Valor</th>
            {!isValueChange ? (
              <>
                <td>R$ {modalExpense.value.toFixed(2).replace(".", ",")}</td>
                <td>
                  <BsPencilSquare onClick={() => setIsValueChange(true)} />
                </td>
              </>
            ) : (
              <>
                <td>
                  <input
                    placeholder={`R$ ${newValue.toFixed(2).replace(",", ".")}`}
                    value={newValue}
                    type="number"
                    min="0"
                    onChange={(evt) => setNewValue(Number(evt.target.value))}
                  />
                </td>
                <td onClick={() => setIsValueChange(false)}>x</td>
              </>
            )}
          </tr>
          <tr>
            <th>Grupo</th>
            <td>
              <select onChange={(evt) => setNewGroup(evt.target.value)}>
                <option value={modalExpense.group}>{modalExpense.group}</option>
                {groups.map((group, index) => (
                  <option key={index} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          {/* <tr>
            <th>Sub-grupo</th>
            <td>{modalExpense.subgroup}</td>
          </tr> */}
          <tr>
            <th>Frequência</th>
            <td>{modalExpense.frequency}</td>
          </tr>
          <tr>
            <th>Data</th>
            <td>{modalExpense.date}</td>
          </tr>
        </table>
        <div className="buttons-container">
          <button className="update-button">Alterar</button>
          <button className="delete-button">Excluir</button>
        </div>
      </div>
    </ExpenseModalStyled>
  );
}

export default ExpenseModal;
