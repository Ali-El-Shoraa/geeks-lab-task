import { useContext } from "react";
import { ContextFilterData } from "../ContextApi";

export default function FiltersAppliedAndClear() {
  const { buttonClear, riskRadio, marketCap } = useContext(ContextFilterData);

  return (
    <div className="">
      <div className="flex items-center justify-between text-white mb-3">
        <span className="">Filters Applied</span>
        <button className="" onClick={buttonClear}>
          Clear All
        </button>
      </div>

      <div className="h-12 rounded bg-[#202020] w-full flex px-3 py-2 space-x-2">
        {marketCap && (
          <span className="bg-[#53ACFF] h-fit w-fit rounded-md text-xs block py-1 px-1">
            {marketCap}
          </span>
        )}

        {riskRadio && (
          <span className="bg-[#53ACFF] h-fit w-fit rounded-md text-xs block py-1 px-1">
            {riskRadio}
          </span>
        )}
      </div>
    </div>
  );
}
