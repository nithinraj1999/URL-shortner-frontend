import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';  // Importing the logout icon from react-icons
import useUserStore from '../../store/userStore';
import { useNavigate } from 'react-router-dom';
useNavigate
const Navbar = () => {
    const navigate = useNavigate()
    const logout = useUserStore((state) => state.logout);

    const onLogout =async()=>{
        localStorage.removeItem('access_token')
        logout()
    }
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <h1 className="text-white text-xl">URL Shortner</h1>
      <button 
        className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={onLogout}
      >
        <FaSignOutAlt className="mr-2" /> 
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
