import "./form.css";
const InputTextArea = ({
  formLabel,
  inputName,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="contact__form--element">
      <label className="form-label">{formLabel}</label>
      <textarea
        className="form-input form-textarea"
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default InputTextArea;
