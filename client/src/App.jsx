import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Budget from './pages/Budget'
import AddEntry from './pages/AddEntry';
import EditEntry from './pages/EditEntry';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/about" element={<About />} />
        <Route path="/budget/add" element={<AddEntry />} />
        <Route path="/budget/edit/:id" element={<EditEntry />} />
      </Routes>
    </>
  )
}

export default App
