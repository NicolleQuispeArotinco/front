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
      },
      {
        id: nanoid(),
        name: "Aracely",
        last_name: "Arotinco",
        area: "T.I",
      },
      {
        id: nanoid(),
        name: "Fiorella",
        last_name: "Michelle",
        area: "T.I",
      },
      {
        id: nanoid(),
        name: "Bryan",
        last_name: "Davis",
        area: "T.I",
      },
    ],
  },
  reducers: {},
});

export default personalSlice.reducer;
