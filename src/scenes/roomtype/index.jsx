import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import AddRoom from "./AddRoom";
import ViewRoom from "./ViewRoom";

const RoomType = () => {
  return (
    <Box
      m="20px"
      sx={{ height: "80vh", overflow: "hidden", overflowY: "scroll" }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Room Type" subtitle=" Add and Manage Room Type" />
      </Box>
      <Box>
        <AddRoom />
        <ViewRoom />
      </Box>
    </Box>
  );
};

export default RoomType;
