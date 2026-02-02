import Filter from "../components/Filter";
import Chart from "../components/Chart";
import TopTable from "../components/TopTable";
import ExportButton from "../components/ExportButton";
import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Filter />
        <div className="header-right">
          <ExportButton />
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-main">
        <Chart />
        <TopTable />
      </div>
    </div>
  );
};

export default Dashboard;
