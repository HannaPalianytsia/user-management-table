import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersOps";

const usersInitialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
        console.log(state.error);
        // state.error = payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
