import './App.css';
import Header from './components/Header';
import ListAdder from './components/ListAdder';
import ShowList from './components/ShowList';
import { useState } from 'react';
import Countdown from './components/Countdown';

function App() {
  const [toDoTask, setToDoTask] = useState([
    {task: "Complete test suite"},
    {task: "Make the To-Do-List app"}
  ]);

  const removeTask = index => {
    const newToDoTask = [...toDoTask];
    newToDoTask.splice(index, 1);
    setToDoTask(newToDoTask);
  }
  const hoursMinSecs = {hours:2, minutes: 0, seconds: 0};

  return (
    <div className="App">
      <Header />
      <ListAdder setToDoTask={setToDoTask}/>
      <ShowList toDoTask={toDoTask} removeTask={removeTask}/>
      <Countdown hoursMinSecs={hoursMinSecs}/>
    </div>
  );
}

export default App;
