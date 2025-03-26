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
    { first_name: "Mahfoud", last_name: "Messafa", age: 25, sex: "male" },
    { first_name: "Zakarya", last_name: "Meddahi", age: 20, sex: "male" },
    { first_name: "Koussay", last_name: "Messabih", age: 25, sex: "male" },
    { first_name: "Djamal", last_name: "Alaaa", age: 20, sex: "male" },
    { first_name: "Aicha", last_name: "Djaarir", age: "26", sex: "female" },
    { first_name: "Fatima", last_name: "Boubekeur", age: 22, sex: "female" },
    { first_name: "Ahmed", last_name: "Belkacem", age: 30, sex: "male" },
    { first_name: "Yasmine", last_name: "Kadri", age: 28, sex: "female" },
    { first_name: "Karim", last_name: "Bouziane", age: 35, sex: "male" },
    { first_name: "Nadia", last_name: "Saadi", age: 27, sex: "female" },
    { first_name: "Samir", last_name: "Hamoud", age: 40, sex: "male" },
    { first_name: "Leila", last_name: "Bensalem", age: 32, sex: "female" },
    { first_name: "Adel", last_name: "Mansouri", age: 29, sex: "male" },
    { first_name: "Soraya", last_name: "Chaoui", age: 24, sex: "female" },
    { first_name: "Bilal", last_name: "Taleb", age: 26, sex: "male" },
    { first_name: "Hakim", last_name: "Zerrouki", age: 33, sex: "male" },
    { first_name: "Amel", last_name: "Boukhatem", age: 31, sex: "female" },
    { first_name: "Rachid", last_name: "Guerfi", age: 45, sex: "male" },
    { first_name: "Salima", last_name: "Benali", age: 23, sex: "female" },
    { first_name: "Tarek", last_name: "Mammeri", age: 38, sex: "male" },
    { first_name: "Nassima", last_name: "Dahmani", age: 29, sex: "female" },
    { first_name: "Farid", last_name: "Khellaf", age: 42, sex: "male" },
    { first_name: "Dalia", last_name: "Bouchenak", age: 26, sex: "female" },
    { first_name: "Walid", last_name: "Bensaad", age: 34, sex: "male" },
    { first_name: "Samira", last_name: "Meziane", age: 28, sex: "female" },
    { first_name: "Reda", last_name: "Benyahia", age: 31, sex: "male" },
    { first_name: "Younes", last_name: "Bouguerra", age: 27, sex: "male" },
    { first_name: "Houda", last_name: "Bentaleb", age: 24, sex: "female" },
    { first_name: "Abdelkader", last_name: "Boudiaf", age: 50, sex: "male" },
    { first_name: "Sabrina", last_name: "Boukortt", age: 22, sex: "female" },
    { first_name: "Ismail", last_name: "Boukhari", age: 36, sex: "male" },
    { first_name: "Malika", last_name: "Benamar", age: 29, sex: "female" },
    { first_name: "Nabil", last_name: "Chaib", age: 33, sex: "male" },
    { first_name: "Rym", last_name: "Bensaid", age: 25, sex: "female" },
    { first_name: "Said", last_name: "Bouaziz", age: 41, sex: "male" },
    { first_name: "Nawel", last_name: "Benslimane", age: 30, sex: "female" },
    { first_name: "Mourad", last_name: "Bensmail", age: 39, sex: "male" },
    { first_name: "Hafsa", last_name: "Bouhali", age: 26, sex: "female" },
    { first_name: "Khaled", last_name: "Bouchene", age: 44, sex: "male" },
    { first_name: "Souad", last_name: "Benabid", age: 32, sex: "female" },
    { first_name: "Ali", last_name: "Boukhalfa", age: 37, sex: "male" },
    { first_name: "Fella", last_name: "Bendjama", age: 28, sex: "female" },
    {
      first_name: "Abderrahmane",
      last_name: "Benyettou",
      age: 52,
      sex: "male",
    },
    { first_name: "Djamila", last_name: "Bensmain", age: 45, sex: "female" },
    { first_name: "Mustapha", last_name: "Bouhadda", age: 48, sex: "male" },
    { first_name: "Zahra", last_name: "Benmoussa", age: 33, sex: "female" },
    { first_name: "Hocine", last_name: "Bouhenni", age: 40, sex: "male" },
    { first_name: "Nora", last_name: "Bensaber", age: 27, sex: "female" },
    { first_name: "Lyes", last_name: "Bouguetaia", age: 31, sex: "male" },
    { first_name: "Assia", last_name: "Benaceur", age: 29, sex: "female" },
    { first_name: "Fares", last_name: "Boudehane", age: 35, sex: "male" },
    { first_name: "Chahinez", last_name: "Benarbia", age: 24, sex: "female" },
    { first_name: "Mehdi", last_name: "Bouchema", age: 32, sex: "male" },
    { first_name: "Meriem", last_name: "Bensari", age: 26, sex: "female" },
    { first_name: "Abdelaziz", last_name: "Boukhobza", age: 55, sex: "male" },
    { first_name: "Hayat", last_name: "Bensmina", age: 30, sex: "female" },
    { first_name: "Slimane", last_name: "Bouhafs", age: 42, sex: "male" },
    { first_name: "Fadila", last_name: "Benallal", age: 38, sex: "female" },
    { first_name: "Djamel", last_name: "Bouakkaz", age: 47, sex: "male" },
    { first_name: "Nacera", last_name: "Bensouilah", age: 36, sex: "female" },
    { first_name: "Riad", last_name: "Bouhadi", age: 39, sex: "male" },
    { first_name: "Selma", last_name: "Benhadj", age: 28, sex: "female" },
    { first_name: "Amine", last_name: "Bouchemaa", age: 31, sex: "male" },
    { first_name: "Karima", last_name: "Bensalem", age: 34, sex: "female" },
    { first_name: "Kamal", last_name: "Bouhadi", age: 43, sex: "male" },
    { first_name: "Yousra", last_name: "Benmahdi", age: 27, sex: "female" },
    { first_name: "Nadir", last_name: "Bouhenia", age: 38, sex: "male" },
    { first_name: "Samia", last_name: "Benslimane", age: 32, sex: "female" },
    { first_name: "Fouad", last_name: "Boukortt", age: 45, sex: "male" },
    { first_name: "Hania", last_name: "Benabbou", age: 29, sex: "female" },
    { first_name: "Salah", last_name: "Bouchema", age: 50, sex: "male" },
    { first_name: "Dounia", last_name: "Bensaid", age: 26, sex: "female" },
    { first_name: "Abdelhamid", last_name: "Boukhari", age: 53, sex: "male" },
    { first_name: "Rachida", last_name: "Benamar", age: 40, sex: "female" },
    { first_name: "Mokhtar", last_name: "Bouhafsi", age: 48, sex: "male" },
    { first_name: "Nabila", last_name: "Bensassi", age: 35, sex: "female" },
    { first_name: "Hamza", last_name: "Boukella", age: 32, sex: "male" },
    { first_name: "Siham", last_name: "Benkhelifa", age: 28, sex: "female" },
    { first_name: "Brahim", last_name: "Bouazza", age: 44, sex: "male" },
    { first_name: "Fella", last_name: "Bensmaine", age: 31, sex: "female" },
    { first_name: "Anis", last_name: "Boukhari", age: 36, sex: "male" },
    { first_name: "Zineb", last_name: "Benabdesselam", age: 27, sex: "female" },
    { first_name: "Abdelkrim", last_name: "Bouhadi", age: 49, sex: "male" },
    { first_name: "Keltoum", last_name: "Bensari", age: 42, sex: "female" },
    { first_name: "Tayeb", last_name: "Bouchema", age: 51, sex: "male" },
    { first_name: "Houria", last_name: "Benali", age: 37, sex: "female" },
    { first_name: "Sid Ahmed", last_name: "Bouhafs", age: 46, sex: "male" },
    { first_name: "Nassira", last_name: "Benslimane", age: 33, sex: "female" },
    { first_name: "Aymen", last_name: "Boukhalfa", age: 34, sex: "male" },
    { first_name: "Fadila", last_name: "Benbouzid", age: 29, sex: "female" },
    { first_name: "Mohand", last_name: "Bouhadi", age: 47, sex: "male" },
    { first_name: "Yamina", last_name: "Bensalah", age: 41, sex: "female" },
    { first_name: "Rabah", last_name: "Boukortt", age: 50, sex: "male" },
    { first_name: "Saida", last_name: "Benkhedda", age: 36, sex: "female" },
    { first_name: "Moussa", last_name: "Bouchema", age: 43, sex: "male" },
    { first_name: "Malek", last_name: "Bensari", age: 30, sex: "female" },
    { first_name: "Abdelghani", last_name: "Bouhadi", age: 52, sex: "male" },
    { first_name: "Noria", last_name: "Benabbou", age: 38, sex: "female" },
    { first_name: "Sofiane", last_name: "Boukortt", age: 35, sex: "male" },
    { first_name: "Djahida", last_name: "Benslimane", age: 31, sex: "female" },
    { first_name: "Aziz", last_name: "Bouhafs", age: 44, sex: "male" },
    { first_name: "Fella", last_name: "Benamar", age: 28, sex: "female" },
    { first_name: "Nassim", last_name: "Bouchema", age: 33, sex: "male" },
    { first_name: "Selima", last_name: "Bensaid", age: 26, sex: "female" },
    { first_name: "Hamid", last_name: "Bouhadi", age: 48, sex: "male" },
    { first_name: "Khadidja", last_name: "Benali", age: 42, sex: "female" },
    { first_name: "Adel", last_name: "Boukortt", age: 37, sex: "male" },
    { first_name: "Nacima", last_name: "Benslimane", age: 32, sex: "female" },
    { first_name: "Abdelouahab", last_name: "Bouhafs", age: 51, sex: "male" },
    { first_name: "Samya", last_name: "Benamar", age: 29, sex: "female" },
    { first_name: "Fethi", last_name: "Bouchema", age: 45, sex: "male" },
    { first_name: "Yasmina", last_name: "Bensari", age: 34, sex: "female" },
    { first_name: "Miloud", last_name: "Bouhadi", age: 49, sex: "male" },
    { first_name: "Dalia", last_name: "Benabbou", age: 30, sex: "female" },
    { first_name: "Nasser", last_name: "Boukortt", age: 42, sex: "male" },
    { first_name: "Fouzia", last_name: "Benslimane", age: 36, sex: "female" },
    { first_name: "Abdelmalek", last_name: "Bouhafs", age: 53, sex: "male" },
    { first_name: "Naima", last_name: "Benali", age: 40, sex: "female" },
    { first_name: "Salah", last_name: "Bouchema", age: 47, sex: "male" },
    { first_name: "Souhila", last_name: "Bensaid", age: 33, sex: "female" },
    { first_name: "Mourad", last_name: "Bouhadi", age: 44, sex: "male" },
    { first_name: "Zahia", last_name: "Benamar", age: 31, sex: "female" },
    { first_name: "Abdelatif", last_name: "Boukortt", age: 50, sex: "male" },
    { first_name: "Nabila", last_name: "Benslimane", age: 37, sex: "female" },
    { first_name: "Hassen", last_name: "Bouhafs", age: 46, sex: "male" },
    { first_name: "Farida", last_name: "Benali", age: 41, sex: "female" },
    { first_name: "Abderrezak", last_name: "Bouchema", age: 52, sex: "male" },
    { first_name: "Malika", last_name: "Bensari", age: 38, sex: "female" },
    { first_name: "Abdelhak", last_name: "Bouhadi", age: 49, sex: "male" },
    { first_name: "Nawel", last_name: "Benabbou", age: 32, sex: "female" },
    { first_name: "Sid Ali", last_name: "Boukortt", age: 45, sex: "male" },
    { first_name: "Djamila", last_name: "Benslimane", age: 39, sex: "female" },
    { first_name: "Abdelkader", last_name: "Bouhafs", age: 54, sex: "male" },
    { first_name: "Yasmina", last_name: "Benamar", age: 35, sex: "female" },
    { first_name: "Abdelmadjid", last_name: "Bouchema", age: 51, sex: "male" },
    { first_name: "Samira", last_name: "Bensaid", age: 40, sex: "female" },
    { first_name: "Abdelghani", last_name: "Bouhadi", age: 48, sex: "male" },
    { first_name: "Fatma", last_name: "Benali", age: 42, sex: "female" },
    { first_name: "Abdelaziz", last_name: "Boukortt", age: 55, sex: "male" },
    { first_name: "Nacera", last_name: "Benslimane", age: 37, sex: "female" },
    { first_name: "Abdelhamid", last_name: "Bouhafs", age: 53, sex: "male" },
    { first_name: "Zahra", last_name: "Benamar", age: 36, sex: "female" },
    { first_name: "Abdelmalek", last_name: "Bouchema", age: 50, sex: "male" },
    { first_name: "Fella", last_name: "Bensari", age: 33, sex: "female" },
    { first_name: "Abdelatif", last_name: "Bouhadi", age: 49, sex: "male" },
    { first_name: "Noria", last_name: "Benabbou", age: 38, sex: "female" },
    { first_name: "Abdelkrim", last_name: "Boukortt", age: 52, sex: "male" },
    { first_name: "Djahida", last_name: "Benslimane", age: 41, sex: "female" },
    { first_name: "Abdelouahab", last_name: "Bouhafs", age: 54, sex: "male" },
    { first_name: "Samya", last_name: "Benali", age: 39, sex: "female" },
    { first_name: "Abdelghani", last_name: "Bouchema", age: 48, sex: "male" },
    { first_name: "Yasmina", last_name: "Bensaid", age: 34, sex: "female" },
    { first_name: "Abdelhak", last_name: "Bouhadi", age: 47, sex: "male" },
    { first_name: "Nabila", last_name: "Benamar", age: 36, sex: "female" },
  ];

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

  const myTheme = themeQuartz.withParams({
    backgroundColor: "#3B3A3AFF",
    textColor: "#FFFAFAFF",
    rowHoverColor: "#002FFFFF",
    inputTextColor: "#FFFAFAFF",
    tabTextColor: "#FFFAFAFF",
    tabSelectedTextColor: "#FFFAFAFF",
    tabBorderColor: "#FFFAFAFF",
    headerTextColor: "#FFFAFAFF",
    menuTextColor: "#FFFAFAFF",
    borderColor: "#1816AAFF",
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
      <div
        style={{
          backgroundColor: "#3B3A3AFF",
          color: "#FFFAFAFF",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
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
            // paginationAutoPageSize={true}
            quickFilterText={quickFilterText}
            theme={myTheme}
          />
        </div>
      </div>
    </>
  );
}
