import { useContext } from "react";
import { childContext } from "@/contexts";

const useChild = () => useContext(childContext);

export default useChild;
