
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../redux/feature/boardSlice";
const KanbanBody = () => {
  const { board } = useSelector((state) => state.board);

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    const prevTasks = [...board[0].columns[0].tasks];
    const tasks = [...prevTasks.filter(task => task.id !== id)];
    console.log(tasks, "filted")
    dispatch(removeTask({tasks}));
  }
  console.log(board);


  return (
    <section className="container section-gap-margin">
      <h1 className="text-xl lg:text-3xl xl:text-5xl font-black my-10 text-center">
        CodeRex Kanban
      </h1>
      <hr />

      <div className="py-10">

        {board ? (
          <div className="grid grid-cols-3 gap-5">

            { board[0].columns.map((column) => {
              const { name, tasks } = column;

              return (
                <div key={name}>
                  <h4 className="text-center border-b pb-3 mb-5 font-bold">
                    {name} ({tasks.length})
                  </h4>

                  {tasks.length ? (
                    <div className="grid grid-cols-1 gap-3">
                      {tasks.map((task) => {
                        const {id, title, description, duedate } = task;

                        return (
                          <div
                            key={id}
                            className="relative p-3 border hover:shadow-xl gap-4 rounded-md"
                          >
                            <span onClick={() => removeHandler(id)} className="absolute top-0 right-0 m-2 p-1 rounded-full text-white bg-red-400 hover:bg-red-600">x</span>
                            <span className="absolute text-3xl text-gray top-0 left-0 ">{id}</span>
                            <h5 className="font-semibold">{title}</h5>
                            <p className="text-sm text-gray-400">
                              {description}
                            </p>
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
