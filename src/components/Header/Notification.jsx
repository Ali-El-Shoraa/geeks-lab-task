import React from "react";
import { IoIosNotifications } from "react-icons/io";

export default function Notification() {
  return (
    <div className="relative">
      {/* icon notification */}
      <IoIosNotifications size={32} color="#53acff" />
      <span className="rounded-full bg-[#118f4b] text-white w-4 h-4 font-bold text-xs text-center absolute top-0 right-0">
        6
      </span>
    </div>
  );
}
