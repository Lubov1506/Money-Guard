export const customStyles = {
  control: provided => ({
    ...provided,
    backdropFilter: 'blur(100px)',
    outline: 'none',
    border: 'none',
    borderBottom: ' 1px solid rgba(255, 255, 255, 0.4)',
    background: 'transparent',
    color: '#fff',
    minHeight: '35px',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0 6px',
  }),
  input: provided => ({
    ...provided,
    margin: '0',
  }),
  indicatorSeparator: provided => ({
    display: 'none',
  }),
  indicatorsContainer: provided => ({
    ...provided,
    height: '35px',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#fff',
  }),
  menu: provided => ({
    ...provided,
    background:
      'linear-gradient(360deg, rgba(83, 61, 186, 0.7) 0%, rgba(80, 48, 154, 0.7) 35.94%, rgba(106, 70, 165, 0.7) 61.04%, rgba(133, 93, 175, 0.7) 100%)',
    backdropFilter: 'blur(100px)',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'thin',
    scrollbarColor: '#6A46A5 #855daf99',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'rgba(255, 255, 255, 0.1)'
      : state.isFocused
      ? 'rgba(255, 255, 255, 0.1)'
      : 'transparent',
    color: '#fff',
  }),
};
