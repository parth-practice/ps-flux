import React from "react";

function InputSelector(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value || ""}
          className="form-control"
        >
          {props.options.map((element) => {
            return (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

export default InputSelector;
