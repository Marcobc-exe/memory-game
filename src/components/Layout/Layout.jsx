import { Navbar } from "../Navbar/Navbar";

export const Layout = ({
  children,
  handleView,
  userBody,
  showHistoryBtn,
  handleShowUserHistoryBtn,
  handleViewTableHistory,
}) => {
  return (
    <>
      <Navbar
        handleView={handleView}
        userBody={userBody}
        showHistoryBtn={showHistoryBtn}
        handleShowUserHistoryBtn={handleShowUserHistoryBtn}
        handleViewTableHistory={handleViewTableHistory}
      />
      {children}
    </>
  );
};
