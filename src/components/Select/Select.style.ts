import { StylesConfig } from 'react-select'

const selectStyles: StylesConfig = {
  option: (style, { isDisabled, isFocused, isSelected }) => {
    const getBackgroundColor = () => {
      if (isDisabled) return undefined
      if (isSelected) return '#10b981'
      if (isFocused) return '#d1fae5'
      return undefined
    }

    return {
      ...style,
      color: isSelected ? '#fff' : style.color,
      backgroundColor: getBackgroundColor(),
      '&:hover': {
        color: '#000',
        backgroundColor: '#d1fae5',
      },
      '&:active': {
        color: '#000',
        backgroundColor: '#6ee7b7',
      },
    }
  },
  control: (style, { isFocused }) => ({
    ...style,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#e2e8f0',
    padding: '3px 0.25rem',
    boxShadow: isFocused ? '0 0 0 1px #10b981' : '',
    borderColor: isFocused ? '#10b981' : '#e2e8f0',
    '&:hover': {
      borderColor: isFocused ? '#10b981' : '#e2e8f0',
    },
  }),
  multiValue: (style) => {
    return {
      ...style,
      backgroundColor: '#10b981',
    }
  },
  multiValueLabel: (style) => ({
    ...style,
    color: '#fff',
  }),
  multiValueRemove: (style) => ({
    ...style,
    color: '#fff',
    ':hover': {
      backgroundColor: '#059669',
      color: '#fff',
    },
  }),
}

export default selectStyles
