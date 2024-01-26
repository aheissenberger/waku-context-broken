import { TestProvider } from '../components/TestContext.js';
import '../styles.css';

import type { ReactNode } from 'react';
import {  MantineThemeProvider } from '@mantine/core';
import { Header } from '../components/header.js';
import { theme } from '../theme.js';

type RootLayoutProps = { children: ReactNode };

export const RootLayout = async ({ children }: RootLayoutProps) => {
  const data = await getData();

  return (
    <div id="__waku" className="font-['Nunito']">
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <main className="flex min-h-svh items-center justify-center *:min-h-64 *:min-w-64">
        {/* <Header /> */}
        {/* <TestProvider theme="dark"> */}
        <MantineThemeProvider theme={theme}>
        {children} 
        </MantineThemeProvider>
        {/* </TestProvider> */}
      </main>
    </div>
  );
};

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};
