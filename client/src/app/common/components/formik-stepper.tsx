import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Stepper,
  Step,
  StepLabel,
  Grid,
  Button,
  CircularProgress,
  CardContent,
  Card,
} from '@material-ui/core';
import { Formik, Form, FormikConfig, FormikValues } from 'formik';

const sleep = (time: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, time));

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children, ...props }: FormikStepProps) {
  return <React.Fragment>{children}</React.Fragment>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<
    FormikStepProps
  >[];
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const history = useHistory();
  const currentChild = childrenArray[step] as React.ReactElement<
    FormikStepProps
  >;
  const isLastStep = () => step === childrenArray.length - 1;

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);

          console.log(values)

          await sleep(1000);
          history.push('/');
        } else {
          setStep((step) => step + 1);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Card
            style={{
              width: '80%',
              margin: 'auto auto 50px',
              boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.1)',
              borderRadius: '25px',
            }}
          >
            <CardContent>
              {currentChild}

              <Grid container spacing={2}>
                {step > 0 ? (
                  <Grid item>
                    <Button
                      disabled={isSubmitting}
                      variant="contained"
                      color="primary"
                      onClick={() => setStep((step) => step - 1)}
                    >
                      Powrót
                    </Button>
                  </Grid>
                ) : null}
                <Grid item>
                  <Button
                    startIcon={
                      isSubmitting ? <CircularProgress size="1rem" /> : null
                    }
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    {isLastStep() ? 'Dołącz do Fabryki Kursów' : 'Dalej'}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Form>
      )}
    </Formik>
  );
}
