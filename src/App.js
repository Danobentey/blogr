import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Page from './Components/Page/Page';
import GlobalStyles from './GlobalStyles';


export default function App() {
  return (
    <>
    <GlobalStyles />
      <Navbar />
      <Page />
    </>
  );
}


