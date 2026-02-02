import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProject,
  setEvent,
  setBreakdown,
  setFromDate,
  setToDate,
} from "../store/dashboardSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const { project, event, breakdown, fromDate, toDate } = useSelector(
    (state) => state.dashboard
  );

  return (
    <div className="filter-container">
      <select value={project} onChange={(e) => dispatch(setProject(e.target.value))}>
        <option value="project_a">Project A</option>
        <option value="project_b">Project B</option>
        <option value="project_c">Project C</option>
      </select>

      <select value={event} onChange={(e) => dispatch(setEvent(e.target.value))}>
        <option value="page_view">Page View</option>
        <option value="signup">Signup</option>
        <option value="purchase">Purchase</option>
      </select>

      <select
        value={breakdown}
        onChange={(e) => dispatch(setBreakdown(e.target.value))}
      >
        <option value="city">City</option>
        <option value="device">Device</option>
        <option value="store">Store</option>
      </select>

      <input
        type="date"
        value={fromDate}
        onChange={(e) => dispatch(setFromDate(e.target.value))}
      />

      <input
        type="date"
        value={toDate}
        onChange={(e) => dispatch(setToDate(e.target.value))}
      />
    </div>
  );
};

export default React.memo(Filter);
