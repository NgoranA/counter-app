import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeColor = "light" | "dark";
export interface Theme {
  mode: ThemeColor;
  value: boolean | undefined;
}

const initialState: Theme = {
  mode: "light",
  value: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchMode: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload.mode;
      state.value = action.payload.value;

      const themeLink: HTMLElement | null =
        document.getElementById("app-theme");
      if (action.payload.mode === "dark" && themeLink) {
        themeLink.setAttribute("href", "/themes/lara-dark-blue/theme.css");
      } else {
        if (themeLink) {
          themeLink.setAttribute("href", "/themes/lara-light-blue/theme.css");
        }
      }
    },
  },
});

export const { switchMode } = themeSlice.actions;
export default themeSlice.reducer;
