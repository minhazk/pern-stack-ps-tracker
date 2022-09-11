import Note, { NoteProps } from './Note';
import { AnimatePresence, motion } from 'framer-motion';
import { useNoteContext } from '../../context/NoteContext';

const NoteList = () => {
    const { notes } = useNoteContext();

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='mt-5 grid auto-rows-fr gap-6'
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr)' }}
            >
                {(notes ?? []).map((note: NoteProps) => (
                    <Note key={note.id} {...note} />
                ))}
            </motion.div>
        </AnimatePresence>
    );
};

export default NoteList;
