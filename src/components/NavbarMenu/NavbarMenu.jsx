export const NavbarMenu = ({
  showMenu,
  menuRef,
  userBody,
  handleLogOut,
  showWorldScoreBtn,
  showHistoryBtn,
  handleViewTableHistory,
  handleViewTableWorldHistory
}) => {
  return (
    <>
      {showMenu && (
        <div
          ref={menuRef}
          className={`
            absolute right-[30px] top-[85%] flex flex-col
            bg-gray-100 gap-[2px] rounded-[8px]
            pl-[10px] pr-[10px] pt-[3px] pb-[3px]
            w-[auto] border-gray-800 border-[1px]
            z-10
          `}
        >
          <p className="mobileL:block mobileL:text-gray-600 mobileL:mt-[5px] hidden mb-[5px]">
            {userBody?.username}
          </p>
          <hr className="h-[1px] w-[100%] bg-gray-600 mb-[5px] hidden mobileL:block"/>
          {showHistoryBtn && (
            <button 
              className="
                pl-[10px] pr-[10px] pt-[3px] pb-[3px] mobileL:pl-[0px] underline 
                text-left hover:bg-gray-200 rounded-[12px]
              "
              onClick={handleViewTableHistory}
            >
              Scores history
            </button>
          )}
          {showWorldScoreBtn && (
            <button
              className="
                pl-[10px] pr-[10px] pt-[3px] pb-[3px] mobileL:pl-[0px] underline 
                text-left hover:bg-gray-200 rounded-[12px]
              "
              onClick={handleViewTableWorldHistory}
            >
              World user scores history
            </button>
          )}
          <button
            className="pl-[10px] pr-[10px] pt-[3px] pb-[3px] mobileL:pl-[0px] hover:bg-gray-200 rounded-[12px]"
            onClick={handleLogOut}
          >
            <p className="underline text-left">Log Out</p>
          </button>
        </div>
      )}
    </>
  );
};
