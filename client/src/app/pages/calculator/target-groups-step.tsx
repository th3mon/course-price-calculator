import React from 'react';
import { Typography, FormControlLabel, Radio, Box } from '@material-ui/core';
import { RadioGroup } from 'formik-material-ui';
import { FormikStep } from '../../common/components/formik-stepper';
import { Field } from 'formik';

interface TargetGroup {
  name: string;
  label: string;
}

export const TargetGroupsStep = (data: TargetGroup[]) => (
  <FormikStep label="grupa docelowa">
    <Typography variant="h2" className="card-header">
      Target Group
    </Typography>
    <Field component={RadioGroup} name="targetGroup">
      {data.map(({ name, label }) => (
        <Box key={name}>
          <FormControlLabel value={name} control={<Radio />} label={label} />
        </Box>
      ))}
    </Field>
  </FormikStep>
);
