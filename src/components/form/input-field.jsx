import { useState } from "react";
import styles from "./form.module.css";
import { IoEyeOff, IoEye } from "react-icons/io5";
const InputField = ({
  type,
  placeholder,
  validation,
  onkeypress = null,
  onkeyup = null,
  maxLength = null,
  min = null,
  max = null,
  readonly,
  onChange,
  value = null,
  disabled,
  id,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;
  return (
    <>
      <div className={`${styles.input_wrapper}`}>
        <input
          id={id}
          className={`form-control shadow-none mt-1 ${
            styles.input_field_white
          } ${type === "date" || type === "time" ? "picker" : null}`}
          onChange={onChange ? onChange : null}
          value={value !== null && value !== undefined ? value : null}
          autoComplete="off"
          maxLength={maxLength !== null ? maxLength : null}
          type={inputType}
          placeholder={placeholder}
          max={max != null ? max : null}
          min={min != null ? min : null}
          {...validation}
          onKeyUp={onkeyup !== null ? onkeyup : null}
          onKeyPress={onkeypress !== null ? onkeypress : null}
          readOnly={readonly ? true : false}
          disabled={disabled ? true : false}
        />
        {type === "password" && (
          <span
            className={styles.eye_icon}
            onClick={toggleVisibility}
            title={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
          </span>
        )}
      </div>
    </>
  );
};

export default InputField;
