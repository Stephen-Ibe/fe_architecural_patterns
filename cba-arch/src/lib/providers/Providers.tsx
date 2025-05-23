"use client";

import { MantineProvider } from "@mantine/core";
import React, { ReactNode } from "react";

import StoreProvider from "./StoreProvider";
import QueryProvider from "./QueryProvider";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <StoreProvider>
      <QueryProvider>
        <MantineProvider>{children}</MantineProvider>
      </QueryProvider>
    </StoreProvider>
  );
};

export default Providers;
