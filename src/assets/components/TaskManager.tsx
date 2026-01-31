import { useState } from "react";
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";

export interface ITask {
    id: number;
    tx_name: string;
    st_status: boolean;
}

const TaskManager = () => {
    const [task, setTask] = useState<ITask[]>([]);

    const addTask = (title: string) => {
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
        </div>
    );
}; 

export default TaskManager;