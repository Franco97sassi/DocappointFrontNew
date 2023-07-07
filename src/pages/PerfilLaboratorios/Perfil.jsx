import React from 'react'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, FormControlLabel, Grid, Rating, Stack, Typography } from '@mui/material'
import titan from '../../assets/titan.jpg'
import axios from 'axios';
import { ReseñasCard } from '../../components/ReseñasCard/ReseñasCard';
import { RedesSocialesCard } from '../../components/RedesSocialesCard/RedesSocialesCard';
import { TurnosCard } from '../../components/TurnosCard/TurnosCard';
import {Mensajeria}  from '../../components/Mensajeria/Mensajeria';
import {styled}  from '@mui/material';
import {Paper}  from '@mui/material';

export const PerfilLaboratorios = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    // user.fullName = user.name + " " + user.lastName;
    // user.category = user.category[0].toUpperCase() + user.category.substring(1);
    // user.userType = user.userType[0].toUpperCase() + user.userType.substring(1);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#D5DBDB  ',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center', paddingX: '20px', margin: 3.2 }}>
            <Grid container spacing={2} sx={{ margin: '' }}>
                <Grid  sx={{ display:"flex" ,flexDirection:"column",gap:3}}item md={4} >
                    <Card sx={{ display:"flex",gap:3 }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <CardMedia  sx={{ display: 'flex', justifyContent: 'center',  width: '100%', borderRadius: '2px', padding: 2,  }}>
                            <Avatar
                            //  alt={user.fullName} 
                             src={titan} sx={{ width: 200, height: 200, border: 'solid white 5px' }} />

                        </CardMedia>
                            <Box className='text2' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                {/* <Typography variant="h5" component="div" text-align="center">
                                    {user.fullName}
                                </Typography> */}
                                 <Typography variant="h5" component="div" text-align="center">
                                    Laboratorio1
                                </Typography> 
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nostrum ut eos tenetur earum nobis animi quas
                                </Typography>
                                <Typography variant="caption" color="text.secondary" display= "block" >
                                    Direccion:Calle 123, Hermosillo,Sonora,Mx
                                 </Typography>
                            </Box>
                        </CardContent>
                    </Card> 
                    <Mensajeria />

                </Grid>
                <Grid item md={8}>
                    <Card >
                        <CardContent >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'solid gray 1px', padding: '18.7px' }}>
                            <Typography>Nombre:</Typography>
                                {/* <Typography>{user.name}</Typography> */}
                                                              {/* <Typography>Nombre1</Typography>   */}
                                                              <Box sx={{ width: '25%' }}>
      <Stack  spacing={2}>
        <Item>Laboratorio1</Item>
        
      </Stack>
    </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'solid gray 1px', padding: '18.7px' }}>
                                <Typography>Apellido:</Typography>   
                                 {/* <Typography>Apellido1</Typography>   */}
                                 <Box sx={{ width: '25%' }}>
      <Stack  spacing={2}>
        <Item>Laboratorio1</Item>
        
      </Stack>
    </Box>
                                {/* <Typography>{user.lastName}</Typography> */}
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'solid gray 1px', padding: '18.7px' }}>
                                <Typography>Correo:</Typography>   
                                 {/* <Typography>Correo1@gmail.com</Typography>   */}
                                 <Box sx={{ width: '25%' }}>
      <Stack  spacing={2}>
        <Item>Correo1@gmail.com</Item>
        
      </Stack>
    </Box>
                                {/* <Typography>{user.email}</Typography> */}
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'solid gray 1px', padding: '18.7px' }}>
                                <Typography>Tipo de Usuario:</Typography> 
                                <Box sx={{ width: '25%' }}>
      <Stack  spacing={2}>
        <Item>Laboratorio</Item>
        
      </Stack>
    </Box>
                                   {/* <Typography>Doctor</Typography>   */}
                                {/* <Typography>{user.userType}</Typography> */}
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'solid gray 1px', padding: '18.7px' }}>
                                {/* <Typography>Telefono:</Typography>  */}
                                  <Typography>Telefono:</Typography>    
                                <Box sx={{ width: '25%' }}>
      <Stack  spacing={2}>
        <Item>12345</Item>
        
      </Stack>
    </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'solid white 1px', padding: '18.7px' }}>
                                <Typography>Notificaciones:
                                <FormControlLabel
                                sx={{  borderBottom: 'solid white 1px', padding: '18.7px' }}
                                control={<Checkbox defaultChecked />} label="Recibir" />
                                </Typography>
                                 

                                {/* <Typography>{user.userType}</Typography> */}
                            </Box>
                            
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {/* <Grid item md={4}>
                    <Mensajeria />
                </Grid> */}
                <Grid item md={12}>
                    <ReseñasCard />
                </Grid>
                
            </Grid>
        </Box>
    )
}
