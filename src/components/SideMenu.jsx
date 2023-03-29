import React, { useState } from 'react';

const SideMenu = () => {
  const [navbarChange, setNavbarChange] = useState(false);
  window.addEventListener('scroll', function (event) {
    let top = this.scrollY;
    top > 50 ? setNavbarChange(true) : setNavbarChange(false);
  });
  return (
    <div className="fixed h-screen w-24 top-1/2 -translate-y-1/2 py-12 ">
      <div className={`h-full text-white bg-opacity-20 gap-2 mt-8 flex flex-col justify-around items-center px-2 py-8 transition duration-300 ${navbarChange ? 'bg-black' : 'bg-white '}`}>
        <div className="-rotate-90 hover:rotate-0 transition duration-150 border p-1 cursor-pointer w-32 text-center">
          <p className="text-sm">About</p>
        </div>

        <div className="w-10 border border-[#ff9a66]"></div>

        <div className="-rotate-90 hover:rotate-0 transition duration-150 border p-1 cursor-pointer w-32 text-center">
          <p className="text-sm">Skill</p>
        </div>

        <div className="w-10 border border-[#ff9a66]"></div>

        <div className="-rotate-90 hover:rotate-0 transition duration-150 border p-1 cursor-pointer w-32 text-center">
          <p className="text-sm">Project</p>
        </div>
        <div className="w-10 border border-[#ff9a66]"></div>

        <div className="-rotate-90 hover:rotate-0 transition duration-150 border p-1 cursor-pointer w-32 text-center">
          <p className="text-sm">Components</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
