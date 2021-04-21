import './App.css';
// import Navigation from '../components/navigation.js'
// import Table from '../components/table.js'
import Login from '../components/Login.js'
import Main from '../components/main.js'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setLogin] = useState(false)
  // const isLoggedIn = false

  const login = async () => {
    // console.log(returnValue)
    setLogin({ isLoggedIn: !isLoggedIn })
  }

  const classSchedule = [
    {
      "className": "CMSC 11",
      "section": "A-1L",
      "time": "11:00 AM",
      "days": ["Monday", "Wednesday"],
      "assignments": ["Exer 1"],
      "links": "https://www.zoom.us",
    },
    {
      "className": "CMSC 12",
      "section": "B-1L",
      "time": "1:00 PM",
      "days": ["Tuesday", "Thursday", "Friday"],
      "assignments": ["Exer 1"],
      "links": "https://www.zoom.us",
    },
  ]
  return (
    <div className="App">
      {isLoggedIn ? (
        <Main classSchedule={classSchedule} onChange={login} />
      ) : <Login onChange={login} />}
    </div>
  );
}

export default App;
