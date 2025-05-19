import './App.css'
import data from './data/data'
import Post from './components/Post'

function App() {
  return (
    <>
    <h1>Best News Site</h1>
    {data.map((entry) => {
      return (
        <Post title={entry.title} body={entry.body} />
      )
    })}
    </>
  )
}

export default App
