import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormikStepper } from '../../common/components/formik-stepper';
import { Bonus, PriceStep } from './price-step';
import { FormikValues } from 'formik';

const convertBonusesToBonusInitialValues = (bonuses: Bonus[]): FormikValues => bonuses.reduce(
  (obj: FormikValues, item: Bonus) => ({
    ...obj,
    [item.name]: item.value,
  }),
  {}
);

export const Calculator: React.FunctionComponent = () => {
  const [standardBonuses, setStandardBonuses] = useState([]);
  const [additionalBonuses, setAdditionalBonuses] = useState([]);
  const [bonusesInitialValues, setBonusesInitialValues] = useState({});

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/api/bonuses');

      setStandardBonuses(data.standardBonuses);
      setAdditionalBonuses(data.additionalBonuses);
    }

    getData();
  }, []);


  useEffect(() => {
    const initialValues = convertBonusesToBonusInitialValues([...standardBonuses, ...additionalBonuses]);

    setBonusesInitialValues(initialValues);
  }, [standardBonuses, additionalBonuses]);

  return (
    <FormikStepper
      enableReinitialize={true}
      initialValues={{
        ...bonusesInitialValues,
      }}
      onSubmit={() => {}}
    >
      {PriceStep(standardBonuses, additionalBonuses)}
    </FormikStepper>
  );
};
