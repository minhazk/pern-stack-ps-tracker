import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const InputOptionsContainer = ({ children }: { children: ReactNode }) => {
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='bg-blue-100 mt-3 rounded p-4 flex justify-between items-center flex-wrap gap-4'
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default InputOptionsContainer;
