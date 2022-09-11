import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { BudgetItemProps } from '../components/Budget/BudgetItem';

type BudgetContextProps = {
    budgetItems: BudgetItemProps[];
    createLocalBudgetItem: Function;
    deleteLocalBudgetItem: Function;
};

const BudgetContext = createContext({});

const useBudgetContext = () => useContext(BudgetContext) as BudgetContextProps;

const BudgetContextProvider = ({ children }: { children: ReactNode }) => {
    const [budgetItems, setBudgetItems] = useState<BudgetItemProps[]>([]);

    useEffect(() => {
        return setBudgetItems([
            {
                id: '1',
                name: 'expense 1',
                price: 250,
            },
            {
                id: '2',
                name: 'expense 2',
                price: 120,
            },
            {
                id: '3',
                name: 'expense 3',
                price: 3550,
            },
        ]);
    }, []);

    const createLocalBudgetItem = (item: BudgetItemProps) => {
        setBudgetItems((prev: BudgetItemProps[]) => [...prev, item]);
    };

    const deleteLocalBudgetItem = (id: string) => {
        setBudgetItems((prev: BudgetItemProps[]) => prev.filter(note => note.id !== id));
    };

    return <BudgetContext.Provider value={{ budgetItems, createLocalBudgetItem, deleteLocalBudgetItem }}>{children}</BudgetContext.Provider>;
};

export { useBudgetContext, BudgetContextProvider };
