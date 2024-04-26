import { FaCaretDown } from "react-icons/fa";
import { marketCapData, RiskLevelData } from "../listsData.js";
import { ContextFilterData } from "../../ContextApi.jsx";
import { useContext } from "react";

export default function MarketAndRisk() {
  const { riskRadio, setRiskRadio, marketCap, setMarketCap } = useContext(ContextFilterData);

  return (
    <div className="flex flex-wrap text-white text-sm">
      {/* start list  Market*/}
      <div className="basis-2/4 mt-3">
        <h3 className="mb-2 font-bold flex items-center space-x-1 ">
          <FaCaretDown />
          <span>Market Cap</span>
        </h3>
        <div className="">
          {marketCapData.map((obj, index) => (
            <div key={index} className="basis-2/4 space-x-3">
              <input
                type="radio"
                id={obj.id}
                name={obj.radio}
                key={obj.id}
                className="cursor-pointer"
                onChange={() => setMarketCap(obj.name)}
                checked={marketCap === obj.name ? true : false}
              />
              <label htmlFor={obj.id} className="cursor-pointer">
                {obj.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* end list  Market*/}

      {/* start list  Risk*/}
      <div className="basis-2/4 mt-3">
        <h3 className="mb-2 font-bold flex items-center space-x-1 ">
          <FaCaretDown />
          <span>Risk Level</span>
        </h3>

        <div className="">
          {RiskLevelData.map((obj, index) => (
            <div key={index} className="basis-2/4 space-x-3">
              <input
                type="radio"
                id={obj.id}
                name={obj.radio}
                key={obj.id}
                className="cursor-pointer"
                onChange={() => setRiskRadio(obj.name)}
                checked={riskRadio === obj.name ? true : false}
              />
              <label htmlFor={obj.id} className="cursor-pointer">
                {obj.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* end list  Risk*/}
    </div>
  );
}
