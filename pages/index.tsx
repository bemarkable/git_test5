import * as React from 'react';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function App() {
  return (

    <div style={{ height: 'auto', width: '100%' }}>
      
      <DataGrid rows={rows} columns={columns} />
      <br />
      <button style={{}}>기본버튼</button>
      <button style={{marginLeft:"10px;",marginTop:"30px;",backgroundColor:"blue;",color:"white;",border:'0'}}>기본버튼</button>
      <button style={{marginLeft:"10px;",backgroundColor:"white;",border:'1'}}>기본버튼</button>
      <button style={{marginLeft:"10px;",backgroundColor:"#eee;", borderColor:'#999'}}>기본버튼</button>
      <button style={{marginLeft:"10px;",backgroundColor:"#eee;", border:0, borderColor:'#eee',width:'100px;',height:'30px;'}}>기본버튼</button>
    </div>
  );
}
