import { Link, Route, Routes } from 'react-router-dom'
import { Collection } from '../src/examples/Collection'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>SmartHR UI レイアウトサンプル</h1>
              <ul>
                <li>
                  <Link to="/collection">Collection</Link>
                </li>
              </ul>
            </>
          }
        />
        <Route path="collection" element={<Collection />} />
      </Routes>
    </>
  )
}

export default App
