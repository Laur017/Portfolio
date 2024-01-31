import { useState } from "react"

export default function TodoApp() {
    const [tasks, setTasks] = useState<string[]>(["task 1", "task 2"])
    const [next, setNext] = useState<string>('')

    const Tasks = tasks.map((i,indx) =>
            <div className="task" key={indx}>
                <div className="flex items-center gap-[1rem]">
                    <span></span>
                    <h2>{i}</h2>
                </div>
                <div className="flex items-center gap-[1rem]">
                    <h3>e</h3>
                    <h3>d</h3>
                </div>
            </div>
    )

    const addTask = () => {
        if(next.length){
            const arr : string[] = tasks;
            arr.push(next)
            setTasks(arr)
            setNext('')
        }
    }

  return (
    <div className="w-[50%] div-todo">
        <div className="up-todo flex items-center">
            <div>
                <h2>Todo Done</h2>
                <h3>keep it up</h3>
            </div>
            <h4>1/{tasks.length}</h4>
        </div>

        <div className="mid-todo w-[100%]">
            <input 
                type="text" 
                placeholder="write your next task"
                value={next}
                onChange={(e) => setNext(e.target.value)}    
            />
            <p 
                className="flex justify-center items-center"
                onClick={addTask}
            >
                +
            </p>
        </div>

        <div className="down-todo flex gap-[1rem]">
            {Tasks}
        </div>
    </div>
  )
}
