import { useState } from "react"
import Edit from '../../assets/work-img/edit.png'
import Delete from '../../assets/work-img/delete.png'

export default function TodoApp() {
    const [done, setDone] = useState<boolean[]>([])
    const [tasks, setTasks] = useState<string[]>([])
    const [next, setNext] = useState<string>('')
    const [back, setBack] = useState<boolean>(false)
    const [index, setIndex] = useState<number>(0)

    const Tasks = tasks.map((i,indx) =>
            <div className="task" key={indx}>
                <div className="flex items-center gap-[1rem]">
                    <span className={`${done[indx] && "checked-todo"}`} onClick={()=>handleDone(indx)}></span>
                    <h2 className={`${done[indx] ? "line-through" : "no-underline"} w-[10rem]`}>{i}</h2>
                </div>
                <div className="flex items-center gap-[1rem]">
                    <img src={Edit} onClick={() => handleEdit(indx)}/>
                    <img src={Delete} onClick={() => deleteTask(indx)}/>
                </div>
            </div>
    )

    const handleEdit = (n:number) => {
        setBack(true)
        setIndex(n)
    }

    const deleteTask = (n:number) => {
        const updatedTasks = tasks.filter((_, indx) => indx !== n);
        setTasks(updatedTasks);
    }

    const handleTaskChange = (index:number, newValue:string) =>{
        const updatedTasks = [...tasks];
        updatedTasks[index] = newValue;
        setTasks(updatedTasks);
    }

    const handleDone = (i:number) => {
        const arr : boolean[] = [...done];
        arr[i] = !arr[i];
        setDone(arr);
    }

    const addTask = () => {
        if(next.length){
            const arr : string[] = [...tasks];
            const don : boolean[] = [...done];
            don.push(false)
            arr.push(next)
            setTasks(arr)
            setDone(don)
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
            <h4>{done.filter(i => i === true).length}/{tasks.length}</h4>
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

        {back && 
            <div className="edit-todo flex items-center">
                <h2>Edit task</h2>
                <input type="text" value={tasks[index]} onChange={(e) => handleTaskChange(index, e.target.value)}/>
                <button onClick={()=>setBack(false)}>Save</button>

            </div>
        }
        {back && <div className="back-todo"></div>}
    </div>
  )
}
