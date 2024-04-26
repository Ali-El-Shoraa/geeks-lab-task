import Search from "./Search";
import Notification from "./Notification";
import { ContextFilterData } from "../ContextApi";
import { useContext } from "react";

export default function Header() {
  const { widthBrowser, setIsBlur } = useContext(ContextFilterData);

  return (
    <header className="sticky top-0 bg-[#202020] py-3 poppins-bold">
      <div className="container px-3 mx-auto flex items-center w-full justify-between ">
        <h1 className="border-l-4 rounded border-solid border-[#53acff] px-2 text-5xl font-bold text-white max-md:text-2xl">
          ALERTS
        </h1>
        {/* search to filter */}
        <Search />

        {/* check width window to hide Notification in mobile width */}
        {widthBrowser > 1023 ? (
          <Notification />
        ) : (
          <button
            onClick={() => setIsBlur(true)}
            className="text-white bg-[#53ACFF] px-6 py-2 rounded"
          >
            Filter
          </button>
        )}
      </div>
    </header>
  );
}
