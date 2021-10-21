import logo from './logo.svg';
// import './App.css';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const column = [
  {
  checkboxSelection: true,
   
    width: 50
    },  
    {headerName: "S.No",
    field: "id",
    sortable: true,
    width: 100
    },  {headerName: "Clint Id",
    field: "clintid",
    sortable: true,
    width: 100
    },
    {headerName: "Name",
    field: "name",
    sortable: true,
    width: 140
    }, {headerName: "Email",
    field: "emailid",
    sortable: true,
    width: 125
    }, {headerName: "Phone Number",
    field: "phoneno",
    sortable: true,
    width: 115
  },
  {headerName: "Brand Name",
    field: "brandname",
    sortable: true,
    width: 115
  },
  {headerName: "Status",
    field: "status",
    sortable: true,
    width: 115
  },
  {headerName: "Validate / Decline",
    field: "validate",
    sortable: true,
    width: 115
  },
  {headerName: "Store Info",
    field: "validate",
    sortable: true,
    width: 115
  }
]

const rowData=[
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
]
const defaultcolumnDefs = {
  sortable: true,
  filter: true,
  check: true,
  editable: true,
  enableRowSelection: true,
  resizable: true,
}
const defaultcolumnDefs_sub = {
  sortable: true,
  filter: true,
  check: true,
  editable: false,
  enableRowSelection: true,
  resizable: true,
}
const paginationPageSize= 50
const quickFilterText= null
const onQuickFilterText1 = null
// const frameworkComponents= { partialMatchFilter: PartialMatchFilter }

function Table() {
  return (
<>     
    <div className="container mt-5">
     <input type="text" className="m-2 text-right" id="quickFilter" style={{width: 185, height: 40}} placeholder="Type text to filter across columns"/>
     </div>
     
     <div
                        style={{ height: "500px", }}
                        className="ag-theme-balham text-center container mt-2"
                    >                    <AgGridReact
                      // onGridReady={params => (this.gridassessed_sub = params.api)}
                      columnDefs={column}
                      rowData={rowData}
                      animateRows={true}
                      pagination={true}
                      paginationPageSize={paginationPageSize}
                      defaultColDef={defaultcolumnDefs}
                      // quickFilterText={quickFilterText1}
                      floatingFilter={true}
                      // onModelUpdated={this.calculateRowCount}
                      // frameworkComponents={frameworkComponents}
                      paginationPageSize = {50}
                    />
                  </div>
    </>
  );
}

export default Table;
