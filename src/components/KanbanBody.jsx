import {useSelector} from "react-redux"
const KanbanBody = () => {

    const { board } = useSelector(state => state.board);
    console.log(board)
    return (
        <section className= "container section-gap-margin">
            <h1 className='text-xl lg:text-3xl xl:text-5xl font-black my-10'>Kanban body</h1>
            {
                board ? <div>
                    {
                        board[0].columns.map(column => {
                            return (
                                <div key={column.name}>{column.name}</div>
                            )
                        })
                    }
                </div> : 'no board found!'
            }
        </section>
    );
};

export default KanbanBody;