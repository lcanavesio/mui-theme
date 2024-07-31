import { Box, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import * as React from 'react';
import { dataCitas } from './dataCitas';

export interface Cita {
  id: number;
  paciente: string;
  fecha: string;
  hora: string;
  duracion: string;
  tipo: string;
  estado: 'confirmada' | 'pendiente' | 'cancelada' | 'completada';
  profesional: string;
  ubicacion: string;
  contacto: string;
  notas: string;
}



const Citas: React.FC = () => {
  return (
    <Box sx={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      bgcolor: 'background.default',
      p: 3,
    }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Citas
      </Typography>
      <TableContainer component={Paper} sx={{ overflow: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Paciente</TableCell>
              <TableCell>Fecha y Hora</TableCell>
              <TableCell>Duración</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Profesional</TableCell>
              <TableCell>Ubicación</TableCell>
              <TableCell>Contacto</TableCell>
              <TableCell>Notas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataCitas.map((cita) => (
              <TableRow key={cita.id}>
                <TableCell>{cita.id}</TableCell>
                <TableCell>{cita.paciente}</TableCell>
                <TableCell>{`${cita.fecha} ${cita.hora}`}</TableCell>
                <TableCell>{cita.duracion}</TableCell>
                <TableCell>{cita.tipo}</TableCell>
                <TableCell>
                  <Chip 
                    label={cita.estado} 
                    color={
                      cita.estado === 'confirmada' ? 'success' :
                      cita.estado === 'pendiente' ? 'warning' :
                      cita.estado === 'cancelada' ? 'error' :
                      'default'
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>{cita.profesional}</TableCell>
                <TableCell>{cita.ubicacion}</TableCell>
                <TableCell>{cita.contacto}</TableCell>
                <TableCell>{cita.notas}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Citas;