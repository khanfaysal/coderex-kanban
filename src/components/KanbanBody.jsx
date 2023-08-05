import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../redux/feature/boardSlice";
import { PencilIcon, X } from "lucide-react";
import { useState } from "react";
import TaskUpdatedModal from "../modals/TaskUpdatedModal";

const KanbanBody = () => {
  const { board } = useSelector((state) => state.board);

  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTask, setSelectedTask ] = useState(null)

// remove task function
  const removeTaskHandler = (id) => {
    const prevTasks = [...board[0].columns[0].tasks];
    const tasks = [...prevTasks.filter((task) => task.id !== id)];
    console.log(tasks, "filted");
    dispatch(removeTask({ tasks }));
  };

//  update task function 
  const updateTaskHandler = (id) => {
    setSelectedTask(id)
    setIsOpenModal(true);
  
  };
  console.log(board);

  const handleOnDrag = (e, id) => {
    console.log(e, id)

  }

  const handleOnDrop = (e) => {
    console.log(e)

  }

  const handleOnDragOver = (e) => {
    e.preventDefault();
    console.log(e)

  }

  return (
    <section className="container section-gap-margin">
      {isOpenModal && <TaskUpdatedModal closeModal={setIsOpenModal} selectedTask={selectedTask}/>}
      <h1 className="text-xl lg:text-3xl xl:text-5xl font-black my-10 text-center">
        CodeRex Kanban
      </h1>
      <hr />

      <div className="py-10">
        {board ? (
          <div className="grid grid-cols-3 gap-5">
            {board[0].columns.map((column) => {
              const { name, tasks } = column;

              return (
                <div key={name}>
                  <h4 className="text-center border-b pb-3 mb-5 font-bold border"
                   onDragOver={handleOnDragOver} 
                   onDrop={handleOnDrop}>
                    {name} ({tasks.length})
                  </h4>

                  {tasks.length ? (
                    <div className="flex flex-col gap-3 p-8 border rounded-md bg-slate-400 min-h-screen" 
                    >
                      {tasks.map((task) => {
                        const { id, title, description, duedate, status } = task;

                        return (
                          <div
                            key={id}
                            className="relative p-3 border hover:shadow-xl gap-4 rounded-md"
                            draggable
                            onDragStart={(e) => handleOnDrag(e,id)}
                          >
                            <div className="absolute top-0 right-0 m-2 flex items-center gap-2">

                                <PencilIcon onClick={() => updateTaskHandler(id)} className="w-6 h-6 px-1 rounded-full text-white bg-red-300 hover:bg-red-500 cursor-pointer"/>
                              <X
                                onClick={() => removeTaskHandler(id)}
                                className="w-6 h-6 px-1 rounded-full text-white bg-red-300 hover:bg-red-500 cursor-pointer"
                              />

                            </div>
                            <span className="absolute text-3xl text-gray top-0 left-0 ">
                              {id}
                            </span>

                            <h5 className="font-semibold">{title}</h5>
                            <p className="text-sm text-gray-400">
                              {description}
                            </p>
                            <p>{status}</p>
                            <p>Due:{duedate}</p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    "Add Task"
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          "no board found!"
        )}
      </div>
    </section>
  );
};

export default KanbanBody;
