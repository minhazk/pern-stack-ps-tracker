import { currencyFormatter } from '../../utils/currentFormat';

export type BudgetItemProps = {
    id?: string;
    name: string;
    price: number;
    count?: number;
};

const BudgetItem = ({ count, id, name, price }: BudgetItemProps) => {
    return (
        <tr className='p-4' id={id}>
            <td className='py-3 px-5 border'>{count}</td>
            <td className='py-3 px-5 border w-full'>{name}</td>
            <td className='py-3 px-5 border'>{currencyFormatter(price)}</td>
        </tr>
    );
};

export default BudgetItem;
