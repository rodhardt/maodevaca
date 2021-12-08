import { ExpenseModalStyled } from "./styles";
import { ExpenseData } from "../../../assets/types";
import { useState, useEffect } from "react";

import { useUserInfo } from "../../../providers/UserInfo";

import { BsPencilSquare, BsBackspace, BsFileEarmarkPlus } from "react-icons/bs";
import { HiSwitchVertical } from "react-icons/hi";

interface ExpenseModalProps {
  modalExpense: ExpenseData;
  closeModal: () => void;
}

function ExpenseModal({ modalExpense, closeModal }: ExpenseModalProps) {
  const { finances, updateFinances } = useUserInfo();

  const [newValue, setNewValue] = useState(modalExpense.value);
  const [newGroup, setNewGroup] = useState("");
  const [newDate, setNewDate] = useState("");

  const [isValueChange, setIsValueChange] = useState(false);

  const [isNewGroup, setIsNewGroup] = useState(false);
  const [groups, setGroups] = useState<string[]>([]);

  const [isDateChange, setIsDateChange] = useState(false);

  useEffect(() => {
    const groupsArray = finances.expenses.map((expense) => expense.group);
    setGroups(
      groupsArray.filter(
        (group, index) =>
          index === groupsArray.indexOf(group) && group !== modalExpense.group
      )
    );
  }, [finances]);

  const handleNewDate = (newDate: string) => {
    setNewDate(
      `${newDate.slice(8, 10)}/${newDate.slice(5, 7)}/${newDate.slice(0, 4)}`
    );
  };

  const deleteExpense = () => {
    const newFinances = {
      finances: {
        wage: finances.wage,
        expenses: finances.expenses.filter(
          (expense) => expense.id !== modalExpense.id
        ),
      },
    };
    updateFinances(newFinances);
  };

  const changeExpense = () => {
    const newExpense = {
      id: modalExpense.id,
      name: modalExpense.name,
      value: isValueChange ? newValue : modalExpense.value,
      group: newGroup === "" ? modalExpense.group : newGroup,
      subgroup: "",
      frequency: modalExpense.frequency,
      date: newDate === "" ? modalExpense.date : newDate,
    };

    updateFinances({
      finances: {
        wage: finances.wage,
        expenses: finances.expenses.map((expense) =>
          expense.id === newExpense.id ? newExpense : expense
        ),
      },
    });
  };

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
                <td className="new-value">
                  <input
                    placeholder={`R$ ${newValue.toFixed(2).replace(",", ".")}`}
                    value={newValue}
                    type="number"
                    min="0.00"
                    step="0.01"
                    onChange={(evt) => setNewValue(Number(evt.target.value))}
                  />
                </td>
                <td>
                  <BsBackspace
                    onClick={() => {
                      setIsValueChange(false);
                      setNewValue(modalExpense.value);
                    }}
                  />
                </td>
              </>
            )}
          </tr>
          <tr>
            <th>Grupo</th>
            {!isNewGroup ? (
              <>
                <td>
                  <select onChange={(evt) => setNewGroup(evt.target.value)}>
                    <option value={modalExpense.group}>
                      {modalExpense.group}
                    </option>
                    {groups.map((group, index) => (
                      <option key={index} value={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <BsFileEarmarkPlus onClick={() => setIsNewGroup(true)} />
                </td>
              </>
            ) : (
              <>
                <td className="new-group">
                  <input
                    placeholder="novo grupo"
                    value={newGroup}
                    onChange={(evt) => setNewGroup(evt.target.value)}
                  />
                </td>
                <td>
                  <HiSwitchVertical
                    onClick={() => {
                      setNewGroup("");
                      setIsNewGroup(false);
                    }}
                  />
                </td>
              </>
            )}
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
            {!isDateChange ? (
              <>
                <td>{modalExpense.date}</td>
                <td>
                  <BsPencilSquare onClick={() => setIsDateChange(true)} />
                </td>
              </>
            ) : (
              <>
                <td className="new-date">
                  <input
                    type="date"
                    onChange={(evt) => handleNewDate(evt.target.value)}
                  />
                </td>
                <td>
                  <HiSwitchVertical
                    onClick={() => {
                      setNewDate("");
                      setIsDateChange(false);
                    }}
                  />
                </td>
              </>
            )}
          </tr>
        </table>
        <div className="buttons-container">
          <button
            className="update-button"
            onClick={() => {
              changeExpense();
              closeModal();
            }}
          >
            Alterar
          </button>
          <button
            className="delete-button"
            onClick={() => {
              deleteExpense();
              closeModal();
            }}
          >
            Excluir
          </button>
        </div>
      </div>
    </ExpenseModalStyled>
  );
}

export default ExpenseModal;
