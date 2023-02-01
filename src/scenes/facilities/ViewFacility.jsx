import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { viewFacility } from "../../actions/facility";

const ViewFacility = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewFacility());
  }, [dispatch]);

  const facility = useSelector((state) => state.facility);
  console.log(facility);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "facility",
      headerName: "Facility Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      cellClassName: "name-column--cell",
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
          rows={facility}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default ViewFacility;
