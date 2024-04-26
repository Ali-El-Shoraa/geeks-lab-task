import { useContext } from "react";
import CompanyData from "./CompanyData/CompanyData";
import { ContextFilterData } from "./ContextApi";
import FilterSideBar from "./FilterSideBar/FilterSideBar";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

export default function Home() {
  const { isBlur } = useContext(ContextFilterData);

  return (
    <main className="flex bg-[#202020] h-screen">
      {/* sidebar in left */}
      <SideBar isBlur={isBlur} />

      <div
        className={`${
          isBlur && "filter blur"
        } flext-header-datacompany w-full overflow-y-auto ml-[88px] mr-4 max-md:ml-16 `}
      >
        <Header />
        {/* the list data of company */}
        <CompanyData />
      </div>
      {/* menu filter */}
      <FilterSideBar />
    </main>
  );
}
