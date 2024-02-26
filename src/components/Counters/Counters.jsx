export const Counters = ({ hits, misses }) => {
  return (
    <div
      className="
        absolute left-[50%] translate-x-[-50%] w-[140px]
        tracking-tight font-medium justify-around flex
      "
    >
      <span>Hits: {hits}</span>
      <span>Misses: {misses}</span>
    </div>
  );
};
