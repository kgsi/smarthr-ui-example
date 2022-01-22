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
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
              <Link to="/collection">About</Link>
            </>
          }
        />
        <Route path="collection" element={<Collection />} />
      </Routes>
    </>
  )
}

export default App
