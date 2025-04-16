import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { data } from "../data/data";
import './ag-theme.css'
import { useColorMode } from "@chakra-ui/react";
ModuleRegistry.registerModules([AllCommunityModule]);

export default function GridSimple() {
  const [rowData, setRowData] = React.useState(data);

  const [colDefs, setColDefs] = React.useState([
    {
      field: "first_name",
      headerName: "First Name",
      //   cellStyle: { background: "red" },
      filter: true,
    },
    { field: "last_name", headerName: "Last Name", filter: true },
    { field: "age", headerName: "Age", filter: true },
    { field: "sex", headerName: "SEX", filter: true },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);

  const [quickFilterText, setQuickFilterText] = React.useState(null);
  const { colorMode } = useColorMode();

  const myTheme = themeQuartz.withParams({
    backgroundColor: colorMode === "light" ?"#ebebeb":"#141414",
    oddRowBackgroundColor:colorMode === "light" ?"#ebebeb": "#141414",
    rowHoverColor: colorMode === "light" ?"#f5f5f5":"#111111",
    selectedRowBackgroundColor: colorMode === "light" ?"#b8d1f2":"#2d3743",
    borderColor: colorMode === "light" ?"#ffffff":"#000000",
    // headerBackgroundColor: colorMode === "light" ?"#141414":"#141414",
    rangeSelectionBorderStyle: "none",

    wrapperBorderRadius: 0,
    textColor:colorMode === "light" ? "#000":"#fff",
  });

  return (
    <>
      <div
      // style={{
      //   backgroundColor: "#3B3A3AFF",
      //   color: "#FFFAFAFF",
      //   height: "100vh",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      >
        <h1 style={{ justifyContent: "center" }}>GridSimple</h1>
        <dev>
          Search:{" "}
          <input
            type="text"
            onChange={(e) => {
              setQuickFilterText(e.target.value);
            }}
          />
        </dev>
        <div style={{ height: "500px" }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 20, 30]}
            rowSelection={"single"}
            
            // paginationAutoPageSize={true}
            quickFilterText={quickFilterText}
            theme={myTheme}
          />
        </div>
      </div>
    </>
  );
}
