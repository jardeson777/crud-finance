import React from 'react';
import { DataContextProvider } from './src/global/hook/useData';
import { MyTabs } from './src/routes';

export default function App() {
  return (
    <DataContextProvider>
      <MyTabs />
    </DataContextProvider>
  );
}
