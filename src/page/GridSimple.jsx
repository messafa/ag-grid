import React, { useMemo, useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "../organisms/ag-grid/AgTheme.css";

import { data } from "../data/data";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

export default function GridSimple() {
  const [rowData, setRowData] = useState(data);

  const [colDefs] = useState([
    { field: "first_name", headerName: "First Name", filter: true },
    { field: "last_name", headerName: "Last Name", filter: true },
    { field: "age", headerName: "Age", filter: true },
    { field: "sex", headerName: "Sex", filter: true },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
    resizable: true,
  }), []);

  const [quickFilterText, setQuickFilterText] = useState("");

  return (
    <div
      style={{
        backgroundColor: "#3B3A3AFF",
        color: "#FFFAFAFF",
        height: "100vh",
        padding: "2rem",
      }}
    >
      <h1 style={{ textAlign: "center" }}>GridSimple</h1>
      <div style={{ marginBottom: "1rem" }}>
        Search:{" "}
        <input
          type="text"
          onChange={(e) => setQuickFilterText(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "5px" }}
        />
      </div>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 30]}
          quickFilterText={quickFilterText}
        />
      </div>
    </div>
  );
}
