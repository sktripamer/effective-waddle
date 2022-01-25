import * as React from "react";
import { ReactNode } from "react";

import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>revrevdev</title>
      <main>{children}</main>
    </>
  );
}
