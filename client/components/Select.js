import * as React from 'react';

const propComparator = (propName) => (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

export function sortAlph(list, byKey){
  return list.sort(propComparator(byKey))
}

const Select = (props) => {
  let selectProps = {'name': props.name, 'onChange': props.handleChange}
  selectProps['className'] = props.className ? props.className : ''
  selectProps['disabled'] = props.disabled ? true : false
  selectProps['value'] = props.value ? props.value : ''

  let sortBy = props.sortBy ? props.sortBy : 'value'
  let sOpts = sortAlph(props.opts, sortBy)
  let opts = sOpts.map((o, i) => {
    return(
      <option value={ o[props.valueKey] }>{ o[props.textKey] }</option>
    );
  })

  return(
    <select { ...selectProps }>
    <option value={ 0 }>{ props.defaultMsg }</option>
      { opts }
    </select>
  );
}

export default Select;