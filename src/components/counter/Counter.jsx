import React, { useState } from 'react'
import { Button } from '../button/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { ButtonGroup, Container, Grid, Typography } from "@mui/material";
import { purple } from '@mui/material/colors';

export const Counter = ( {initialValue=0, increment=1, decrement=1} ) => {

    const [counter, setcounter] = useState( initialValue );

  return (
    <>
    <Container sx={{border:2, bgcolor:"pink"}} maxWidth="lg">
     <Grid sx={{m:0, bgcolor:"#111", color:"white"}} container spacing={2}>
  <Grid item md={8} xs={12}> 
       <Typography color={purple[700]} variant="h1" align='center'>
        Counter
       </Typography>
  </Grid>
  <Grid item md={4} xs={12} >
       <Typography color={purple[700]} variant="h2" align='center'> 
        { counter }
       </Typography>
  </Grid>
  <Grid item md={12}>
       <ButtonGroup variant="contained" aria-label="outlined primary button group">
       <Button startIcon={<AddCircleIcon />} setcounter={ setcounter } newValue={ counter + increment } >+</Button>
       <Button startIcon={<RemoveCircleIcon />} setcounter={ setcounter } newValue={ counter - decrement } >-</Button>
       <Button startIcon={<RestartAltIcon />} setcounter={ setcounter } newValue={ initialValue } >Reset</Button>
       </ButtonGroup>   
  </Grid>
</Grid>
     </Container>      
     </>
  );
};

/*
  Hacer un componente para el botón
  atributo: increment={5}
  atributo: increment={-5}
  atributo: onClick={ fncCallback }
  Color text: blue;
*/
