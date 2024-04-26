import { FaSearch } from "react-icons/fa";
import Industry from "./Industry";
import MarketAndRisk from "./MarketAndRisk";
import StrategyAndAsset from "./StrategyAndAsset";

export default function Stock() {
  return (
    <div className="container mx-auto mt-4 pt-2 pb-6 px-3 rounded bg-[#202020] ">
      <div className="">
        <h3 className="font-bold text-base text-white mt-2 mb-2">Stock</h3>

        {/* Search */}
        <div className="relative ">
          <input
            type="text"
            placeholder="$ TICKER"
            className="outline-none rounded px-5 h-10 bg-[#313131] w-full"
          />
          {/* icon search */}
          <FaSearch
            size={20}
            color="#8d8d8d"
            className="absolute top-2/4 -translate-y-2/4 right-3"
          />
        </div>
      </div>

      <Industry />

      <MarketAndRisk />

      <StrategyAndAsset />
    </div>
  );
}
