import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: "project_a",
  event: "page_view",
  breakdown: "city",
  fromDate: "2024-01-01",
  toDate: "2024-01-10",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload;
    },
    setEvent: (state, action) => {
      state.event = action.payload;
    },
    setBreakdown: (state, action) => {
      state.breakdown = action.payload;
    },
    setFromDate: (state, action) => {
      state.fromDate = action.payload;
    },
    setToDate: (state, action) => {
      state.toDate = action.payload;
    },
  },
});

export const {
  setProject,
  setEvent,
  setBreakdown,
  setFromDate,
  setToDate,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
