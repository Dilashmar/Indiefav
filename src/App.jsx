import './App.css';
import Details from './components/Details.jsx';

const App = () => {

  return (
    <>
      <h1>Independent Artist Favorites</h1>
      <img className = "play" src="./public/play.jpeg" alt = "sunset" ></img>
      <Details />
    </>
  )
}

export default App;
