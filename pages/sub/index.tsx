import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function ToolbarGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ marginBottom: '20px' }}>
        <Button href="/">0</Button>
        <Button variant="outlined" href="sub">1</Button>
        <Button href="sub1">2</Button>
        {/* <Button href="sub2">3</Button> */}
        <Button href="sub3">3</Button>
        <Button href="sub4">4</Button>
        {/* <Button href="sub5">SUB5</Button>
        <Button href="sub6">SUB6</Button> */}
      </ButtonGroup>
      <DataGrid
        {...data}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
