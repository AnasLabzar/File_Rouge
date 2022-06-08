import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import Banner from "../../partials/Banner";

function ListReview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const columns = [
    { field: "BookName", headerName: "Book Name", width: 170 },
    { field: "id", headerName: "ID", width: 70 },
    { field: "Rating", headerName: "Rating (*/10)", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { BookName : "E-book", id: 101, Rating: "6.5", firstName: "Jon", age: 35 },
    { BookName : "E-book", id: 2, Rating: "2", firstName: "Cersei", age: 42 },
    { BookName : "E-book", id: 98, Rating: "9.8", firstName: "Jaime", age: 45 },
    { BookName : "E-book", id: 123, Rating: "7.1", firstName: "Arya", age: 16 },
    { BookName : "E-book", id: 390, Rating: "8", firstName: "Daenerys", age: null },
    { BookName : "E-book", id: 108, Rating: "8.3", firstName: null, age: 150 },
    { BookName : "E-book", id: 15, Rating: "9", firstName: "Ferrara", age: 44 },
    { BookName : "E-book", id: 8, Rating: "6.7", firstName: "Rossini", age: 36 },
    { BookName : "E-book", id: 91, Rating: "-", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[6]}
                checkboxSelection
              />
            </div>
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
}

export default ListReview;
