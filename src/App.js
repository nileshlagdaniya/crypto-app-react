import React from 'react';
import {
} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import Home from './components/Home.jsx';
import Coins from './components/Coins.jsx';
import Exchanges from './components/Exchanges.jsx';
import CoinDetails from './components/CoinDetails.jsx';
import Footer from './components/Footer';
import Login from './components/GithubLoginFOrm/Login';
import FormikForm from './components/FormikForm/FormikForm';

function App() {
  return (<>

    <BrowserRouter>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/coin/:id' element={<CoinDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    {/* <Login /> */}
    {/* <FormikForm /> */}
  </>
  );
}

export default App;
