import React from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { Field } from 'formik';
import { CheckboxWithLabel } from 'formik-material-ui';
import {
  FormikStepper,
  FormikStep,
} from '../../common/components/formik-stepper';

const standardBonusesData = [
  {
    name: 'bonus1',
    label: 'Podręcznik do pobrania',
  },
  {
    name: 'bonus2',
    label: 'Ograniczona ilość uczestników',
  },
  {
    name: 'bonus3',
    label: 'Wywiady z ekspertami',
  },
  {
    name: 'bonus4',
    label: 'Transkrypcje wideo',
  },
];

const renderStandardBonuses = () =>
  standardBonusesData.map(({ name, label }) => (
    <Box key={name}>
      <Field
        name={name}
        type="checkbox"
        component={CheckboxWithLabel}
        Label={{ label }}
      />
    </Box>
  ));

export const Calculator: React.FunctionComponent = () => (
  <FormikStepper
    initialValues={{
      bonus1: false,
      bonus2: false,
      bonus3: false,
      bonus4: false,
    }}
    onSubmit={() => {}}
  >
    <FormikStep label="Cena">
      <Typography
        variant="h2"
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
        }}
      >
        Standardowe bonusy
      </Typography>
      {renderStandardBonuses()}
    </FormikStep>
  </FormikStepper>
);
