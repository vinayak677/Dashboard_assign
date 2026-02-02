import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import React,{ useMemo } from "react";
import "./Chart.css";

const generateChartData = (project, event, fromDate, toDate) => {
  const base =
    event === "page_view" ? 100 : event === "signup" ? 50 : 20;

  return Array.from({ length: 10 }).map((_, i) => ({
    date: `Day ${i + 1}`,
    count:
      base +
      i * 5 +
      (project === "project_b" ? 20 : project === "project_c" ? 40 : 0),
  }));
};

const Chart = () => {
  const { project, event, fromDate, toDate } = useSelector(
    (state) => state.dashboard
  );

  const data = useMemo(
    () => generateChartData(project, event, fromDate, toDate),
    [project, event, fromDate, toDate]
  );

  return (
    <div className="chart-card">
      <h3>{event.replace("_", " ")} over time</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#2563eb"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(Chart);
