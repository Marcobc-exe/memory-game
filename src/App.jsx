import { useEffect, useState } from "react";
import { SignUpView } from "./components/SignUpView/SignUpView";
import { TableView } from "./components/TableView/TableView";
import { Menu } from "./components/Menu/Menu";
import { Layout } from "./components/Layout/Layout";

const App = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [cardsGame, setCardsGame] = useState(null);
  const [userBody, setUserBody] = useState(null);

  const handleView = (value) => {
    setIsRegister(value);
    if (showTable) setShowTable(false);
    if (cardsGame !== null) setCardsGame(null);
  };

  // Handle game selected
  const handleGame = (event) => {
    const cards = event.currentTarget.id;
    if (!cards.length) return console.log("error:" + cards);

    setShowTable(true);
    setCardsGame(cards);
  };

  // Handle to returns to selection game menu
  const handleReturnToMenu = () => {
    setShowTable(false);
  };

  /**
   * Handle the user log In at register view
   * 
   * If exits a list of user on localStorage will create a new list
   * of users with the current user logIn params like true
   * 
   * @param {object} userBody { username: string, logIn: boolean, createAt: string }
   */
  const handleLogIn = (userBody) => {
    const listUsers = localStorage.getItem("listUsers");
    setUserBody(userBody);
    
    if (listUsers != null) {
      const parseListUsers = JSON.parse(listUsers);

      const newList = parseListUsers.map((user) => {
        if (!user.logIn && user.username === userBody?.username) {
          return {
            username: user.username,
            createAt: user.createAt,
            logIn: true,
          };
        } else {
          return user;
        }
      });

      const strNewList = JSON.stringify(newList);
      localStorage.setItem("listUsers", strNewList);
    }
  };

  const handleUserRegister = () => {
    const listUsers = localStorage.getItem("listUsers");

    if (listUsers != null) {
      const parseListUsers = JSON.parse(listUsers);
      const isUserLogIn = parseListUsers.find((user) => user.logIn);

      if (isUserLogIn) {
        setIsRegister(true);
        setUserBody(isUserLogIn)
      }
    }
  };

  // Handle webpage refresh when user its loged In
  useEffect(() => {
    handleUserRegister();
  }, []);

  return (
    <>
      {isRegister ? (
        <Layout handleView={handleView} userBody={userBody}>
          {showTable ? (
            <TableView
              cardsGame={cardsGame}
              userBody={userBody}
              handleReturnToMenu={handleReturnToMenu}
            />
          ) : (
            <Menu handleGame={handleGame} />
          )}
        </Layout>
      ) : (
        <SignUpView handleView={handleView} handleLogIn={handleLogIn} />
      )}
    </>
  );
};

export default App;
