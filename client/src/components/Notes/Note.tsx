import { AiOutlineClose } from 'react-icons/ai';
import { useNoteContext } from '../../context/NoteContext';
import { deleteNote } from '../../services/Notes/notes';
import { dateFormatter } from '../../utils/dateTimeFormat';

export type NoteProps = {
    id?: string;
    title: string;
    description: string;
    createdAt: Date;
};

const Note = ({ id, title, description, createdAt }: NoteProps) => {
    const { deleteLocalNote } = useNoteContext();

    const handleDeleteNote = () => {
        if (!id) return;
        deleteNote(id).then(() => deleteLocalNote(id));
    };

    return (
        <div className='rounded border border-blue-200'>
            <div className='flex justify-between gap-3 bg-blue-500 text-white py-2 px-3 text-base'>
                <p>{title}</p>
                <button onClick={handleDeleteNote} className='rounded-full border border-white min-w-[25px] aspect-square flex items-center justify-center'>
                    <AiOutlineClose />
                </button>
            </div>
            <div className='p-3'>
                <p className=''>{description}</p>
                <p className='text-xs mt-2 opacity-40'>{dateFormatter(createdAt)}</p>
            </div>
        </div>
    );
};

export default Note;
