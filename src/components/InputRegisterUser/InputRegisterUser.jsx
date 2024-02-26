export const InputRegisterUser = ({
  value,
  error,
  onChange,
  onBlur,
  handleSubmit,
  handleRegisterUser,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDownCapture={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSubmit(handleRegisterUser)();
        }
      }}
      placeholder={error ? error?.message : "Enter your username"}
      className={`
      text-black outline-none
        ${
          error ? "border-red-500 border-[2px]" : "border-transparent"
        }
        border-[1px] rounded-[5px] w-[250px] h-[35px] text-center
      `}
    />
  );
};
