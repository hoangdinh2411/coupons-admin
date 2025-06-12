"use client";
import GenericTable from "@/shared/components/Table";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useState, memo } from "react";

type TableCategoryPropsType = {
  rows?: any;
};
const DEFAULT_PAGE = 0;
const DEFAULT_LIMIT = 10;
function TableCategoryManagement({ rows }: TableCategoryPropsType) {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_LIMIT);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const columns: any[] = [
    { id: "id", label: "Id", minWidth: 170 },
    { id: "name", label: "Name", minWidth: 170 },
    {
      id: "image",
      label: "Image",
      minWidth: 100,
      render: (row: any) => (
        <Image
          src={row.image}
          alt={row.name}
          style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 4 }}
        />
      ),
    },
    {
      id: "action",
      label: "Action",
      minWidth: 120,
      align: "center" as const,
      render: (row: any) => (
        <>
          <button
            onClick={() => console.log("Edit", row)}
            className="text-blue-600 hover:text-blue-800"
          >
            <i className="ri-edit-2-line"></i>a
          </button>
          <button
            onClick={() => console.log("Delete", row)}
            className="text-red-600 hover:text-red-800"
          >
            <i className="ri-delete-bin-line"></i>a
          </button>
        </>
      ),
    },
  ];
  return (
    <GenericTable
      columns={columns}
      rows={rows}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default memo(TableCategoryManagement);
