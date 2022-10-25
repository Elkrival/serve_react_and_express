import { Link } from 'react-router-dom'
import '../App.css'

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/data">Data</Link>
      </header>
    </div>
  )
}

export default Home
