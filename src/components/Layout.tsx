import * as React from "react";
import { ReactNode } from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";

interface IProps {
  htmlClassName: string
  seoImage: string
  seoTitle: string
  seoTitleTemplate: string
  seoDescription: string
  children: ReactNode
}


export default function Layout({ seoTitleTemplate, seoTitle, seoImage, seoDescription, htmlClassName, children }: IProps) {
  return (
    <>
          <Helmet  title={seoTitle} titleTemplate={seoTitleTemplate}>
        <html className={htmlClassName} lang="en" />
        <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
      </Helmet>

      <main>{children}</main>
    </>
  );
}
