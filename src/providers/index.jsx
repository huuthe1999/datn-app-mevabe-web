// libs
import React from "react";
// providers
import AuthProvider from "./AuthProvider";
import ChildProvider from "./ChildProvider";
import SocketProvider from "./SocketProvider";

const AppProviders = ({ children }) =>
  [AuthProvider, ChildProvider, SocketProvider].reduceRight(
    (previous, Provider) => <Provider>{previous}</Provider>,
    children
  );

export default AppProviders;
