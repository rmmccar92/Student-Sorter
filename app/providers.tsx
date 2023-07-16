"use client";
import type { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}
const Providers: FC<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
