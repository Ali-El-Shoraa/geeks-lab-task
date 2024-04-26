import { createContext, useState } from "react";
import { dataListCompany } from "./CompanyData/dataList";

export const ContextFilterData = createContext("");

export default function ContextApi({ children }) {
  // filter data by input radio Risk Level
  const [riskRadio, setRiskRadio] = useState("");

  const filteredDataInputRisk =
    riskRadio === ""
      ? dataListCompany
      : dataListCompany.filter((obj) => obj.risk.includes(riskRadio));

  const [marketCap, setMarketCap] = useState("");

  // filter data by input search
  const [isSearch, setIsSearch] = useState("");

  const filteredDataInputSearch =
    isSearch === ""
      ? filteredDataInputRisk
      : filteredDataInputRisk.filter((obj) => obj.nameCompany.includes(isSearch.toUpperCase()));

  const [widthBrowser, setWidthBrowser] = useState(window.innerWidth);

  // butto to clear data
  const buttonClear = () => {
    setRiskRadio(() => "");
    setMarketCap(() => "");
  };

  // array to set in filter appled

  // to blur the page
  const [isBlur, setIsBlur] = useState(false);
  // to Know the resize window

  window.addEventListener("resize", () => {
    setWidthBrowser(window.innerWidth);
    setIsBlur(() => window.innerWidth && false);
  });

  const allData = {
    isSearch: isSearch,
    setIsSearch: setIsSearch,
    filteredDataInputSearch,
    riskRadio,
    setRiskRadio,
    marketCap,
    setMarketCap,
    buttonClear,
    widthBrowser,
    isBlur,
    setIsBlur,
  };

  return <ContextFilterData.Provider value={allData}>{children}</ContextFilterData.Provider>;
}
