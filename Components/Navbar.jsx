"use client";
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const logout = () => {
    // logout logic
    router.push("/");
  };

  return (
    <div className='flex py-3 flex-wrap justify-around'>
      <h1 className='text-lg font-semibold mt-3'>Todo App</h1>
      <ul className='flex gap-[40px] text-m mt-4'>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

{pathname !== "/" && pathname !== "/Register" && (
  <button
    className="bg-red-600 py-1.5 mt-1 px-5 text-white"
    onClick={logout}
  >
    Logout
  </button>
)}


    </div>
  );
};

export default Navbar;
