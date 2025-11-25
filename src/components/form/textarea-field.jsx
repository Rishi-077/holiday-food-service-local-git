import styles from "./form.module.css";

const TextAreaField = ({
  placeholder,
  validation,
  onkeypress = null,
  onkeyup = null,
  maxLength = null,
  minLength = null,
  rows = 3,
  readonly,
  onChange,
  value = null,
  disabled,
  id,
}) => {
  return (
    <textarea
      id={id}
      className={`form-control shadow-none ${styles.input_field_white}`}
      onChange={onChange ? onChange : null}
      value={value}
      autoComplete="off"
      maxLength={maxLength !== null ? maxLength : null}
      minLength={minLength !== null ? minLength : null}
      rows={rows}
      {...validation}
      onKeyUp={onkeyup !== null ? onkeyup : null}
      onKeyPress={onkeypress !== null ? onkeypress : null}
      readOnly={readonly ? true : false}
      disabled={disabled ? true : false}
      placeholder={placeholder}
    />
  );
};

export default TextAreaField;
