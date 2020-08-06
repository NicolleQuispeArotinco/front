import { createSlice, nanoid } from "@reduxjs/toolkit";

const personalSlice = createSlice({
  name: "personal",
  initialState: {
    employees: [
      {
        id: nanoid(),
        name: "Nicolle",
        last_name: "Quispe",
        area: "T.I",
        years: "10",
      },
      {
        id: nanoid(),
        name: "Aracely",
        last_name: "Arotinco",
        area: "T.I",
        years: "10",
      },
      {
        id: nanoid(),
        name: "Fiorella",
        last_name: "Michelle",
        area: "T.I",
        years: "10",
      },
      {
        id: nanoid(),
        name: "Bryan",
        last_name: "Davis",
        area: "T.I",
        years: "10",
      },
    ],
  },
  reducers: {
    addEmployee: {
      reducer: (personal, action) => {
        personal.employees.push(action.payload);
      },
      prepare: (name, last_name, area, years) => {
        return {
          payload: {
            id: nanoid(),
            name,
            last_name,
            area,
            years,
          },
        };
      },
    },
    deleteEmployee: (personal, action) => {
      const indexDelete = personal.employees.findIndex(
        (employee) => employee.id === action.payload
      );
      if (indexDelete !== -1) personal.employees.splice(indexDelete, 1);
    },
  },
});

export const { addEmployee, deleteEmployee } = personalSlice.actions;

export default personalSlice.reducer;
