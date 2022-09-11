import { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { createTask } from '../../services/Tasks/tasks';
import StyledInput from '../StyledInput';
import InputOptionsContainer from '../InputOptionsContainer';

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
            completed: false,
        };
        createTask(task)
            .then(createLocalTask)
            .then(() => setValue(''));
    };

    return (
        <>
            <StyledInput setValue={setValue} value={value} />

            {value && (
                <InputOptionsContainer>
                    <div className='flex flex-wrap gap-4 items-center'>
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
                </InputOptionsContainer>
            )}
        </>
    );
};

export default CreateTask;
