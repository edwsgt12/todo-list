import { use, useEffect, useState } from "react";
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";
import TaskInput from "./TaskImput";
import TaskList from "./TaskList";

export interface ITask {
    id: number;
    tx_name: string;
    st_status: boolean;
}

const API_URL = import.meta.env.VITE_TODO_LIST_API;
const GET_LIST_URL = `${API_URL}/getToDoList`;
const INSERT_LIST_URL = `${API_URL}/insertToDoList`;
const UPDATE_LIST_URL = `${API_URL}/updateToDoList`;

const TaskManager = () => {
    const [task, setTask] = useState<ITask[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchTasks = async () => {
        setLoading(true);
        try {
            const res = await fetch(GET_LIST_URL);
            console.log ("res", res);
            const data = await res.json();

           if (data.list) setTask(data.list);
        } catch (e) {
            console.error("Error fetching tasks", e);
        } finally {
            setLoading(false);
        }   
    };

    useEffect(() =>  {
        fetchTasks();
    }, []);

    const addTask = async (title: string) => {
        const newTask = {
            id: task.length + 1,
            tx_name: title,
            st_status: false,
        };
        setTask([...task, newTask]);
    };

    const toggleTaskCompletion = (id: number) => {
        setTask(
            task.map((task)=>
            task.id === id ? {...task, st_status: !task.st_status }: task
        )
     );
    };

    return (
        <div className="flex flex-col items-center gap-y-6 p-6 max-w-md mx-auto bg-white rounded-x1 shadow-lg min-w-[40%]">
            <h1 className="text-3x1 font-bold text-indigo-700">Gestor de tareas</h1>

            <TaskInput addTask={addTask}/>

            <TaskList tasks={task} toggleTaskCompletion={toggleTaskCompletion}/>
        </div>
    );
}; 

export default TaskManager;