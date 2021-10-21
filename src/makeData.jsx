import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'


var datas=[
  {id:1,clintid:91,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:2,clintid:100,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:3,clintid:101,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:4,clintid:90,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:5,clintid:92,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:6,clintid:93,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:7,clintid:94,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:8,clintid:95,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:9,clintid:96,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:10,clintid:97,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:11,clintid:98,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:12,clintid:99,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:13,clintid:102,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:14,clintid:103,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:15,clintid:104,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:16,clintid:105,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:17,clintid:80,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:18,clintid:81,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:19,clintid:82,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  {id:20,clintid:83,name:"chennai",emailid:"testing@gmail.com",phoneno:"989767895",brandname:"nykan",status:"Pending",validate:"validate"},
  
]

if(JSON.parse(sessionStorage.getItem("updateddata") == null)){
sessionStorage.setItem("updateddata",JSON.stringify(datas))
}

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`
function App() {

  var loadData = JSON.parse(sessionStorage.getItem("updateddata"))
  console.log("loaddataa",loadData)
  const [data, setRowdata] = useState(loadData)
  const [searchInput,setSearchInput] = useState("")

  const columns =[
      {
        Header: 'Client Details',
        columns: [
          {
            Header: 'S.No',
            accessor: 'id',
          },
          {
            Header: 'Clint ID',
            accessor: 'clintid',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Email',
            accessor: 'emailid',
          },
          {
            Header: 'Phone Number',
            accessor: 'phoneno',
          },
          {
            Header: 'Brand Name',
            accessor: 'brandname',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
        ],
      },
      {
        Header: 'Action',
        columns: [
          {
            Header: 'Store Info',
            accessor: 'age',
          },
        ],
      },
    ]
    

  // const data = React.useMemo(() => makeData(100000), [])
  // const data = rowData

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, 
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  const validating =(i)=>{
    console.log("validating functions",i)
   let objIndex = data.findIndex((obj => obj.id == i));
    console.log("objindex", objIndex)
    data[objIndex].status = "Confirmed"
    console.log("dataa==",data)
    setRowdata(data)
    sessionStorage.setItem("updateddata",JSON.stringify(data))
    window.location.reload()
  }

  const declineing =(i)=>{
    console.log("declineing functions",i)
    let objIndex = data.findIndex((obj => obj.id == i));
    console.log("objindex", objIndex)
    data[objIndex].status = "Declined"
    console.log("dataa==",data)
    setRowdata(data)
    sessionStorage.setItem("updateddata",JSON.stringify(data))
    window.location.reload()
  }
  
  const searchChange = event => {
    console.log(event.target.value,"====",)
    let filteredData = data.filter(value => {
      return (
          value.status == searchInput 
      )
      // this.setState({ filteredData });
  });
  console.log("filteredData==",filteredData)
  };

  const globalSearch = e => {
    e.preventDefault();
     const { name, value } = e.target;
    const searchtext = e.target.value
     console.log("event.target.value",searchInput)
    //  setSearchInput({[name]:value})
  }
  console.log("dataaaa===", data)

  return (
    <Styles className="container">
  
  <input
      value={searchInput || ""}
      // onChange={globalSearch}
      placeholder={`Search`}
    />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column,i) => (<>
                <th {...column.getHeaderProps()}>{column.render('Header')}
                </th>
                </>
              ))}
              {headerGroup.headers.map((column,i) => (
                <>
                {i == 0?
                <th>Validate / Decline</th>
                :null}
                </>
              ))}
              
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                <tr><span style={{backgroundColor:"green",color:"white",cursor:"pointer"}} onClick={()=>validating(row.original.id)}>Validate</span>
                <span style={{backgroundColor:"red",color:"white",cursor:"pointer"}} onClick={()=>declineing(row.original.id)}> Decline</span></tr>
              </tr>
            )
          })}
        </tbody>
     
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    
       {/* <Table columns={columns} data={data} /> */}
    </Styles>
  )
}

export default App
