import { create } from 'zustand';

interface User {
  _id: string;
  name: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => {
    // Load user from localStorage if it exists
    const savedUser = localStorage.getItem('user');
    const initialUser = savedUser ? JSON.parse(savedUser) : null;
  
    return {
      user: initialUser,
      setUser: (user) => {
        localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
        set({ user });
      },
      logout: () => {
        localStorage.removeItem('user'); // Remove user from localStorage
        set({ user: null });
      },
    };
  });
  

export default useUserStore;
