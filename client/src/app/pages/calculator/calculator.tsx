import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormikStepper } from '../../common/components/formik-stepper';
import { PriceStep } from './price-step';

export const Calculator: React.FunctionComponent = () => {
  const [standardBonuses, setStandardBonuses] = useState([]);
  const [additionalBonuses, setAdditionalBonuses] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/api/bonuses');

      setStandardBonuses(data.standardBonuses);
      setAdditionalBonuses(data.additionalBonuses);
    }

    getData();
  }, []);

  return (
    <FormikStepper
      initialValues={{
        bonus1: false,
        bonus2: false,
        bonus3: false,
        bonus4: false,
        bonus5: false,
        bonus6: false,
        bonus7: false,
        bonus8: false,
      }}
      onSubmit={() => {}}
    >
      {PriceStep(standardBonuses, additionalBonuses)}
    </FormikStepper>
  );
};
