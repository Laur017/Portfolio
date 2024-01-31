
export default function TodoApp() {
  return (
    <div className="w-[50%] div-todo">
        <div className="up-todo flex items-center">
            <div>
                <h2>Todo Done</h2>
                <h3>keep it up</h3>
            </div>
            <h4>1/3</h4>
        </div>

        <div className="mid-todo w-[100%]">
            <input type="text" placeholder="write your next task"/>
            <p className="flex justify-center items-center">+</p>
        </div>

        <div className="down-todo flex gap-[1rem]">
            <div className="task">
                <div className="flex items-center gap-[1rem]">
                    <span></span>
                    <h2>Task</h2>
                </div>
                <div className="flex items-center gap-[1rem]">
                    <h3>e</h3>
                    <h3>d</h3>
                </div>
            </div>
            <div className="task">
                <div className="flex items-center gap-[1rem]">
                    <span></span>
                    <h2>Task</h2>
                </div>
                <div className="flex items-center gap-[1rem]">
                    <h3>e</h3>
                    <h3>d</h3>
                </div>
            </div>
            <div className="task">
                <div className="flex items-center gap-[1rem]">
                    <span></span>
                    <h2>Task</h2>
                </div>
                <div className="flex items-center gap-[1rem]">
                    <h3>e</h3>
                    <h3>d</h3>
                </div>
            </div>
            <div className="task">
                <div className="flex items-center gap-[1rem]">
                    <span></span>
                    <h2>Task</h2>
                </div>
                <div className="flex items-center gap-[1rem]">
                    <h3>e</h3>
                    <h3>d</h3>
                </div>
            </div>
            <div className="task">
                <div className="flex items-center gap-[1rem]">
                    <span></span>
                    <h2>Task</h2>
                </div>
                <div className="flex items-center gap-[1rem]">
                    <h3>e</h3>
                    <h3>d</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
