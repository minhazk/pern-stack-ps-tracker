import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BiNote } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import { IconContext } from 'react-icons';

const SideBarLink = ({ name, path, icon }: { name: string; path: string; icon: ReactNode }) => {
    return (
        <Link to={path} className='flex items-center gap-2 py-4 sm:py-2 sm:pl-5 rounded hover:bg-slate-200'>
            <IconContext.Provider value={{ size: '20px' }}>{icon}</IconContext.Provider>
            <p className='text-sm hidden sm:block'>{name}</p>
        </Link>
    );
};

const Sidebar = () => {
    return (
        <aside className='min-h-full py-16 px-3 sm:min-w-[200px] sm:w-1/6 max-w-xs bg-slate-50 border-0 border-r border-r-slate-200'>
            <div>
                <SideBarLink name='Home' path='/' icon={<AiOutlineHome />} />
                <SideBarLink name='Notes' path='/notes' icon={<BiNote />} />
                <SideBarLink name='Budget' path='/budget' icon={<MdAttachMoney />} />
            </div>
        </aside>
    );
};

export default Sidebar;
