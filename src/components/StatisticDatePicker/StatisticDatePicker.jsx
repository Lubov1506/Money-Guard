import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import s from './StatisticDatePicker.module.css';
import { getYear } from 'date-fns';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { fetchPeriodTrnThunk } from '../../redux/transactions/operations';

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
  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'grey' : ' rgba(74, 86, 226, 0.10)',
      backgroundColor: 'transparent',
      color: 'white',
      borderCollapse: 'separate',
    }),
    dropdownIndicator: baseStyles => ({
      ...baseStyles,
      color: 'white',
    }),
    menu: baseStyles => ({
      ...baseStyles,
      background:
        'linear-gradient(180deg, #855daf99 13%, #6A46A5 53%, #50309A 70%, #6A46A5 100%)',
      borderCollapse: 'separate',
      borderRadius: '8px',
      boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(50px)',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isFocused ? '#ffffff1a' : 'transparent',
      color: state.isSelected ? '#FF868D' : 'white',
    }),
    singleValue: baseStyles => ({
      ...baseStyles,
      color: 'white',
    }),

    indicatorSeparator: baseStyles => ({
      ...baseStyles,
      display: 'none',
    }),
    valueContainer: baseStyles => ({
      ...baseStyles,
      padding: '12px 0px 12px 20px',
    }),

    cursor: 'pointer',
  };

  return (
    <div className={s.monthYearPick}>
      <Select
        defaultValue={currentYear}
        styles={customStyles}
        onChange={selectedOption => setSelectedYear(selectedOption.value)}
        openMenuOnClick={true}
        placeholder="Select year"
        options={yearOptions}
      />
      <Select
        styles={customStyles}
        onChange={selectedOption => setSelectedMonth(selectedOption.value)}
        options={monthsOptions}
        placeholder="Select month"
      />
    </div>
  );
};
export default StatisticDatePicker;

// import 'react-datepicker/dist/react-datepicker.css';
// import { useEffect, useState } from 'react';
// import s from './StatisticDatePicker.module.css';
// import { getYear } from 'date-fns';
// import Select from 'react-select';
// import { useDispatch } from 'react-redux';
// import { fetchPeriodTrnThunk } from '../../redux/transactions/operations';

// const StatisticDatePicker = () => {
//   const currentMonth = new Date().getMonth();
//   const currentYear = getYear(new Date());
//   const [selectedYear, setSelectedYear] = useState(currentYear);
//   const [selectedMonth, setSelectedMonth] = useState(currentMonth);
//   const dispatch = useDispatch();

//   const handleYearChange = selectedOption => {
//     setSelectedYear(selectedOption.value);
//     console.log(selectedOption.value);
//     dispatch(
//       fetchPeriodTrnThunk({
//         month: selectedMonth,
//         year: selectedOption.value,
//       })
//     )
//       .unwrap()
//       .then(data => {
//         console.log(data);
//       });
//   };
//   const handleMonthChange = selectedOption => {
//     setSelectedMonth(selectedOption.value);
//     dispatch(
//       fetchPeriodTrnThunk({
//         month: selectedOption.value,
//         year: selectedYear,
//       })
//     )
//       .unwrap()
//       .then(data => {
//         console.log(data);
//       });
//     console.log(selectedOption.value);
//   };

//   const years = Array.from(
//     { length: getYear(new Date()) - 2020 + 1 },
//     (_, i) => 2020 + i
//   );
//   const yearOptions = years.map(year => ({ value: year, label: year }));
//   const monthsOptions = Array.from({ length: 12 }, (e, i) => {
//     const month = new Date(0, i).toLocaleString('en', { month: 'long' });
//     return {
//       value: i + 1,
//       label: month,
//       isDisabled: i > currentMonth && selectedYear === currentYear,
//     };
//   });
//   return (
//     <div>
//       <div className={s.monthYearPick}>
//         <Select
//           onChange={handleYearChange}
//           placeholder="Select year"
//           options={yearOptions}
// value={yearOptions.find(option => option.value === selectedYear)}
//         />
//         <Select
//           onChange={handleMonthChange}
//           options={monthsOptions}
//           placeholder="Select month"
//           // value={monthsOptions.find(option => option.value === selectedMonth)}
//         />
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default StatisticDatePicker;
