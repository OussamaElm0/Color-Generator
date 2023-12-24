import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import Generate from './components/Generate';
import MyColors from './components/MyColors';

export default function App() {
  return (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/generate" element={<Generate />} />
                    <Route path="/my-colors" element={<MyColors />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
  )
}