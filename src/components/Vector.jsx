import React, { useState } from 'react';

const Vector = () => {
  const [bubbleChange, setBubbleChange] = useState(false);
  window.addEventListener('scroll', function (event) {
    let top = this.scrollY;
    document.getElementById('bubble').style.width = `${top / 2}px`;
    document.getElementById('bubble').style.height = `${top / 2}px`;
  });
  return (
    <>
      <div className="w-32 h-32 fixed left-1/2 bg-white opacity-10 rounded-full animate-bubble-to-br"></div>
      <div className="fixed left-32 top-20  w-56 h-56 rounded-full  bg-white opacity-10 animate-bubble-to-r"></div>
      <div className="fixed left-[600px] top-20  w-56 h-56 rounded-full  bg-white opacity-10 animate-bubble-to-b"></div>
      <div className="fixed -right-20 -bottom-20  w-96 h-96 rounded-full  bg-white opacity-10 animate-bubble-to-hug"></div>
      <div id="bubble" className="fixed left-10 bottom-10  w-96 h-96 rounded-full  bg-white opacity-5 animate-bubble-to-hug backdrop-blur-lg"></div>
    </>
  );
};

export default Vector;
