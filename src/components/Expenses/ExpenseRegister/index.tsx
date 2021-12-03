import { ExpensesRegisterStyled } from "./styles";

import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { HiSwitchVertical } from "react-icons/hi";

function ExpensesRegister() {
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [groups, setGroups] = useState([
    "alimentação",
    "transporte",
    "aluguel",
  ]);

  const formSchema = yup.object().shape({
    name: yup.string().required("*"),
    value: yup.number().required("*"),
    date: yup.date().required("*"),
    group: yup.string().required("*"),
    frequency: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleForm = (data: any) => {
    console.log(data);
    const current = new Date(data.date);
    console.log(current.getDate());
  };

  return (
    <ExpensesRegisterStyled>
      <h2>Novo Gasto</h2>
      <form className="expense-form" onSubmit={handleSubmit(handleForm)}>
        <div className="input-container">
          <label>Nome</label>
          <input
            className={errors.name?.message ? "fail" : "input"}
            placeholder="nome do gasto"
            {...register("name")}
          />
        </div>

        <div className="input-container">
          <label>Valor</label>
          <input
            className={errors.value?.message ? "fail" : "input"}
            placeholder="R$ 100,00"
            type="number"
            min="0"
            step="1"
            {...register("value")}
          />
        </div>

        <div className="input-container">
          <label>Data</label>
          <input
            className={errors.date?.message ? "fail" : "input"}
            type="date"
            {...register("date")}
          />
        </div>

        <div className="input-container">
          {!isNewGroup ? (
            <>
              <label>Grupo</label>
              <select
                className={errors.group?.message ? "fail" : "input"}
                {...register("group")}
              >
                <option value="">--Selecione um grupo--</option>
                {groups.map((group, index) => (
                  <option key={index} value={group}>
                    {group}
                  </option>
                ))}
              </select>
              <div onClick={() => setIsNewGroup(true)}>Novo</div>
            </>
          ) : (
            <>
              <label>Novo Grupo</label>
              <input
                className={errors.group?.message ? "fail" : "input"}
                placeholder="Novo Grupo"
                {...register("group")}
              />
              <div onClick={() => setIsNewGroup(false)}>
                <HiSwitchVertical />
              </div>
            </>
          )}
        </div>

        <div className="input-container">
          <label>Frequência</label>
          <input
            type="radio"
            value="única"
            id="frequency"
            {...register("frequency")}
          />
          <label>Única</label>
          <input
            type="radio"
            value="diária"
            id="frequency"
            {...register("frequency")}
          />
          <label>Diária</label>
          <input
            type="radio"
            value="semanal"
            id="frequency"
            {...register("frequency")}
          />
          <label>Semanal</label>
          <input
            type="radio"
            value="mensal"
            id="frequency"
            {...register("frequency")}
          />
          <label>Mensal</label>
        </div>
        <button type="submit">Adicionar Gasto</button>
      </form>
    </ExpensesRegisterStyled>
  );
}

export default ExpensesRegister;
