import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Budget from './pages/Budget';

const App = () => {
    return (
        <div className='min-h-screen flex'>
            <Sidebar />
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/notes' element={<Notes />} />
                    <Route path='/budget' element={<Budget />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
