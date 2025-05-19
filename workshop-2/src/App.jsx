import './App.css'
import data from './data/data'
import Post from './components/Post'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header />

    {data.map((entry ) => {
      return (
        <Post  title={entry.title} body={entry.body} />
      )
    })}

    <Footer />
    </>
  )
}

export default App
