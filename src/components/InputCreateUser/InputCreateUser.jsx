import { Controller, useForm } from "react-hook-form";
import "./index.css";
import { InputRegisterUser } from "../InputRegisterUser/InputRegisterUser";
import { BtnRegisterUser } from "../BtnRegisterUser/BtnRegisterUser";
import { registerRules } from "../../constants/rules";
import moment from "moment";

export const InputCreateUser = ({ handleView, handleLogIn }) => {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: "username",
  });

  // Handling the users list in localStorage
  const saveUserOnLocalStorage = (userExits) => {
    handleView(true);
    const username = getValues().username;
    const bodyNewUser = {
      username,
      createAt: moment().format("YYYY/MM/DD"),
      logIn: true
    };

    handleLogIn(bodyNewUser);
    if (userExits) {
      const listUsers = localStorage.getItem("listUsers");
      const parseListUsers = JSON.parse(listUsers);
      parseListUsers.push(bodyNewUser);

      const newListUsers = JSON.stringify(parseListUsers);
      localStorage.setItem("listUsers", newListUsers);
    } else {
      const newUser = JSON.stringify([bodyNewUser]);
      localStorage.setItem("listUsers", newUser);
    }
  };

  /**
   * Handle the new register user
   * 
   * If no user list exits in localStorage, a new list will be created,
   * otherwise the new user will be added to the user list
   */
  const handleRegisterUser = () => {
    const listUsers = localStorage.getItem("listUsers");
    const username = getValues().username;

    if (listUsers == null) {
      saveUserOnLocalStorage(false);
    } else {
      const parseListUsers = JSON.parse(listUsers);
      const userExists = parseListUsers.find(
        (user) => user.username === username
      );

      if (userExists) {
        handleView(true);
        handleLogIn(userExists);
      } else {
        saveUserOnLocalStorage(true);
      }
    }
  };

  return (
    <Controller
      name="username"
      control={control}
      rules={registerRules}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => (
        <div className="container-form">
          <InputRegisterUser
            value={value}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            handleSubmit={handleSubmit}
            handleRegisterUser={handleRegisterUser}
          />
          <BtnRegisterUser
            error={error}
            handleSubmit={handleSubmit}
            handleRegisterUser={handleRegisterUser}
          />
        </div>
      )}
    />
  );
};
