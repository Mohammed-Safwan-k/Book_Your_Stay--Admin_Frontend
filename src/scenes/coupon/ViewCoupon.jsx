import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useSelector } from "react-redux";

const ViewCoupon = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const coupon = useSelector((state) => state.coupon);
  console.log(coupon);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "couponName",
      headerName: "Coupon Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "couponCode",
      headerName: "Coupon Code",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "amount",
      headerName: "Discount Amount",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={coupon}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default ViewCoupon;
