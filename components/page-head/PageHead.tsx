import React from 'react';
import Head from 'next/head';

export interface PageHeadProps {
  pageTitle?: string,
  pageDesc?: string
}

const defaultProps: PageHeadProps = {
  pageTitle: 'Rheisen X Dennis',
  pageDesc: 'Rheisen X Dennis -- Software Engineer, Writer, Photographer'
};

export const PageHead: React.FC<PageHeadProps> = (
  {pageTitle = defaultProps.pageTitle, pageDesc = defaultProps.pageDesc}
) => {
  return(
    <Head>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content={pageDesc}
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#554387" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      <title>{pageTitle}</title>
      <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Lato:wght@300;400&
      family=Roboto:wght@400;500&display=swap" rel="stylesheet" /> 
    </Head>
  )
}
