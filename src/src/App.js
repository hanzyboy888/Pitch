import './App.css';
import Navigation from '../components/navigation.js'
import Table from '../components/table.js'

function App() {

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
      <Navigation />
      <Table schedule={classSchedule} />
    </div>
  );
}

export default App;
