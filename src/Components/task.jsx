import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (token) {
      axios
        .get('http://127.0.0.1:8000/api/tasks/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setTasks(response.data))
        .catch((error) => console.error('Error fetching tasks:', error));
    }
  }, [token]);

  return (
    <div>
        <h1 className='flex justify-center text-white text-[100px]'>Tasks</h1>
      {tasks.map((task) => (
        <div className=' flex flex-col justify-center text-white items-center w-full' key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Points: {task.points}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
