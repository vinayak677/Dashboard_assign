import { useSelector } from "react-redux";
import { downloadCSV } from "../utils/csv";
import "./ExportButton.css";

// must match TopTable logic
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
    [breakdown]: name,
    count: base - i * 10 + (project === "project_c" ? 15 : 0),
  }));
};

const ExportButton = () => {
  const { breakdown, event, project, fromDate, toDate } = useSelector(
    (state) => state.dashboard
  );

  const handleExport = () => {
    const data = generateTopData(breakdown, event, project);

    const filename = `top_${breakdown}_${event}_${fromDate}_${toDate}.csv`;

    downloadCSV(data, filename);
  };

  return (
    <button className="export-btn" onClick={handleExport}>
      Export CSV
    </button>
  );
};

export default ExportButton;
