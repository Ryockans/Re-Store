import React from "react";
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {CartPage, HomePage} from "../pages";
import Header from "../header";

import styles from './app.module.css';

const App = () => {

  const count = useSelector((state: RootState) => state.counter.value);
  const total = useSelector((state: RootState) => state.counter.total)

  return (
    <div className={styles.container}>
      <Header numItems={count} total={total}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
