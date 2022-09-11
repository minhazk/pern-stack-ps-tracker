import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BiNote } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import { CgTrashEmpty } from 'react-icons/cg';

const SideBarLink = ({ name, path, icon }: { name: string; path: string; icon: ReactNode }) => {
    return (
        <Link to={path} className='flex items-center gap-2 py-2 pl-5 rounded hover:bg-slate-200'>
            {icon}
            <p className='text-sm'>{name}</p>
        </Link>
    );
};

const Sidebar = () => {
    return (
        <aside className='min-h-full0 py-16 px-3 min-w-[200px] w-1/6 max-w-xs bg-slate-50 border-0 border-r border-r-slate-200'>
            <div>
                <SideBarLink name='Home' path='/' icon={<AiOutlineHome />} />
                <SideBarLink name='Notes' path='/notes' icon={<BiNote />} />
                <SideBarLink name='Budget' path='/budget' icon={<MdAttachMoney />} />
                <SideBarLink name='Bin' path='/home' icon={<CgTrashEmpty />} />
            </div>
        </aside>
    );
};

export default Sidebar;
