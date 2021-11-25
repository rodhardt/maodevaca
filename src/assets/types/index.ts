export interface WageData {
  value: number;
  day: number;
}

export interface ExpenseData {
  id?: number;
  name: string;
  value: number;
  group: string;
  subgroup?: string;
  frequency?: string;
  date?: string;
}

export interface UserData {
  id?: number;
  name: string;
  email: string;
  age: number;
  finances: {
    wage: WageData;
    expenses: ExpenseData[];
  };
}
