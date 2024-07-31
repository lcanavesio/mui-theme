import {
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import React from "react";
import { dataCitas } from "../components/citas/dataCitas";


const IndexPage: React.FC = () => {

  // Obtener la fecha actual
  const hoy = new Date().toISOString().split('T')[0];

  // Calcular el total de citas para hoy
  const citasHoy = dataCitas.filter(cita => cita.fecha === hoy).length;

  // Encontrar la próxima cita
  const proximaCita = dataCitas.find(cita => new Date(`${cita.fecha}T${cita.hora}`) > new Date());

  // Calcular el resumen de estados
  const resumenEstados = dataCitas.reduce((acc, cita) => {
    acc[cita.estado] = (acc[cita.estado] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div style={{ display: "flex" }}>
      <>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Bienvenidos al sistema 👋
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper style={{ padding: "16px" }}>
                <Typography variant="h6" gutterBottom>
                  <Grid item xs={12} md={12}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          Citas de Hoy
                        </Typography>
                        <Typography variant="h3">
                          {citasHoy}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Typography>
                <Typography variant="body1">
                  This is the main content area where you can display charts,
                  tables, and other components.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid item xs={12} md={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Próxima Cita
                    </Typography>
                    {proximaCita ? (
                      <>
                        <Typography variant="body1">
                          {proximaCita.paciente}
                        </Typography>
                        <Typography variant="body2">
                          {`${proximaCita.fecha} ${proximaCita.hora}`}
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="body1">
                        No hay citas próximas
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12} md={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Resumen de Estados
                    </Typography>
                    {Object.entries(resumenEstados).map(([estado, cantidad]) => (
                      <Typography key={estado} variant="body1">
                        {`${estado}: ${cantidad}`}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    </div>
  );
};

export default IndexPage;
