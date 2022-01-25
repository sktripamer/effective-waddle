import * as React from "react";
import { ReactNode } from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
          <Helmet>
        <html lang="en" />
        <meta name="icon" href="../images/favicon.ico" />
      </Helmet>
      <title>revrevdev</title>

      <main>{children}</main>
    </>
  );
}
