import { IconButton, Stack } from "@chakra-ui/react";
import { VscPinned } from "react-icons/vsc";
import React from "react";

export const RowPinningColumn = (PinnedRowIds, setPinnedRowIds) => {
  const handlePinRow = (params) => {
    const { node } = params;
    const rowId = node.data.id;

    const isPinned = PinnedRowIds.includes(rowId);
    if (isPinned) {
      const updatedPinnedRowIds = PinnedRowIds.filter((id) => id !== rowId);
      setPinnedRowIds(updatedPinnedRowIds);
    } else {
      setPinnedRowIds([...PinnedRowIds, rowId]);
    }
  };

  return {
    filter: false,
    sortable: false,
    width: 50,
    lockPosition: "left",
    cellClass: "locked-col",
    resizable: false,
    cellRenderer: (params) => (
      <Stack align={"center"} justify={"center"} w={"100%"} h={"100%"}>
        <IconButton
          cursor={"pointer"}
          fontSize={22}
          className="ag-grid-pin-button"
          onClick={() => handlePinRow(params)}
          variant={"ghost"}
          icon={<VscPinned />}
          opacity={
            PinnedRowIds.includes(params.node.data.id) 
              ? "1 !important"
              : 0
          }
        />
      </Stack>
    ),
  };
};
