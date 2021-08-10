import { createContext } from "react";

const authContext = createContext();
const childContext = createContext();

const socketContext = createContext();

export { childContext, authContext, socketContext };
