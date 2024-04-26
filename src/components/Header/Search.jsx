import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { ContextFilterData } from "../ContextApi";

export default function Search() {
  const { setIsSearch } = useContext(ContextFilterData);

  return (
    <div className="relative basis-2/4 max-md:basis-1/3 text-white">
      <input
        onChange={(e) => setIsSearch(e.target.value)}
        type="text"
        placeholder="Search "
        className="outline-none rounded px-5 h-10 bg-[#313131] w-full"
      />
      {/* icon search */}
      <FaSearch
        // size={28}
        color="#8d8d8d"
        className="absolute top-2/4 -translate-y-2/4 right-3 text-2xl max-md:text-base"
      />
    </div>
  );
}
