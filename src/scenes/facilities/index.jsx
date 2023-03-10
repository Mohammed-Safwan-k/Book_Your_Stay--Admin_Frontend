import { Box } from "@mui/material";
import Header from "../../components/Header";
import AddFacility from "./AddFacility";
import ViewFacility from "./ViewFacility";

const Dashboard = () => {
  return (
    <Box
      m="20px"
      sx={{ height: "80vh", overflow: "hidden", overflowY: "scroll" }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Facilities" subtitle=" Add and Manage Facilities" />
      </Box>
      <Box>
        <AddFacility />
        <ViewFacility />
      </Box>
    </Box>
  );
};

export default Dashboard;
