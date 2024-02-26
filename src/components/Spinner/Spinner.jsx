import { CircleNotch } from "@phosphor-icons/react";

export const Spinner = ({ title }) => {
  return (
    <div
      className="
        w-[190px] flex justify-center items-center flex-col
        absolute left-[50%] translate-x-[-50%] top-[50%] 
        translate-y-[-50%] gap-[12px]
      "
    >
      <CircleNotch size={80} color="#84DCCF" weight="bold" className="animate-spin"/>
      <p className="text-xl tracking-tight italic">{title}</p>
    </div>
  )
}