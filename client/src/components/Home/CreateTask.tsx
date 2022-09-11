import { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { createTask } from '../../services/Tasks/tasks';
import { motion, AnimatePresence } from 'framer-motion';

const CreateTask = () => {
    const [value, setValue] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const { createLocalTask } = useTaskContext();

    const handleCreateTask = () => {
        if (!value) return;
        const task = {
            name: value,
            createdAt: new Date(),
            dueDate,
        };
        createTask(task)
            .then(createLocalTask)
            .then(() => setValue(''));
    };

    return (
        <>
            <input
                onInput={e => setValue((e.target as HTMLInputElement).value)}
                value={value}
                className='w-full border border-slate-200 rounded py-1 px-3 outline-none focus:border-blue-400 focus:shadow-[0_0_0_.25rem] focus:shadow-blue-200 transition-shadow'
                type='text'
            />

            {value && (
                <AnimatePresence mode='wait'>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='bg-blue-100 mt-3 rounded p-4 flex justify-between items-center'
                    >
                        <div className='flex gap-4 items-center'>
                            <p className='text-blue-800 font-semibold'>Due Date</p>
                            <input
                                value={dueDate.toISOString().substring(0, 16)}
                                onChange={e => setDueDate(new Date((e.target as HTMLInputElement).value.substring(0, 16)))}
                                type='datetime-local'
                                className='py-1 px-2 outline-none border border-blue-500 rounded'
                            />
                        </div>
                        <button onClick={handleCreateTask} className='bg-blue-800 text-white py-1 px-3 font-semibold rounded'>
                            Create
                        </button>
                    </motion.div>
                </AnimatePresence>
            )}
        </>
    );
};

export default CreateTask;
