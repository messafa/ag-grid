"use strict";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  forwardRef,
  memo,
} from "react";
import { Box, Flex, Stack, useColorMode } from "@chakra-ui/react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import "ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import "./AgTheme.css";
import { SearchInput } from "./utils/search-input";
import { RowPinningColumn } from "./utils/row-pining";
import { SelectRowColumn } from "./utils/row-selection";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

export const AgGridTable = memo(
  forwardRef(
    (
      {
        colDefs,
        rowData,
        enableRowSelectionCheckbox,
        enablePagination,
        defaultColDef,
        enableSearchBar,
        rowGroupPanelShow,
        onCellValueChanged,
        onSelectionChanged,
        rowSelection,
        rowHeight,
        headerHeight,
        autoSelectCriteria,
        groupDefaultExpanded,
        getRowHeight,
        getRowStyle,
        getRowClass,
        onRowSelected,
        onRowClicked,
        onCellEditingStarted,
        onCellEditingStopped,
        pinnedTopRowData,
        enableRowPinning,
        enableSimpleSearchBar,
        rowDragEntireRow,
        rowDragManaged,
        onGridReady,
        gridOptions,
        suppressRowClickSelection,
        UnitGearButton,
        EventGearButton,
        EventFilterBadge,
        UnitFilterBadge,
      },
      ref
    ) => {
      const gridRef = useRef();
      const { colorMode } = useColorMode();
      const [PinnedRowIds, setPinnedRowIds] = useState([]);

      const sortedRowData = useMemo(() => {
        if (rowData) {
          const pinnedRowData = rowData.filter((row) => PinnedRowIds.includes(row.id));
          const unpinnedRowData = rowData.filter((row) => !PinnedRowIds.includes(row.id));
          return [...pinnedRowData, ...unpinnedRowData];
        }
        return [];
      }, [rowData, PinnedRowIds]);

      const colDefsWithRowPinning = useMemo(() => {
        return [RowPinningColumn(PinnedRowIds, setPinnedRowIds), ...colDefs];
      }, [PinnedRowIds, colDefs]);

      const colDefsWithCheckboxSelection = useMemo(() => {
        return [SelectRowColumn, ...colDefs];
      }, [colDefs]);

      useEffect(() => {
        if (autoSelectCriteria && gridRef.current?.api) {
          const { columnId, value } = autoSelectCriteria;
          gridRef.current.api.forEachNode((node) => {
            const isSelected = node.data[columnId] === value;
            node.setSelected(isSelected);
          });
        }
      }, [autoSelectCriteria, sortedRowData]);

      useEffect(() => {
        if (ref) {
          ref.current = gridRef.current;
        }
      }, [ref]);

      return (
        <Stack spacing={1} w={"100%"} h={"100%"}>
          <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
            <Flex flex={"1 1 0%"} overflow={"auto"} alignItems={"center"} gap={2}>
              {enableSearchBar && <SearchInput gridRef={gridRef} />}
              {enableSimpleSearchBar && <SearchInput simple={true} gridRef={gridRef} />}
              {EventFilterBadge}
              {UnitFilterBadge}
            </Flex>
            {UnitGearButton}
            {EventGearButton}
          </Flex>
          <Box
            className={`ag-theme-${colorMode === "light" ? "quartz" : "quartz-dark"}`}
            w={"100%"}
            h={"100%"}
          >
            <AgGridReact
              ref={gridRef}
              rowData={sortedRowData}
              columnDefs={
                enableRowPinning
                  ? colDefsWithRowPinning
                  : enableRowSelectionCheckbox
                    ? colDefsWithCheckboxSelection
                    : colDefs
              }
              defaultColDef={defaultColDef}
              suppressRowClickSelection={suppressRowClickSelection || false}
              groupSelectsChildren={true}
              multiSortKey={"ctrl"}
              rowSelection={rowSelection || "single"}
              rowGroupPanelShow={rowGroupPanelShow === "auto" ? "never" : rowGroupPanelShow}
              rowMultiSelectWithClick={false}
              pagination={enablePagination}
              groupDisplayType={"groupRows"}
              onSelectionChanged={onSelectionChanged}
              onCellValueChanged={onCellValueChanged}
              rowHeight={rowHeight}
              headerHeight={headerHeight}
              groupDefaultExpanded={groupDefaultExpanded}
              getRowHeight={getRowHeight}
              getRowStyle={getRowStyle}
              getRowClass={getRowClass}
              onRowSelected={onRowSelected}
              onRowClicked={onRowClicked}
              onCellEditingStarted={onCellEditingStarted}
              onCellEditingStopped={onCellEditingStopped}
              singleClickEdit={true}
              animateRows={false}
              pinnedTopRowData={pinnedTopRowData}
              suppressDragLeaveHidesColumns={true}
              rowDragEntireRow={rowDragEntireRow}
              rowDragManaged={rowDragManaged}
              onGridReady={onGridReady}
              gridOptions={gridOptions}
              getRowId={(params) => params.data.id}
            />
          </Box>
        </Stack>
      );
    }
  )
);