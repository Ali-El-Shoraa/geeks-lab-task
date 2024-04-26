import { GiHeartPlus } from "react-icons/gi";
import { FaRecycle, FaTools } from "react-icons/fa";
import {
  MdOutlineElectricBolt,
  MdRealEstateAgent,
  MdPrecisionManufacturing,
  MdOutlineCurrencyExchange,
} from "react-icons/md";
import { VscSymbolConstant } from "react-icons/vsc";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaComments } from "react-icons/fa6";
import { BiSolidFactory } from "react-icons/bi";

// industry
export const IndustryData = [
  { id: 1, name: "Health care", icon: GiHeartPlus },
  { id: 2, name: "Materials", icon: FaRecycle },
  { id: 3, name: "Energy", icon: MdOutlineElectricBolt },
  { id: 5, name: "Consumer staples", icon: RiShoppingCart2Line },
  { id: 11, name: "Financials", icon: MdRealEstateAgent },
  { id: 6, name: "IT", icon: MdPrecisionManufacturing },
  { id: 8, name: "Industrials", icon: BiSolidFactory },
  { id: 9, name: "Utilities", icon: FaTools },
  { id: 10, name: "Financials", icon: MdOutlineCurrencyExchange },
  { id: 7, name: "Communication", icon: FaComments },
  { id: 4, name: "Consumer discretionary", icon: VscSymbolConstant },
];

// market and risk
export const marketCapData = [
  { id: 21, name: "Micro", radio: "market" },
  { id: 22, name: "Small", radio: "market" },
  { id: 23, name: "Large", radio: "market" },
];

export const RiskLevelData = [
  { id: 24, name: "Low Risk", radio: "risk" },
  { id: 25, name: "Mid Risk", radio: "risk" },
  { id: 26, name: "High Risk", radio: "risk" },
];

// strategy and asset
export const StrategyData = [
  { id: 1, name: "Big Option Buys", radio: "radio" },
  { id: 2, name: "Merger Arbitrage", radio: "radio" },
  { id: 3, name: "Short Reports", radio: "radio" },
];

export const AssetData = [
  { id: 1, name: "Stocks", radio: "radio" },
  { id: 2, name: "Options", radio: "radio" },
  { id: 3, name: "Futures", radio: "radio" },
];
