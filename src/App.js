import React, { useState } from 'react'
import Input from './components/Input';
import List from './components/List';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  let [tasks, setTasks] = useState(["Breakfast", "School", "Lunch"]);
  let [dataObj, setDataObj] = useState({ index: -1, data: '' });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const deleteTask = (task) => {
    setTasks(tasks.filter((element) => { return element !== task }));
    toast.success('Task Deleted Successfully');
  }

  const updateTask = (index, data) => {
    setDataObj({ index, data });
  }

  const editTask = (index, data) => {
    tasks.splice(index, 1, data);
    setTasks([...tasks]);
    toast.success('Task updated Successfully');
    setDataObj({ index: -1, data: '' });

  }

  return (
    <div className="container">
      <Input addTask={addTask} dataObj={dataObj} editTask={editTask} />
      <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} dataObj={dataObj} />
      <Toaster />
    </div>
  );
}

export default App;
