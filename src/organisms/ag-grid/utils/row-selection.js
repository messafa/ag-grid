var checkboxSelection = function (params) {
  return params.api.getRowGroupColumns().length === 0;
};
var headerCheckboxSelection = function (params) {
  return params.api.getRowGroupColumns().length === 0;
};
export const SelectRowColumn = {
  filter:false,
  sortable: false,
  width:70,
  lockPosition: "left",
  cellClass: "locked-col",
  resizable: false,
  checkboxSelection: checkboxSelection,
  headerCheckboxSelection: headerCheckboxSelection,
};
