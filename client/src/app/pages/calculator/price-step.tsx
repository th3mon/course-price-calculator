import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Field } from 'formik';
import { CheckboxWithLabel } from 'formik-material-ui';
import { FormikStep } from '../../common/components/formik-stepper';

export interface Bonus {
  name: string;
  label: string;
}

export const renderStandardBonuses = (bonuses: Bonus[]) =>
  bonuses.map(({ name, label }) => (
    <Box key={name}>
      <Field
        name={name}
        type="checkbox"
        component={CheckboxWithLabel}
        Label={{ label }}
      />
    </Box>
  ));

export const renderAdditionalBonuses = (bonuses: Bonus[]) =>
  bonuses.map(({ name, label }) => (
    <Box key={name}>
      <Field
        name={name}
        type="checkbox"
        component={CheckboxWithLabel}
        Label={{ label }}
      />
    </Box>
  ));

export const PriceStep = (
  standardBonuses: Bonus[],
  additionalBonuses: Bonus[]
) => (
  <FormikStep label="Cena">
    <Grid container spacing={2}>
      <Grid item>
        <Typography
          variant="h2"
          style={{
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          Standardowe bonusy
        </Typography>
        {renderStandardBonuses(standardBonuses)}
      </Grid>

      <Grid item>
        <Typography
          variant="h2"
          style={{
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          Dodatkowe bonusy
        </Typography>
        {renderAdditionalBonuses(additionalBonuses)}
      </Grid>
    </Grid>
  </FormikStep>
);
