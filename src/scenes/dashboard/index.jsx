import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box
      m="20px"
      sx={{ height: "80vh", overflow: "hidden", overflowY: "scroll" }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DASHBOARD"
          subtitle="Welcome to BOOK YOUR STAY Admin Dashboard"
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
