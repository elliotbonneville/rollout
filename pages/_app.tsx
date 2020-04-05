import React from 'react';
import NextApp from 'next/app';
import { ThemeProvider, Styled } from 'theme-ui';

import { RootStore, StoreProvider } from '../src/stores/RootStore';

import Layout from '../src/components/Layout';

import { theme, Reset } from '../src/theme';

const rootStore = new RootStore();

class App extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StoreProvider value={rootStore}>
          <Reset />
          <Styled.root>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Styled.root>
        </StoreProvider>
      </ThemeProvider>
    );
  }
}

export default App;
