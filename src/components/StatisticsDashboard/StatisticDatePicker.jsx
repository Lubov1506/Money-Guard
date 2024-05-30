import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import s from './StatisticDatePicker.module.css';
import { getYear } from 'date-fns';
import Select from 'react-select';

export const StatisticDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const years = Array.from(
    { length: getYear(new Date()) - 2000 + 1 },
    (_, i) => 2000 + i
  );
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const handleYearChange = selectedOption => {
    const newDate = new Date(selectedDate.setYear(selectedOption.value));
    setSelectedDate(newDate);
    console.log(selectedOption);
  };
  const handleMonthChange = selectedOption => {
    const newDate = new Date(selectedDate.setMonth(selectedOption.value - 1));

    setSelectedDate(newDate);
    console.log(newDate);
    console.log(selectedOption);
  };

  const yearOptions = years.map(year => ({ value: year, label: year }));
  const monthOptions = months.map(month => ({
    value: month.toLocaleString('en-US', { minimumIntegerDigits: 2 }),
    label: month.toLocaleString('en-US', { minimumIntegerDigits: 2 }),
  }));

  return (
    <div>
      <Select
        options={yearOptions}
        onChange={handleYearChange}
        placeholder="Select year"
        value={{ value: getYear(selectedDate), label: getYear(selectedDate) }}
      />
      <Select
        options={monthOptions}
        onChange={handleMonthChange}
        placeholder="Select month"
        value={{
          value: new Date(selectedDate).toLocaleString('en-US', {
            month: 'long',
          }),
          label: new Date(selectedDate).toLocaleString('en-US', {
            month: 'long',
          }),
        }}
      />
    </div>
  );
};
