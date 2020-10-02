import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormikStepper } from '../../common/components/formik-stepper';
import { Bonus, PriceStep } from './price-step';
import { FormikValues } from 'formik';
import { TargetGroupsStep } from './target-groups-step';
import { CourseContents, CourseContentsStep } from './course-contents-step';

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
  const [courseContents, setCourseContents] = useState<CourseContents | null>(null);
  const [
    courseContentsInitialValues,
    setCourseContentsInitialValues,
  ] = useState({});

  useEffect(() => {
    async function getBonuses() {
      const { data } = await axios.get('/api/bonuses');

      setStandardBonuses(data.standardBonuses);
      setAdditionalBonuses(data.additionalBonuses);
      setBonusesInitialValues(
        convertToInitialValues([
          ...data.standardBonuses,
          ...data.additionalBonuses,
        ])
      );
    }

    async function getTargetGroups() {
      const { data } = await axios.get('/api/target-groups');

      setTargetGroups(data);
    }

    async function getCourseContents() {
      const { data } = await axios.get('/api/course-contents');

      setCourseContents(data);

      setCourseContents(data => {
        console.log(data)
        return data;
      });

      setCourseContentsInitialValues(
        convertToInitialValues([...data.leftColumn, ...data.rightColumn])
      );
    }

    getBonuses();
    getTargetGroups();
    getCourseContents();
  }, []);

  return (
    <FormikStepper
      enableReinitialize={true}
      initialValues={{
        ...bonusesInitialValues,
        targetGroup: '',
        ...courseContentsInitialValues,
      }}
      onSubmit={() => {}}
    >
      {PriceStep(standardBonuses, additionalBonuses)}
      {TargetGroupsStep(targetGroups)}
      {CourseContentsStep(courseContents)}
    </FormikStepper>
  );
};
