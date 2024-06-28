import "./form.css";
const InputText = ({
  formLabel,
  inputName,
  value,
  onChange,
  placeholder,
  inputType,
}) => {
  return (
    <div className="contact__form--element">
      <label className="form-label">{formLabel}</label>
      <input
        className="form-input"
        name={inputName}
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputText;
