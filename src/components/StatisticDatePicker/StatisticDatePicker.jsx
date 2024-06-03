import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import s from './StatisticDatePicker.module.css';
import { getYear } from 'date-fns';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { fetchPeriodTrnThunk } from '../../redux/transactions/operations';
import { datePickerStyles } from './datePickerStyles';
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}


const StatisticDatePicker = () => {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = getYear(new Date());
  const [selectedYear, setSelectedYear] = useState(currentYear);
  console.log(currentMonth);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeriodTrnThunk({ year: selectedYear, month: selectedMonth }));
  }, [selectedMonth, selectedYear, dispatch]);
  const years = Array.from(
    { length: getYear(new Date()) - 2020 + 1 },
    (_, i) => 2020 + i
  );
  const yearOptions = years.map(year => ({ value: year, label: year }));
  const monthsOptions = Array.from({ length: 12 }, (e, i) => {
    const month = new Date(0, i).toLocaleString('en', { month: 'long' });
    return {
      value: i + 1,
      label: month,
      isDisabled: i + 1 > currentMonth && selectedYear === currentYear,
    };
  });
  monthsOptions.unshift({ value: null, label: 'All months' });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      // scope.current,
      // { opacity: [0, 1], y: [-10, 0] },
      // { delay: stagger(0.1) }
    );
  }, [scope, animate]);
  return (
    <motion.div className={s.monthYearPick_wrapper}>
      <Select ref={scope}
        defaultValue={{ value: null, label: 'All months' }}
        styles={datePickerStyles}
        className={s.monthYearPick}
        onChange={option => setSelectedMonth(option.value)}
        options={monthsOptions}
        placeholder="Select month"
      />
      <Select
        defaultValue={{ value: currentYear, label: currentYear }}
        styles={datePickerStyles}
        className={s.monthYearPick}
        onChange={selectedOption => setSelectedYear(selectedOption.value)}
        openMenuOnClick={true}
        placeholder="Select year"
        options={yearOptions}
      />
    </motion.div>
  );
};
export default StatisticDatePicker;
