import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
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
    <Field
      key={name}
      name={name}
      type="checkbox"
      component={CheckboxWithLabel}
      Label={{ label }}
    />
  ));

export const Calculator: React.FunctionComponent = () => (
  <Card>
    <CardContent>
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
          <Typography variant="h2">Standardowe bonusy</Typography>
          {renderStandardBonuses()}
        </FormikStep>
      </FormikStepper>
    </CardContent>
  </Card>
);
