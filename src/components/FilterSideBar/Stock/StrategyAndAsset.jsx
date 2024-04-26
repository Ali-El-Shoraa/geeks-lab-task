import { StrategyData, AssetData } from "../listsData";
export default function StrategyAndAsset() {
  return (
    <div className="flex flex-wrap text-white text-center text-sm">
      {/* start list  Market*/}
      <div className="basis-2/4 mt-3">
        <h3 className="mb-2 font-bold flex items-center space-x-1 text-sm justify-center">
          strategy
        </h3>
        <div className="">
          {StrategyData.map((obj, index) => (
            <div
              key={index}
              className={` basis-2/4 space-x-3`}
              onClick={(e) => console.log(e.target.value)}
            >
              <button
                key={index}
                className={` basis-2/4 space-y-3 px-2 duration-300 focus:bg-[#53ACFF] hover:bg-[#53ACFF] active:bg-[#53ACFF]`}
              >
                {obj.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* end list  Market*/}

      {/* start list  Risk*/}
      <div className="basis-2/4 mt-3">
        <h3 className="mb-2 font-bold flex items-center space-x-1 text-sm justify-center">asset</h3>

        <div className="">
          {AssetData.map((obj, index) => (
            <div
              key={index}
              className={` basis-2/4 space-x-3`}
              onClick={(e) => console.log(e.target.value)}
            >
              <button
                key={index}
                className={` basis-2/4 space-y-3 px-2 duration-300 focus:bg-[#53ACFF] hover:bg-[#53ACFF] active:bg-[#53ACFF]`}
              >
                {obj.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* end list  Risk*/}
    </div>
  );
}
