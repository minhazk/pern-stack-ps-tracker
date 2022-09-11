import { useState } from 'react';
import StyledInput from '../StyledInput';
import InputOptionsContainer from '../InputOptionsContainer';
import { createNote } from '../../services/Notes/notes';
import { useNoteContext } from '../../context/NoteContext';

const CreateNote = () => {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const { createLocalNote } = useNoteContext();

    const handleCreateNote = () => {
        if (!value) return;
        const note = {
            title: value,
            description,
            createdAt: new Date(),
        };
        createNote(note)
            .then(createLocalNote)
            .then(() => {
                setValue('');
                setDescription('');
            });
    };

    return (
        <>
            <StyledInput setValue={setValue} value={value} />

            {value && (
                <InputOptionsContainer>
                    <div className='flex flex-wrap gap-4 items-center'>
                        <p className='text-blue-800 font-semibold'>Description</p>
                        <textarea
                            className='py-1 px-2 outline-none border border-blue-500 rounded resize-none'
                            onInput={e => setDescription((e.target as HTMLInputElement).value)}
                            value={description}
                        />
                    </div>
                    <button onClick={handleCreateNote} className='bg-blue-800 text-white py-1 px-3 font-semibold rounded'>
                        Create
                    </button>
                </InputOptionsContainer>
            )}
        </>
    );
};

export default CreateNote;
