import React, { useState } from 'react';


const Navbar = () => {
  
  const [navbarChange, setNavbarChange] = useState(false);
  window.addEventListener('scroll', function (event) {
    let top = this.scrollY;
    top > 50 ? setNavbarChange(true) : setNavbarChange(false);
  });
  return (
    <div className={`h-16 fixed flex items-center px-10 justify-between text-white backdrop-blur-sm w-screen  z-[999] transition duration-300 ${navbarChange ? 'bg-black bg-opacity-20 ' : ''}`}>
      asd
      <div className="flex gap-10 items-center">
        <h3 className="text-2xl">LOREM</h3>
        <h5 className="text-lg">Portofolio / hanggitya</h5>
      </div>
      <div className="flex items-center gap-10">
        <p>Home </p>
        <p>About</p>
        <p>Contact</p>
        <p>Skill</p>
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn border-none m-1 bg-[#ff6766] hover:bg-[#ff6766]">
            Change Theme
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#ff6766] rounded-box w-52 h-[248px] flex-col flex-nowrap overflow-y-scroll ">
            <li className="mb-2">
              <button className="active:bg-[#ff9a66] bg-black bg-opacity-10 flex flex-col">
                <div className="flex gap-1">
                  <div className="h-3 w-3 bg-white"></div>
                  <div className="h-3 w-3 bg-[#a49eff]"></div>
                  <div className="h-3 w-3 bg-[#3d4b92]"></div>
                  <div className="h-3 w-3 bg-[#eb667b]"></div>
                  <div className="h-3 w-3 bg-[#ff9a66]"></div>
                </div>
                <div>
                  <p>Theme 1</p>
                </div>
              </button>
            </li>
            <li className="mb-2">
              <button className="active:bg-[#ff9a66] bg-black bg-opacity-10 flex flex-col">
                <div className="flex gap-1">
                  <div className="h-3 w-3 bg-[#eb667b]"></div>
                  <div className="h-3 w-3 bg-[#3d4b92]"></div>
                  <div className="h-3 w-3 bg-[#ff9a66]"></div>
                  <div className="h-3 w-3 bg-white"></div>
                  <div className="h-3 w-3 bg-white"></div>
                  <div className="h-3 w-3 bg-white"></div>
                </div>
                <div>
                  <p>Theme 1</p>
                </div>
              </button>
            </li>
            <li className="mb-2">
              <button className="active:bg-[#ff9a66] bg-black bg-opacity-10 flex flex-col">
                <div className="flex gap-1">
                  <div className="h-3 w-3 bg-[#eb667b]"></div>
                  <div className="h-3 w-3 bg-[#3d4b92]"></div>
                  <div className="h-3 w-3 bg-[#ff9a66]"></div>
                  <div className="h-3 w-3 bg-white"></div>
                  <div className="h-3 w-3 bg-white"></div>
                  <div className="h-3 w-3 bg-white"></div>
                </div>
                <div>
                  <p>Theme 1</p>
                </div>
              </button>
            </li>
            <li className="mb-2">
              <button className="active:bg-[#ff9a66] bg-black bg-opacity-10 flex flex-col">
                <div className="flex gap-1">
                  <div className="h-3 w-3 bg-[#eb667b]"></div>
                  <div className="h-3 w-3 bg-[#3d4b92]"></div>
                  <div className="h-3 w-3 bg-[#ff9a66]"></div>
                  <div className="h-3 w-3 bg-white"></div>
                  <div className="h-3 w-3 bg-white"></div>
                  <div className="h-3 w-3 bg-white"></div>
                </div>
                <div>
                  <p>Theme 1</p>
                </div>
              </button>
            </li>
            <li className="">
              <button className="active:bg-[#ff9a66] bg-black bg-opacity-10 flex flex-col">
                <div className="flex gap-1">
                  <div className="h-3 w-3 bg-[#eb667b]"></div>
                  <div className="h-3 w-3 bg-[#3d4b92]"></div>
                  <div className="h-3 w-3 bg-[#ff9a66]"></div>
                  <div className="h-3 w-3 bg-white"></div>
                  <div className="h-3 w-3 bg-white"></div>
                  <div className="h-3 w-3 bg-white"></div>
                </div>
                <div>
                  <p>Theme 1</p>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
