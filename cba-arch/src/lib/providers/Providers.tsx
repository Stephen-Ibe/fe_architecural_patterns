"use client";

import { MantineProvider } from "@mantine/core";
import React, { ReactNode } from "react";

import StoreProvider from "./StoreProvider";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <StoreProvider>
      <MantineProvider>{children}</MantineProvider>
    </StoreProvider>
  );
};

export default Providers;
