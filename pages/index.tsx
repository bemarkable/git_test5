import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
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

    <div style={{ height: 300, width: '100%' }}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ marginBottom: '20px' }}>
        <Button variant="outlined" href="/">0</Button>
        <Button href="sub">1</Button>
        <Button href="sub1">2</Button>
        {/* <Button href="sub2">3</Button> */}
        <Button href="sub3">3</Button>
        <Button href="sub4">4</Button>
        {/* <Button href="sub5">SUB5</Button>
        <Button href="sub6">SUB6</Button> */}
      </ButtonGroup>
      <DataGrid rows={rows} columns={columns} />

    </div>
  );
}
