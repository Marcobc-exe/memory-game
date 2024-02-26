import { MainTitle } from "../MainTitle/MainTitle";
import { InputCreateUser } from "../InputCreateUser/InputCreateUser";

export const SignUpView = ({ handleView, handleLogIn }) => {
  return (
    <div
      className={`
        w-[600px] h-[500px] overflow-hidden
        tablet:w-[400px] tablet:h-[400px]
        mobileM:w-[350px] mobileS:w-[250px]
        absolute top-[50%] left-[50%] 
        translate-x-[-50%] translate-y-[-50%] italic
      `}
    >
      <MainTitle />
      <InputCreateUser handleView={handleView} handleLogIn={handleLogIn} />
    </div>
  );
};
