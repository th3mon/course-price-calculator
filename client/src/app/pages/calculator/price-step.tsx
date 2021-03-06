import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Field } from 'formik';
import { CheckboxWithLabel } from 'formik-material-ui';
import { FormikStep } from '../../common/components/formik-stepper';

export interface Bonus {
  name: string;
  label: string;
  value: boolean;
}

export const renderBonuses = (bonuses: Bonus[]) =>
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
  <FormikStep label="cena">
    <Grid container spacing={2}>
      <Grid item>
        <Typography
          variant="h2"
          className="card-header"
        >
          Standardowe bonusy
        </Typography>
        {renderBonuses(standardBonuses)}
      </Grid>

      <Grid item>
        <Typography
          variant="h2"
          className="card-header"
        >
          Dodatkowe bonusy
        </Typography>
        {renderBonuses(additionalBonuses)}
      </Grid>
    </Grid>
  </FormikStep>
);
