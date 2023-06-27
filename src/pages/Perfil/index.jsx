import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import doctor1 from './doctor1.jpeg'
import "./styles.css"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, MenuItem, Rating, Select, TextField } from '@mui/material';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));
// export interface DialogTitleProps {
//   id: string;
//   children?: React.ReactNode;
//   onClose: () => void;
// }
 import { styled } from '@mui/material/styles';
 import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
 import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
 // import { useTheme } from '@mui/material/styles';
 
 
export default function Perfil() {
  
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  const [value, setValue] =React.useState(5);
  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   

  return (
    <div className='location'>
      
        <br />
        <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={4}>
        <Grid item xs={8}>
        {/* <Item>   */}
         
     <Card   className='card1'  >
      <div  className='perfil1'> 
      {/* <CardMedia 
        component="img" 
        sx={{ maxWidth: 345   }}
        alt="green iguana"
        height="240"
        image= {doctor1} 
        className='perfil1'
       /> */}
       <Avatar
        alt="doctor1  "
        src={doctor1}
        sx={{ width: 240, height: 240 }}
      />

     
      <CardContent sx={{ maxWidth: 700 }} >   
        <div className='text2'>  
        <Typography gutterBottom variant="h5" component="div" text-align="center">
          Doctor 1
        </Typography>
        <Rating name="read-only" value={value} readOnly />

        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nostrum ut eos tenetur earum nobis animi quas
        </Typography>
        </div>
        </CardContent> 

      </div>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
      
    </Card>
    {/* </Item>  */}
    </Grid>
   <br />
   <Grid item xs={4}>
          {/* <Item> */}
          <Card sx={{ maxWidth: 345 }}  className='card4'>
      
      <CardContent>
        <div   className='text' >  
        <Typography gutterBottom variant="h5" component="div" text-align="center">
          Contacto 
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nostrum ut eos tenetur earum nobis animi quas. Maiores, magnam adipisci autem possimus, reprehenderit ad impedit, aperiam beatae cumque deserunt minima!
        </Typography> */}
        </div>
      </CardContent>
      <CardActions>
        <Button size="small"   onClick={handleClickOpen}>Contacto con Laboratorios</Button>
        <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Escribir"}
        </DialogTitle>
       
        <DialogContent>
        
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard" 
          />
          <DialogContentText>
             <textarea name="" id="" cols="50" rows="10"></textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleClose} autoFocus>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
      <CardActions>
        <Button size="small"   onClick={handleClickOpen}>Contacto con Pacientes</Button>
        <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Escribir"}
        </DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard" 
          />
          <DialogContentText>
             <textarea name="" id="" cols="50" rows="10"></textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleClose} autoFocus>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
       

       
    </Card>
     
    {/* </Item> */}
        </Grid>

     <br />
     <Grid item xs={8}>
          {/* <Item>  */}
     <Card sx={{ maxWidth: 1000 }} className='card3'  >
      
      <CardContent>
        <div  className='text'   >  
        <Typography gutterBottom variant="h5" component="div" text-align="center">
         Turnos
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nostrum ut eos tenetur earum nobis animi quas. Maiores, magnam adipisci autem possimus, reprehenderit ad impedit, aperiam beatae cumque deserunt minima!
        </Typography> */}
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Turnos</Button>
      </CardActions>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Turnos" />
      </DemoContainer>
    </LocalizationProvider>
       
    </Card>
    {/* </Item> */}
        </Grid>
     <br />
     {/* <Grid item xs={8}>
          <Item> 
          <Card sx={{ maxWidth: 1000 }} className='card2' >
      
      <CardContent>
        <div  className='text' >  
        <Typography gutterBottom variant="h5" component="div" text-align="center">
          Info Personal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nostrum ut eos tenetur earum nobis animi quas. Maiores, magnam adipisci autem possimus, reprehenderit ad impedit, aperiam beatae cumque deserunt minima!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nostrum ut eos tenetur earum nobis animi quas. Maiores, magnam adipisci autem possimus, reprehenderit ad impedit, aperiam beatae cumque deserunt minima!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nostrum ut eos tenetur earum nobis animi quas. Maiores, magnam adipisci autem possimus, reprehenderit ad impedit, aperiam beatae cumque deserunt minima!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nostrum ut eos tenetur earum nobis animi quas. Maiores, magnam adipisci autem possimus, reprehenderit ad impedit, aperiam beatae cumque deserunt minima!

        </Typography>
        </div>
      </CardContent>
       
    </Card>
    </Item>
        </Grid> */}
     <br/>
     </Grid>

     </Box>
     
    </div>
   
        
    
  );
}