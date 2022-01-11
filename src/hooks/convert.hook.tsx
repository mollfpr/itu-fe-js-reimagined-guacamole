import { useContext } from "react";
import { CovertContext } from "../contexts/convert.context";

export const useConvert = () => {
  return useContext(CovertContext);
};
