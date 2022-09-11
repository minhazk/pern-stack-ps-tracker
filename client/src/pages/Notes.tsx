import CreateNote from '../components/Notes/CreateNote';
import NoteList from '../components/Notes/NoteList';
import { NoteContextProvider } from '../context/NoteContext';

const Notes = () => {
    return (
        <NoteContextProvider>
            <div className='py-10 px-5 w-full'>
                <h1 className='text-2xl'>Notes</h1>

                <div className='my-5'>
                    <CreateNote />
                </div>

                <NoteList />
            </div>
        </NoteContextProvider>
    );
};

export default Notes;
