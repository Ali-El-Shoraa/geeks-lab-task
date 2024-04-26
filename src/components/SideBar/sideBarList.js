import { IoIosNotifications } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { BsFolderFill } from "react-icons/bs";
import { BsFillBarChartLineFill } from "react-icons/bs";

export const listData = [
  { id: 1, name: "Alert", icon: IoIosNotifications, cssStyle: "white-color", avaliable: "" },
  { id: 2, name: "Training", icon: FaGraduationCap, cssStyle: "white-color", avaliable: "" },
  {
    id: 3,
    name: "Automation",
    icon: TbSettingsAutomation,
    cssStyle: "gray-color",
    avaliable: "Coming Soon",
  },
  {
    id: 4,
    name: "Portfolio",
    icon: BsFolderFill,
    cssStyle: "gray-color",
    avaliable: "Coming Soon",
  },
  {
    id: 5,
    name: "Trading",
    icon: BsFillBarChartLineFill,
    cssStyle: "gray-color",
    avaliable: "Coming Soon",
  },
];

// {/* <IoIosNotifications />; */}
