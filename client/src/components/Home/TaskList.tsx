import Task, { TaskProps } from './Task';
import { AnimatePresence, motion } from 'framer-motion';
import { useTaskContext } from '../../context/TaskContext';

const TaskList = ({ tab }: { tab: string }) => {
    const { tasks } = useTaskContext();

    return (
        <AnimatePresence mode='wait'>
            <motion.div key={tab} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }} className='mt-5 flex flex-col gap-2'>
                {(tasks ?? []).map((task: TaskProps) => (
                    <Task key={task.id} {...task} />
                ))}
            </motion.div>
        </AnimatePresence>
    );
};

export default TaskList;
