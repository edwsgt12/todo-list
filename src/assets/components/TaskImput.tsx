import { useState } from "react";
import { FaPlus } from "react-icons/fa";

type Props = {
    addTask: (title: string) => void;
};

const TaskInput = ({ addTask }: Props) => {
    const [taskTitle, setTaskTitle] = useState("");

    const handleAddTask = () => {
        if (taskTitle.trim() === "") return;
        addTask(taskTitle);
        setTaskTitle("");
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleAddTask();
    };
    return (
        <div className="flex w-full gap-2">
            <input
            type="text"
            value={taskTitle}
            onChange={(e) =>setTaskTitle(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Nueva tarea..."
            className="flex-1 border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition w-[10%]"
            />
            <button
                onClick={handleAddTask}
                className="bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 aspect-square" 
            >
                <FaPlus />
            </button>
        </div>
    );
};

export default TaskInput;