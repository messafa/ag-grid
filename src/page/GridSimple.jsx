import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
  themeAlpine,
  themeBalham,
} from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function GridSimple() {
  const data = [
    { first_name: "Mohammed", last_name: "messafa", age: 25, sex: "male" },
    { first_name: "Zakarya", last_name: "meddahi", age: 20, sex: "male" },
    { first_name: "Koussay", last_name: "messabih", age: 25, sex: "male" },
    { first_name: "djamal", last_name: "alaaa", age: 20, sex: "male" },
  ];

  const [rowData, setRowData] = React.useState(data);

  const [colDefs, setColDefs] = React.useState([
    {
      field: "first_name",
      headerName: "First Name",
      cellStyle: { background: "red" },
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

  const myTheme = themeQuartz.withParams({
    backgroundColor: "#3B3A3AFF",
    textColor: "#FFFAFAFF",
    // accent: '#FF0000',
    // textColor: '#000000',
    // headerHeight: '50px',
    // rowHeight: '50px',
    // rowEvenBackgroundColor: '#FF0000',
    // rowOddBackgroundColor: '#00FF00',
    // cellPadding: '10px',
    // cellHorizontalPadding: '5px',
    // cellVerticalPadding: '5px',
    // headerCellPadding: '10px',
    // headerCellHorizontalPadding: '5px',
    // headerCellVerticalPadding: '5px',
    // headerCellMinHeight: '50px',
    // headerCellMaxHeight: '50px',
    // headerCellTextSize: '20px',
    // headerCellTextWeight: 'bold',
    // headerCellTextFamily: 'Arial',
    // headerCellTextSlant: 'italic',
    // headerCellTextDecoration: 'underline',
    // headerCellTextAlign: 'center',
    // headerCellTextTransform: 'uppercase',
    // headerCellTextColor: '#0000FF',
    // headerCellTextBackgroundColor: '#FFFF00',
    // headerCellTextHorizontalPadding: '5px',
    // headerCellTextVerticalPadding: '5px',
    // headerCellTextLineHeight: '50px',
    // headerCellTextLetterSpacing: '2px',
    // headerCellTextIndent: '10px',
    // headerCellTextWordSpacing: '5px',
    // headerCellTextWrap: 'normal',
    // headerCellTextOverflow: 'clip',
    // headerCellTextWhiteSpace: 'nowrap',
    // headerCellTextTransform: 'uppercase',
    // headerCellTextAlign: 'center',
    // headerCellTextSlant: 'italic',
    // headerCellTextDecoration: 'underline',
    // headerCellTextAlign: 'center',
    // headerCellTextTransform: 'uppercase',
    // headerCellTextColor: '#0000FF',
    // headerCellTextBackgroundColor: '#FFFF00',
    // headerCellTextHorizontalPadding: '5px',
    // headerCellTextVerticalPadding: '5px',
    // headerCellTextLineHeight: '50px',
    // headerCellTextLetterSpacing: '2px',
    // headerCellTextIndent: '10px',
    // headerCellTextWordSpacing: '5px',
    // headerCellTextWrap: 'normal',
    // headerCellTextOverflow: 'clip',
  });

  return (
    <>
      <div>GridSimple</div>
      Search:{" "}
      <input
        type="text"
        onChange={(e) => {
          setQuickFilterText(e.target.value);
        }}
      />
      <div style={{ height: "500px" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 30]}
          paginationAutoPageSize={true}
          quickFilterText={quickFilterText}
        //   theme={themeQuartz}
          // theme={themeAlpine}
          // theme={themeBalham}
            theme={myTheme}
        />
      </div>
    </>
  );
}
