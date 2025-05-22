"use client";

import { store } from "@/store";
import { MantineProvider } from "@mantine/core";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <MantineProvider>{children}</MantineProvider>
    </Provider>
  );
};

export default Providers;
