import { useId } from "react";
import {useSelector} from "react-redux"
const KanbanBody = () => {

    const { board } = useSelector(state => state.board);
    const taskId = useId();
    const columnId = useId();
    
    return (
        <section className= "container section-gap-margin">
            <h1 className='text-xl lg:text-3xl xl:text-5xl font-black my-10 text-center'>CodeRex Kanban</h1>
            <hr /> 
            <div className="py-10">
                {
                    board ?
                    <div className="grid grid-cols-3 gap-5">
                        {
                            board[0].columns.map(column => {
                                const {name, tasks} = column;
                                return (
                                    <div key={columnId}>
                                        <h4 className="text-center border-b pb-3 mb-5 font-bold">{name} ({tasks.length})</h4>
                                        {
                                            tasks.length ? 
                                            <div className="grid grid-cols-1 gap-3">
                                                {
                                                    tasks.map(task => {
                                                        const {title, description, status, dueDate} = task;

                                                        return (
                                                            <div key={taskId} className="p-3 border hover:shadow-xl gap-4 rounded-md">
                                                                <h5 className="font-semibold">{title}</h5>
                                                                <p className="text-sm text-gray-400">{description}</p>
                                                                {/* <p>{status}</p> */}
                                                                <p>Due: {dueDate}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div> 
                                            : "Add Task"
                                        }
                                    </div>
                                )
                            })
                        }
                    </div> : 'no board found!'
                }
            </div>
        </section>
    );
};

export default KanbanBody;