import React from "react";
import DropdownList from "react-widgets/lib/DropdownList";
import SelectList from "react-widgets/lib/SelectList";
import Multiselect from "react-widgets/lib/Multiselect";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
//import moment from "moment";
//import momentLocaliser from "react-widgets/lib/localizers/moment";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import "react-widgets/dist/css/react-widgets.css";
//import simpleNumberLocalizer from "react-widgets-simple-number";
//import { NumberPicker } from "react-widgets";
//simpleNumberLocalizer();
//momentLocaliser(moment);

function FieldGroup({ label, component, ...props }) {
  return (
    <FormGroup>
      {label && <ControlLabel>{label}</ControlLabel>}
      {component ? component : <FormControl {...props} />}
    </FormGroup>
  );
}
const renderDropdownList = ({ input, data, valueField, textField }) => (
  <DropdownList
    {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange}
  />
);

const renderMultiselect = ({ input, data, valueField, textField }) => (
  <Multiselect
    {...input}
    onBlur={() => input.onBlur()}
    value={input.value || []} // requires value to be an array
    data={data}
    valueField={valueField}
    textField={textField}
  />
);

const renderSelectList = ({ input, data }) => (
  <SelectList {...input} onBlur={() => input.onBlur()} data={data} />
);

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) => (
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />
);
const renderInputComponent = function ({
  input, //: { onChange, value },
  className,
  type,
  id,
  label,
  onChange,
  style,
  disabled,
  placeholder,
  meta: { touched, error, active },
}) {
  return (
    <div>
      {label && <label style={style}>{label}</label>}
      <FieldGroup
        className={className}
        type={type}
        id={id}
        style={style}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        //value={input}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
};
export {
  //renderImage,
  renderDropdownList,
  renderMultiselect,
  renderSelectList,
  //renderTimePicker,
  renderDateTimePicker,
  /*renderCombobox,
    renderComboboxRD,
  renderNumberPicker,*/
  renderInputComponent,
  /*  renderTextAreaComponent,
    renderCheckboxComponent,
    treeSelectComponent,
    renderColorComponent,
    renderRadioButtonSelect,
    renderComboboxDetail,
    ImageDescriptionInput*/
};
