import { useEffect, useRef, useState } from "react";
import { NavbarMenu } from "../NavbarMenu/NavbarMenu";
import { BtnUser } from "../BtnUser/BtnUser";
import { NavbarTitle } from "../NavbarTitle/NavbarTitle";
import { UserHistoryScore } from "../UserHistoryScore/UserHistoryScore";
import { WorldUserScoresHistory } from "../WorldUserScoresHistory/WorldUserScoresHistory";

export const Navbar = ({ handleView, userBody }) => {
  const menuRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  const [showHistoryBtn, setShowHistoryBtn] = useState(false);
  const [showTableUserHistory, setShowTableUserHistory] = useState(false);
  const [showWorldScoreBtn, setShowWorldScoreBtn] = useState(false)
  const [showTableWorldScore, setShowTableWorldScore] = useState(false)

  /**
   * Log out user session
   */
  const handleLogOut = () => {
    const listUsers = localStorage.getItem("listUsers")
    const parseListUsers = JSON.parse(listUsers)
    const newList = parseListUsers.map(user => {
      if (user.logIn && user.username === userBody?.username) {
        return {
          username: user.username,
          createAt: user.createAt,
          logIn: false,
        }
      } else {
        return user
      }
    })

    const strNewList = JSON.stringify(newList)
    localStorage.setItem("listUsers", strNewList)
    handleView(false);
  };

  const handleNavbarMenu = () => {
    setShowMenu((preValue) => !preValue);
    handleShowUserHistoryBtn();
  };

  const handleViewTableHistory = () => {
    setShowTableUserHistory((preValue) => !preValue);
  };

  const handleViewTableWorldHistory = () => {
    setShowTableWorldScore((preValue) => !preValue)
  }

  const handleShowUserHistoryBtn = () => {
    const listScoreHistory = localStorage.getItem("scoreHistory");

    if (listScoreHistory != null) {
      const parseScoreHistory = JSON.parse(listScoreHistory);
      const findUser = parseScoreHistory.find(
        (scoreHistory) => scoreHistory.username === userBody.username
      );

      if (findUser) setShowHistoryBtn(true);
      setShowWorldScoreBtn(true)
    } else {
      setShowWorldScoreBtn(false)
    }
  };

  // Closing navbar menu clicking anywhere
  useEffect(() => {
    const handleClickOutsideNavbarMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideNavbarMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNavbarMenu);
    };
  }, []);

  useEffect(() => {
    handleShowUserHistoryBtn();
  }, []);

  return (
    <div
      className={`
        shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)]
        bg-gray-100 h-[70px] w-auto flex relative
      `}
    >
      <NavbarTitle />
      <BtnUser handleNavbarMenu={handleNavbarMenu} userBody={userBody} />
      <NavbarMenu
        showMenu={showMenu}
        menuRef={menuRef}
        userBody={userBody}
        showHistoryBtn={showHistoryBtn}
        showWorldScoreBtn={showWorldScoreBtn}
        handleLogOut={handleLogOut}
        handleViewTableHistory={handleViewTableHistory}
        handleViewTableWorldHistory={handleViewTableWorldHistory}
      />
      <UserHistoryScore
        userBody={userBody}
        showTableUserHistory={showTableUserHistory}
        handleViewTableHistory={handleViewTableHistory}
      />
      <WorldUserScoresHistory
        showTableWorldScore={showTableWorldScore}
        handleViewTableWorldHistory={handleViewTableWorldHistory}
      />
    </div>
  );
};
