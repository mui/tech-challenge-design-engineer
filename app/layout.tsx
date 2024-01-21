import * as React from 'react';
import AppRouterCacheProvider from '../src/components/AppRouterCacheProvider';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          {props.children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
