import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function TreeDataFullExample() {
  const { data, loading } = useDemoData({
    dataSet: 'Employee',
    rowLength: 1000,
    treeData: { maxDepth: 2, groupingField: 'name', averageChildren: 200 },
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ marginBottom: '20px' }}>
            <Button href="/">HOME</Button>
            <Button href="sub1">SUB</Button>
            <Button href="sub">SUB1</Button>
            <Button href="sub2">SUB2</Button>
            <Button href="sub3">SUB3</Button>
            <Button href="sub4">SUB4</Button>
            <Button href="sub5">SUB5</Button>
            <Button variant="outlined" href="sub6">SUB6</Button>
        </ButtonGroup>
        <DataGridPro loading={loading} {...data} />
    </div>
  );
}
