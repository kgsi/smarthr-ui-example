import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Collection } from './pages/Collection'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collection" element={<Collection />} />
      </Routes>
    </>
  )
}

export default App
