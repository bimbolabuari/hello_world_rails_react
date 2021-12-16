import React from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from './Greeting'
import store from '../../../configureStore'


const App = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Greeting />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
