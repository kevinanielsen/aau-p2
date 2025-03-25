import { useState } from 'react'
import './App.css'
import { Test } from './components/test'
import { SideBar } from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>P2</h1>
      <Test></Test>
      <SideBar> </SideBar>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
