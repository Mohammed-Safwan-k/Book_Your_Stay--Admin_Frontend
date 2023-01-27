import { Box } from "@mui/material";
import Header from "../../components/Header";
import AddCoupon from "./AddCoupon";
import ViewCoupon from "./ViewCoupon";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="COUPON"
          subtitle="View & Manage Coupons"
        />
      </Box>
        <Box >
          <AddCoupon />
          <ViewCoupon />
        </Box>
    </Box>
  );
};

export default Dashboard;
