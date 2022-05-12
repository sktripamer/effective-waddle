import * as React from "react";
import { ReactNode } from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <>
          <Helmet>
        <html lang="en" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta content="yes" name="apple-mobile-web-app-capable" />

<meta name="viewport" content="width=device-width, initial-scale = 0.87, maximum-scale=3.0, minimum-scale=0.87"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
      </Helmet>
      <title>revrevdev</title>
      <main>{children}</main>
    </>
  );
}
