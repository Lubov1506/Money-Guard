export const datePickerStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? 'grey' : ' rgba(74, 86, 226, 0.10)',
    backgroundColor: 'transparent',
    color: 'white',
    borderCollapse: 'separate',
    width: '100%',
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
    scrollBehavior: 'smooth',
    scrollbarWidth: 'thin',
    scrollbarColor: '#6A46A5 #855daf99',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? '#ffffff1a' : 'transparent',
    color: state.isDisabled
      ? ' rgba(255, 255, 255, 0.6)'
      : state.isSelected
      ? '#FF868D'
      : 'white',
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
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
