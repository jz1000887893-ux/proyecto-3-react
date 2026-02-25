import {useState} from 'react'
import './App.css'
import UseState from './Pages/useState'
import UseEffect from './Pages/useEffect'
import UseContext from './Pages/useContext'
import UseRef from './Pages/useRef'
import UseMemo from './Pages/useMemo'
import UseReducer from './Pages/useReducer'
import Layout from'./Layout/Layout'
import Usecallback from './Pages/useCallback'
import Inicio from './Pages/Inicio'


import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
    const [count,setCount]= useState(0)

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="/useState" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useContext" element={<UseContext />} />
          <Route path="/useRef" element={<UseRef/>} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/useReducer" element={<UseReducer />} />
          <Route path="/useCallback" element={<Usecallback />} />
          <Route path="/" index element={<Inicio />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App