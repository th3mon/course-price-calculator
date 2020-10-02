import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { FormikStep } from '../../common/components/formik-stepper';
import { Field } from 'formik';
import { CheckboxWithLabel } from 'formik-material-ui';

interface CourseContent {
  name: string;
  label: string;
  value: boolean;
}

export interface CourseContents {
  leftColumn: CourseContent[];
  rightColumn: CourseContent[];
}

export const renderCourseContents = (courseContents: CourseContent[]) =>
  courseContents.map(({ name, label }) => (
    <Box key={name}>
      <Field
        name={name}
        type="checkbox"
        component={CheckboxWithLabel}
        Label={{ label }}
      />
    </Box>
  ));

export const CourseContentsStep = (data: CourseContents | null) => (
  <FormikStep label="zawartość kursu">
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h2" className="card-header">
          Co zawiera Twój kurs?
        </Typography>
        {data ? renderCourseContents(data.leftColumn) : null}
      </Grid>
      <Grid item>{data ? renderCourseContents(data.rightColumn) : null}</Grid>
    </Grid>
  </FormikStep>
);
