import { Html, Head, Main, NextScript } from 'next/document'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
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
        <Main />
        <NextScript />
        <h3>footer2</h3>
      </body>
    </Html>
  )
}