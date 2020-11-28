import React from "react";
import "react-widgets/dist/css/react-widgets.css";
import DropdownList from "react-widgets/lib/DropdownList";
import SelectList from "react-widgets/lib/SelectList";
import Multiselect from "react-widgets/lib/Multiselect";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
//import moment from "moment";
//import momentLocaliser from "react-widgets/lib/localizers/moment";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { TreeSelect, Tooltip } from "antd";
//import simpleNumberLocalizer from "react-widgets-simple-number";
import { NumberPicker } from "react-widgets";
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
function getCustomTooltipProps(active, value) {
  return active && value
    ? { trigger: "focus", visible: active }
    : { trigger: "hover", visible: false };
}

const renderDropdownList = ({ input, data, valueField, textField, label }) => (
  <div>
    {label && <ControlLabel style={{ color: "#000000" }}>{label}</ControlLabel>}
    <DropdownList
      {...input}
      data={data}
      valueField={valueField}
      textField={textField}
      onChange={input.onChange}
    />
  </div>
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
function renderImage({ input, label, src, onChange, alt }) {
  let inputField = undefined;
  const action = (e) => {
    console.log("e", e);
    onChange && onChange(e.target.value);
    input.onChange(e.target.value);
  };
  return (
    <div>
      <label>{label} </label>
      <img
        {...input}
        style={{ marginLeft: "10px", width: "100px", height: "100px" }}
        src={src}
        alt={alt}
        onClick={(_) => inputField.click()}
      />
      <input
        type="file"
        ref={(ref) => (inputField = ref)}
        style={{ display: "none" }}
        onChange={action}
      />
    </div>
  );
}

const renderNumberPicker = ({
  max,
  min,
  type,
  input,
  label,
  onBlurC,
  style,
  placeholder,
  defaultValue,
  disabled,
  meta: { touched, error, active },
}) => {
  /*const action = value => {
		onBlurC && onBlurC(value)
		input.onChange(value)
	}*/
  const blur = (value) => {
    //onBlurC && onBlurC(value)
    onBlurC && onBlurC(value);
    input.onBlur(value);
  };
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <FieldGroup
        component={
          <Tooltip
            title={String(input.value)}
            // {...getCustomTooltipProps(active, input.value)}
          >
            <NumberPicker //input
              format={type === "Double" ? "-#,###.00" : ""}
              {...input}
              style={style}
              type="number"
              min={min}
              max={max}
              containerClassName={error && touched ? "form-group-error" : ""}
              //onChange={action}
              onBlur={blur}
              value={Number(input.value)}
              disabled={disabled}
              //defaultValue={defaultValue}
              // inputProps = {{type: 'number', style: {WebkitAppearance: 'none'}}}
            />
          </Tooltip>
        }
      />
      {touched && error && <span className="badge badge-danger">{error}</span>}
    </div>
  );
};
const renderInputComponent = function ({
  input,
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
    <div style={{ marginTop: "3px" }}>
      {label && (
        <ControlLabel style={{ color: "#000000" }}>{label}</ControlLabel>
      )}
      <FormControl
        type={type}
        placeholder={placeholder}
        onChange={input.onChange}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
};
export {
  renderImage,
  renderDropdownList,
  renderMultiselect,
  renderSelectList,
  //renderTimePicker,
  renderDateTimePicker,
  /*renderCombobox,
    renderComboboxRD,*/
  renderNumberPicker,
  renderInputComponent,
  /*  renderTextAreaComponent,
    renderCheckboxComponent,
    treeSelectComponent,
    renderColorComponent,
    renderRadioButtonSelect,
    renderComboboxDetail,
    ImageDescriptionInput*/
};
