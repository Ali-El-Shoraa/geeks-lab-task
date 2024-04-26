import { useEffect, useRef, useState } from "react";
import User from "./User";
import Logo from "./img/street suite logo-04 1.png";
import { listData } from "./sideBarList";

export default function SideBar({ isBlur }) {
  const [isTouch, setIsTouch] = useState(false);
  const sideContent = useRef(null);

  useEffect(() => {
    // animation sidebar
    const handleMouseEnter = () => {
      setIsTouch(true);
    };

    const handleMouseLeave = () => {
      setIsTouch(false);
    };

    // to add event when touch sidebar
    sideContent.current.addEventListener("mouseenter", handleMouseEnter);
    sideContent.current.addEventListener("mouseleave", handleMouseLeave);

    // to remove event after touch sidebar
    return () => {
      sideContent.current.removeEventListener("mouseenter", handleMouseEnter);
      sideContent.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sideContent}
      className={`${
        isBlur && "filter blur"
      } poppins-semibold duration-300 h-screen bg-[#181818] text-white py-6 fixed z-10 ml-[6px] max-md:ml-0`}
    >
      <div className="container px-3 mx-auto h-full flex flex-col justify-between ">
        {/* start Logo & List */}
        <div className="">
          <img src={Logo} alt="" className={`${isTouch ? "w-32" : "w-7"} duration-300 mb-11`} />

          {listData.map((obj) => (
            <div key={obj.id} className={` relative`}>
              <div className={`${obj.cssStyle} flex items-center space-x-4 mb-5 cursor-pointer`}>
                <obj.icon size={25} />
                <h3 className={`${isTouch ? "block" : "hidden"} `}>{obj.name}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* end Logo & List */}

        <User isTouch={isTouch} />
      </div>
    </section>
  );
}
