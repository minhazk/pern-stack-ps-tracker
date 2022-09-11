import { AnimatePresence, motion } from 'framer-motion';
import { useBudgetContext } from '../../context/BudgetContext';
import { currencyFormatter } from '../../utils/currentFormat';
import BudgetItem, { BudgetItemProps } from './BudgetItem';

const BudgetList = () => {
    const { budgetItems } = useBudgetContext();

    return (
        <>
            <AnimatePresence mode='wait'>
                <motion.table initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }} className='mt-5 w-full'>
                    <thead>
                        <tr>
                            <th className='border border-blue-400 py-2 px-2 bg-blue-200'>#</th>
                            <th className='border border-blue-400 py-2 px-2 bg-blue-200'>Name</th>
                            <th className='border border-blue-400 py-2 px-2 bg-blue-200'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(budgetItems ?? []).map((item: BudgetItemProps, i: number) => (
                            <BudgetItem key={item.id} count={i} {...item} />
                        ))}
                    </tbody>
                </motion.table>
            </AnimatePresence>

            <div className='mt-5 flex justify-between gap-4 items-center py-2 px-5 border'>
                <p className='text-lg font-semibold'>Total</p>
                <p className='font-bold text-blue-800'>{currencyFormatter(budgetItems.reduce((prev, next) => prev + next.price, 0))}</p>
            </div>
        </>
    );
};

export default BudgetList;
