import React, { useState } from 'react'
import Input from './components/Input';
import List from './components/List';

function App() {
  let [tasks, setTasks] = useState(["Breakfast", "School", "Lunch", "Back to Home", "Playing", "Do Homework", "Dinner", "Go to Bed"]);
  return (
    <div className="container">
      <Input />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
