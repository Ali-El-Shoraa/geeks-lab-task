import { useContext, useEffect } from "react";
import FiltersAppliedAndClear from "./FiltersAppliedAndClear";
import Stock from "./Stock/Stock";
import { ContextFilterData } from "../ContextApi";

export default function FilterSideBar() {
  const { isBlur, setIsBlur } = useContext(ContextFilterData);

  useEffect(() => {}, []);

  return (
    <div className="poppins-semibold flex-grow-0 m-0 lg:flex-1">
      <div className={`${isBlur ? "max-lg:fixed" : "max-lg:hidden"} sidebar-filter`}>
        <h3 className="font-semibold text-2xl text-white text-center">Filters</h3>
        {/*  */}
        <FiltersAppliedAndClear />
        {/*  */}
        <Stock />

        {/*  */}
        <button
          onClick={() => setIsBlur(false)}
          className={`bg-[#53ACFF] text-white py-3 px-6 font-semibold rounded-md mt-5 mx-auto block`}
        >
          Appled
        </button>
      </div>
    </div>
  );
}
