import React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Welcome = () => (
  <section className="welcome">
    <Card>
      <CardContent className="welcome__content">
        <Typography
          variant="h2"
          className="card-header welcome__header"
          align="center"
        >
          Kalkulator ceny kursu
        </Typography>

        <Typography className="welcome__text" variant="body1" align="center">
          Tutaj pójdzie przykładowy tekst powitalny.
        </Typography>

        <Box className="welcome__button">
          <Link to="/calculator">
            <Button variant="contained" color="primary">
              Przejdź do kalkulatora
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  </section>
);
