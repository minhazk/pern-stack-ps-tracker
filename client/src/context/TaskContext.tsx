import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { TaskProps } from '../components/Home/Task';
import { getTasks } from '../services/Tasks/tasks';

type TaskContextProps = {
    tasks: TaskProps[];
    createLocalTask: Function;
    deleteLocalTask: Function;
};

const TaskContext = createContext({});

const useTaskContext = () => useContext(TaskContext) as TaskContextProps;

const TaskContextProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const getTasksCb = useCallback(async () => {
        return setTasks(await getTasks());
    }, []);

    useEffect(() => {
        getTasksCb();
    }, [getTasksCb]);

    const createLocalTask = (task: TaskProps) => {
        setTasks((prev: TaskProps[]) => [...prev, task]);
    };

    const deleteLocalTask = (id: string) => {
        setTasks((prev: TaskProps[]) => prev.filter(task => task.id !== id));
    };

    return <TaskContext.Provider value={{ tasks, createLocalTask, deleteLocalTask }}>{children}</TaskContext.Provider>;
};

export { useTaskContext, TaskContextProvider };
