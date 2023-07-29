import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import Input from './components/Input'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/input' element={<Input />} />
      </Routes>
    </>
  )
}

export default App
