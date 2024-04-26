import { useContext } from "react";
import { ContextFilterData } from "../ContextApi";
import Notification from "../Header/Notification";
import userImage from "./img/—ÎÓÈ 1.png";
export default function User({ isTouch }) {
  const { widthBrowser } = useContext(ContextFilterData);

  return (
    <div className="">
      {/* to remove notification when width mobile */}
      {widthBrowser <= 1023 && <Notification />}
      <div className="flex space-x-1 mb-4 items-center mt-3">
        <img src={userImage} alt="userImage" className="" />

        <div className={`${isTouch ? "opacity-100 block" : "opacity-0 hidden"} duration-300`}>
          <h4>Moni Roy</h4>
          <span>Beginner</span>
        </div>
      </div>

      <span className={`${isTouch ? "block" : "hidden"} text-gray-600`}>Street Suite. 2.0</span>
    </div>
  );
}
