import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { WageData } from "../../assets/types/index";
import { ExpenseData } from "../../assets/types/index";

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderData {
  finances: { wage: WageData; expenses: ExpenseData[] };
  getUserInfo: () => void;
  currentExpenses: ExpenseData[];
  getCurrentExpenses: () => void;
  updateFinances: (newFinances: {
    finances: { wage: { value: number; day: number }; expenses: ExpenseData[] };
  }) => void;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProviderProps) => {
  let navigate = useNavigate();

  //   const [authToken, setAuthToken] = useState<string>(
  //     () => localStorage.getItem("@mao-de-vaca:token") || ""
  //   );

  //   const [userId, setUserId] = useState<string>(
  //     () => localStorage.getItem("@mao-de-vaca:id") || ""
  //   );

  const [finances, setFinances] = useState({
    wage: { value: 1000, day: 5 },
    expenses: [],
  });

  const [currentExpenses, setCurrentExpenses] = useState<ExpenseData[]>([]);

  const current = new Date();
  const today = { day: current.getDate(), month: current.getMonth() + 1 };

  const loginNeeded = () =>
    toast.warn("Você não está logado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const getUserInfo = () => {
    const authToken = localStorage.getItem("@mao-de-vaca:token") || "";
    const userId = localStorage.getItem("@mao-de-vaca:id") || "";
    api
      .get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        setFinances(response.data.finances);
      })
      .catch((err) => {
        loginNeeded();
        navigate("/");
        console.log(err);
      });
  };

  const getCurrentExpenses = () => {
    const nextMonth = today.month === 12 ? 1 : today.month + 1;
    const previousMonth = today.month === 1 ? 12 : today.month - 1;
    const filteredFinances = finances.expenses.filter(
      (expense: ExpenseData) => {
        const expenseDate = {
          day: Number(expense.date?.slice(0, 2)),
          month: Number(expense.date?.slice(3, 5)),
        };
        return today.day < finances.wage.day
          ? (expenseDate.day < finances.wage.day &&
              expenseDate.month === today.month) ||
              (expenseDate.day >= finances.wage.day &&
                expenseDate.month === previousMonth)
          : (expenseDate.day >= finances.wage.day &&
              expenseDate.month === today.month) ||
              (expenseDate.day < finances.wage.day &&
                expenseDate.month === nextMonth);
      }
    );
    setCurrentExpenses([...filteredFinances]);
  };

  const updateSucceeded = () =>
    toast.success("Atualização foi um sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const updateFailed = () =>
    toast.error("Ocorreu um erro", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const updateFinances = (newFinances: {
    finances: { wage: { value: number; day: number }; expenses: ExpenseData[] };
  }) => {
    const authToken = localStorage.getItem("@mao-de-vaca:token") || "";
    const userId = localStorage.getItem("@mao-de-vaca:id") || "";
    api
      .patch(`/users/${userId}`, newFinances, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        setFinances(response.data.finances);
        updateSucceeded();
      })
      .catch((err) => {
        console.log(err);
        updateFailed();
      });
  };

  return (
    <UserContext.Provider
      value={{
        finances,
        getUserInfo,
        currentExpenses,
        getCurrentExpenses,
        updateFinances,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserContext);
