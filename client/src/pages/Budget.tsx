import BudgetList from '../components/Budget/BudgetList';
import { BudgetContextProvider } from '../context/BudgetContext';

const Budget = () => {
    return (
        <BudgetContextProvider>
            <div className='py-10 px-5 w-full'>
                <h1 className='text-2xl'>Budget</h1>

                <BudgetList />
            </div>
        </BudgetContextProvider>
    );
};

export default Budget;
