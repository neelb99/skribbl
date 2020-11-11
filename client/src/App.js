import {useState} from 'react'
import Login from './Login';
import Room from './Room';

const App = ()=>{
  const [inGame,setInGame] = useState(false)
  if(inGame)
    return <Room setInGame={setInGame}/>
  else
    return <Login setInGame={setInGame}/>
}

export default App;
