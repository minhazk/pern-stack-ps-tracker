import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { NoteProps } from '../components/Notes/Note';
import { getNotes } from '../services/Notes/notes';

type NoteContextProps = {
    notes: NoteProps[];
    createLocalNote: Function;
    deleteLocalNote: Function;
};

const NoteContext = createContext({});

const useNoteContext = () => useContext(NoteContext) as NoteContextProps;

const NoteContextProvider = ({ children }: { children: ReactNode }) => {
    const [notes, setNotes] = useState<NoteProps[]>([]);

    const getNotesCb = useCallback(async () => {
        return setNotes(await getNotes());
    }, []);

    useEffect(() => {
        getNotesCb();
    }, [getNotesCb]);

    const createLocalNote = (note: NoteProps) => {
        setNotes((prev: NoteProps[]) => [...prev, note]);
    };

    const deleteLocalNote = (id: string) => {
        setNotes((prev: NoteProps[]) => prev.filter(note => note.id !== id));
    };

    return <NoteContext.Provider value={{ notes, createLocalNote, deleteLocalNote }}>{children}</NoteContext.Provider>;
};

export { useNoteContext, NoteContextProvider };
