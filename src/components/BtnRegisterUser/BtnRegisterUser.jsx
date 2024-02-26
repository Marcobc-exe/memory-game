export const BtnRegisterUser = ({
  error,
  handleSubmit,
  handleRegisterUser,
}) => {
  return (
    <button
      className="
        w-[250px] bg-green-600 rounded-[5px] h-[35px] text-white
        hover:transition hover:bg-green-500
      "
      onClick={() => handleSubmit(handleRegisterUser)()}
    >
      {error?.type === "minLength" || error?.type === "maxLength"
        ? error?.message
        : "Register"}
    </button>
  );
};
