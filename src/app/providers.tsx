'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SearchProvider } from './context/SearchContext';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <NextUIProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </NextUIProvider>
  )
}