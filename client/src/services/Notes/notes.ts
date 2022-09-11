import { NoteProps } from '../../components/Notes/Note';
import makeRequest from '../makeRequest';

const getNotes = () => {
    return makeRequest('/notes');
};

const createNote = (note: NoteProps) => {
    return makeRequest('/notes', {
        method: 'POST',
        data: note,
    });
};

const deleteNote = (id: string) => {
    return makeRequest(`/notes/${id}`, {
        method: 'DELETE',
    });
};

export { getNotes, createNote, deleteNote };
