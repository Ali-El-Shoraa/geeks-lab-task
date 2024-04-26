import { FaCaretDown } from "react-icons/fa";
import { IndustryData } from "../listsData";

export default function Industry() {
  return (
    <div className="">
      <h3 className="flex items-center space-x-2 font-bold text-sm text-white mt-3 mb-2">
        {/* icon arrow down */}
        <FaCaretDown />
        <span>Industry</span>
      </h3>
      <div className="flex flex-wrap ">
        {/* IndustryData.js the list data of menu*/}
        {IndustryData.map((obj) => (
          <div key={obj.id} className="industry-list">
            <obj.icon /> <h3>{obj.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
