import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateProps {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: InitialStateProps = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, payload: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = payload.payload;
    },
    setIsDarkMode: (state, payload: PayloadAction<boolean>) => {
      state.isDarkMode = payload.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
