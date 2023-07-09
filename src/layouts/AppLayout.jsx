import './AppLayout.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div className='outlet-w'>
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
