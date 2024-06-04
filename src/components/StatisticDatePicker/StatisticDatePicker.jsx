import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import s from './StatisticDatePicker.module.css';
import { getYear } from 'date-fns';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { fetchPeriodTrnThunk } from '../../redux/transactions/operations';
import { datePickerStyles } from './datePickerStyles';

const StatisticDatePicker = () => {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = getYear(new Date());
  const [selectedYear, setSelectedYear] = useState(currentYear);
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

  return (
    <div className={s.monthYearPick_wrapper}>
      <Select
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
    </div>
  );
};
export default StatisticDatePicker;
