import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import "./TopTable.css";

// mock Top-N generator
const generateTopData = (breakdown, event, project) => {
  const base =
    event === "page_view" ? 120 : event === "signup" ? 60 : 30;

  const suffix =
    breakdown === "city"
      ? ["Bangalore", "Mumbai", "Delhi", "Chennai", "Pune"]
      : breakdown === "device"
      ? ["Mobile", "Desktop", "Tablet"]
      : ["Store 1", "Store 2", "Store 3"];

  return suffix.map((name, i) => ({
    name,
    count: base - i * 10 + (project === "project_c" ? 15 : 0),
  }));
};

const TopTable = () => {
  const { breakdown, event, project } = useSelector(
    (state) => state.dashboard
  );

  const data = useMemo(
    () => generateTopData(breakdown, event, project),
    [breakdown, event, project]
  );

  return (
    <div className="table-card">
      <h3>Top {breakdown}</h3>

      <table>
        <thead>
          <tr>
            <th>{breakdown}</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(TopTable);
