import { FaCheck } from "react-icons/fa";
import type { ITask } from "./TaskManager";
 
type Props = {
    tasks: ITask[];
    toggleTaskCompletion: (id: number) => void;
};

const TaskItem = ({
    task,
    toggleTaskCompletion,
}: {
    task: ITask;
    toggleTaskCompletion: (id: number) => void;

}) => {
    return (
        <li
        key={task.id}
        onClick={()=> toggleTaskCompletion(task.id)}
        className={`p-4 flex justify-between items-center cursor-pointer transition hover:bg-gray-50 ${task.st_status ? "bg-green-50" : ""}`}>

            <div className="flex items-center gap-3">
                <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${task.st_status ? 
                "bg-green-500 border-green-500" : "border-gray-300"}`}>
                    {task.st_status && <FaCheck className="text-white text-xs"/>}
                </div>
                <span
                className={`${task.st_status ? "line-through text-gray-500" : "text-gray-800"}`}>
                    {task.tx_name}
                </span>
            </div>
        </li>
    );
};


const TaskList = ({tasks, toggleTaskCompletion }: Props) => {
    return (
        <div className="w-full bg-gray-50 rounded-lg shadow">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
                <h2 className="text-lg font-semibold text-gray-800">Tus tareas</h2>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.2 rounded-full">
                    {tasks.length} items
                </span>
            </div>

            <ul className="divide-y divide-gray-100">
                {tasks.map((task) => (
                    <TaskItem
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}/>
                ))}

                {tasks.length === 0 && (
                    <li className="p-4 text-center text-gray-500 italic">No hay tareas aun</li>
                )}
            </ul>
        </div>
    );
};

export default TaskList;