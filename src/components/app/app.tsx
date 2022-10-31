import React from "react";

import styles from './app.module.css';

import {CartPage, HomePage} from "../pages";
import Header from "../header";
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
