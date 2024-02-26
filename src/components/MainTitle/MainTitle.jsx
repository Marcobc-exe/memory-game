export const MainTitle = () => {
  return (
    <>
      <h1 className="text-8xl font-semibold tablet:text-6xl tracking-tight mb-[16px]">
        Memory
      </h1>
      <h1
        className={`
          text-8xl tablet:text-6xl 
          tracking-tight pl-[280px]
          tablet:pl-[180px] mobileM:pl-[170px]
          mobileS:pl-[0px] font-semibold
        `}
      >
        Game
      </h1>
    </>
  );
};
