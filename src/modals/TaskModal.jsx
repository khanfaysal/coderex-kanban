import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskModal = ({ closeModal }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task submitted:", task);
    console.log("Description:", description);
    console.log("Due Date:", selectedDate);
    closeModal(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#abd6db] bg-opacity-30">
      <div className="relative bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
        <button
          onClick={() => closeModal(false)}
          className="absolute top-0 right-0 mt-2 mr-2 text-red-600 font-bold text-xl"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="task" className="block font-bold mb-2">
              Title:
            </label>
            <input
              type="text"
              id="task"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border border-blue-300"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-bold mb-2">
              Task Description:
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block font-bold mb-2">
              Due Date:
            </label>
            <DatePicker
              id="date"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="(e.g., 8/29/2023)"
            />
          </div>
          <button type="submit" className="form-button">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
