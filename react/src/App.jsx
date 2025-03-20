import './App.css'

function App() {

  const date = new Date()
  const time = date.toLocaleTimeString()
  return (
    <>
    <h1>app {time}</h1>
    <h1>{new Date().toLocaleTimeString()}</h1>
    </>
  )
}

export default App
