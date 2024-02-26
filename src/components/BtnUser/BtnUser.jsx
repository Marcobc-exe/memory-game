import { User } from "@phosphor-icons/react";

export const BtnUser = ({ handleNavbarMenu, userBody }) => {
  return (
    <button
      className={`
          absolute right-[30px] top-[50%] flex flex-row
          translate-y-[-50%] gap-[14px] rounded-[8px]
          pl-[10px] pr-[10px] pt-[3px] pb-[3px] items-center
          mobileL:pr-[0px] hover:bg-gray-200 hover:transition
          text-gray-600
        `}
      onClick={handleNavbarMenu}
    >
      <p className="mobileL:hidden">{userBody?.username}</p>
      <div className="border-[1px] border-gray-800 rounded-[50%] p-[5px]">
        <User size={30} />
      </div>
    </button>
  );
};
