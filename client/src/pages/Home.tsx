import { useState } from 'react';
import { motion } from 'framer-motion';
import TaskList from '../components/Home/TaskList';
import CreateTask from '../components/Home/CreateTask';
import { TaskContextProvider } from '../context/TaskContext';

const Home = () => {
    const tabs = ['Today', 'Important', 'Notes'];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <TaskContextProvider>
            <div className='py-10 px-5 w-full'>
                <h1 className='text-2xl'>Today's Tasks</h1>

                <div className='my-5'>
                    <CreateTask />
                </div>

                <div className='flex border-0 border-b'>
                    {tabs.map(tab => (
                        <button key={tab} className={`${tab === selectedTab && 'selected'} relative text-center py-2 w-full px-2`} onClick={() => setSelectedTab(tab)}>
                            {tab}
                            {tab === selectedTab ? <motion.div className='absolute -bottom-px left-0 right-0 h-px bg-blue-400' layoutId='underline' /> : null}
                        </button>
                    ))}
                </div>

                <TaskList tab={selectedTab} />
            </div>
        </TaskContextProvider>
    );
};

export default Home;
