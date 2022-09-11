import { motion } from 'framer-motion';
import { timeDifference, dateFormatter } from '../../utils/dateTimeFormat';
import { FiTrash } from 'react-icons/fi';
import { useTaskContext } from '../../context/TaskContext';
import { deleteTask } from '../../services/Tasks/tasks';

export type TaskProps = {
    id?: string;
    name: string;
    createdAt: Date;
    dueDate: Date;
    completed: boolean;
};

const Task = ({ id, name, createdAt, dueDate, completed }: TaskProps) => {
    const { deleteLocalTask } = useTaskContext();

    const handleTaskDelete = async () => {
        if (!id) return;
        deleteTask(id).then(() => deleteLocalTask(id));
    };

    return (
        <motion.label className='flex justify-between items-start gap-5 cursor-pointer mobile:flex-col mobile:gap-1' htmlFor={id}>
            <div className='flex items-start gap-2'>
                <button onClick={handleTaskDelete} className='mt-1 text-red-300'>
                    <FiTrash />
                </button>
                <input type='checkbox' defaultChecked={completed} className='hidden peer' id={id} />
                <div className='min-w-[16px] aspect-square border mt-1 border-blue-500 peer-checked:bg-blue-600'></div>
                <p className='text-base leading-5 mobile:text-sm'>
                    {name} <span className='text-sm mobile:text-xs opacity-75 text-slate-400 font-light'>{timeDifference(createdAt)}</span>
                </p>
            </div>
            <div className='py-1 px-3 rounded-full bg-blue-100 text-sm text-blue-400 font-semibold w-fit whitespace-nowrap mobile:self-end mobile:text-xs'>{dateFormatter(dueDate)}</div>
        </motion.label>
    );
};

export default Task;
