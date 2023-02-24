import { createSlice } from '@reduxjs/toolkit';

type UIProps = {
  loading: boolean;
};

const initialUIState: UIProps = {
  loading: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    loadingStart: (state) => {
      state.loading = true;
    },
    loadingEnd: (state) => {
      state.loading = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
