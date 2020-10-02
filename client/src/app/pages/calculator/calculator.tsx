import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormikStepper } from '../../common/components/formik-stepper';
import { Bonus, PriceStep } from './price-step';
import { FormikValues } from 'formik';
import { TargetGroupsStep } from './target-groups-step';

const convertToInitialValues = (bonuses: Bonus[]): FormikValues =>
  bonuses.reduce(
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
  const [targetGroups, setTargetGroups] = useState([]);

  useEffect(() => {
    async function getBonuses() {
      const { data } = await axios.get('/api/bonuses');

      setStandardBonuses(data.standardBonuses);
      setAdditionalBonuses(data.additionalBonuses);
    }

    async function getTargetGroups() {
      const { data } = await axios.get('/api/target-groups');

      setTargetGroups(data);
    }

    getBonuses();
    getTargetGroups();
  }, []);

  useEffect(() => {
    setBonusesInitialValues(
      convertToInitialValues([
        ...standardBonuses,
        ...additionalBonuses,
      ])
    );
  }, [standardBonuses, additionalBonuses]);

  return (
    <FormikStepper
      enableReinitialize={true}
      initialValues={{
        ...bonusesInitialValues,
        targetGroup: ''
      }}
      onSubmit={() => {}}
    >
      {PriceStep(standardBonuses, additionalBonuses)}
      {TargetGroupsStep(targetGroups)}
    </FormikStepper>
  );
};
