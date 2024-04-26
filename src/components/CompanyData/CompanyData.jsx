import { useContext, useState } from "react";
import { ContextFilterData } from "../ContextApi";

// This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC

export default function CompanyData() {
  const { filteredDataInputSearch } = useContext(ContextFilterData);
  const [isClickTsla, setIsClickTsla] = useState(false);
  return (
    // this siction show data compane
    // and the data from ContextApi
    // the data can be filter by input search or radio
    <section>
      <div className="poppins-regular container py-14 space-y-5 mx-auto ">
        {filteredDataInputSearch.map((obj) => (
          <div key={obj.id}>
            <div
              className={`border-separate text-sm  flex items-center justify-between max-w-6xl mx-auto rounded-lg h-14 bg-[#414040] text-gray-400 duration-300 ${
                obj.summery && isClickTsla ? "bg-[#53ACFF] text-white" : ""
              } ${obj.summery && "cursor-pointer"} `}
              onClick={() => obj.summery && setIsClickTsla((e) => !e)}
            >
              {/*  */}
              <div className="py-3 max-w-xs flex-1">
                <div className="flex items-center justify-center space-x-2 text-base max-md:text-xs text-white">
                  <obj.iconNameCompany />
                  <span className="">{obj.nameCompany}</span>
                </div>
              </div>

              {/*  */}
              <div className="py-3 max-w-xs flex-1">
                <div className="flex items-center justify-center space-x-2 text-base max-md:text-xs text-white">
                  <obj.iconCompanyMoney />
                  <span className="">{obj.companyMoney}</span>
                </div>
              </div>

              {/*  */}
              <div className="py-3 max-w-xs flex-1">
                <div className="flex items-center justify-center space-x-2 text-base max-md:text-xs text-white">
                  <obj.iconChart color={obj.color} />
                  <span className="">{obj.chart}</span>
                </div>
              </div>

              {/*  */}
              <div className="py-3 max-w-xs flex-1">
                <div className="flex items-center justify-center space-x-2 text-base max-md:text-xs text-white">
                  <obj.iconRisk />
                  <span className="">{obj.risk}</span>
                </div>
              </div>
              {/*  */}
            </div>

            {/* {obj.summery && isClickTsla ? obj.summery : ""} */}
            {isClickTsla && obj.summery ? (
              <div
                key={obj.summery}
                className="bg-[#181818] text-white p-5 m-0 rounded-md max-w-6xl mx-auto  duration-300 "
                dangerouslySetInnerHTML={{ __html: obj.summery }}
              ></div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
