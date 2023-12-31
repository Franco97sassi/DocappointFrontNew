import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';

export const TurnosReservados = () => {
  const turnos = [
    {
      id: 1,
      fecha: '2023-06-28',
      usuario: 'Juan Pérez',
      hora: '10:00'
    },
    {
      id: 2,
      fecha: '2023-06-30',
      usuario: 'María López',
      hora: '11:00'
    },
    {
      id: 3,
      fecha: '2023-07-02',
      usuario: 'Pedro Gómez',
      hora: '12:00'

    }
  ];

  const style = {
    width: '100%',
    maxWidth: 2000,
    bgcolor: 'background.paper ',

  };
  return (
    <Card  >
      <CardContent>
        <Typography variant="h6" component="div">
          Turnos Reservados
        </Typography>
        <List sx={{ mt: 2 }}>
          {turnos.map(turno => (
            <List sx={style} component="nav" aria-label="mailbox folders">     
             <ListItem key={turno.id}>
              <ListItemText primary={`Fecha: ${turno.fecha} Hora: ${turno.hora}`} secondary={`Doctor: ${turno.usuario}`} />
              <Button variant="contained">Cancelar Cita</Button>

            </ListItem>
              <Divider />
            </List>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}