// src/modals/TaskModal.js

import { useState } from "react";

const TaskModal = ({ closeModal }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., save the task or perform any other action
    console.log("Task submitted:", task);
    closeModal(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Add task</h1>
        <button
          onClick={() => closeModal(false)}
          className="absolute top-0 right-0 mt-2 mr-2 text-red-600 font-bold text-xl"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="task" className="block font-bold mb-2">
              Task:
            </label>
            <input
              type="text"
              id="task"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your task"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
