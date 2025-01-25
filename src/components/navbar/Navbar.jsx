import React, { useState } from "react";

const menu = [
  {
    id: 101,
    title: "Home",
    link: "/home",
  },
  {
    id: 102,
    title: "About Us",
    link: "/about-us",
  },
  {
    id: 103,
    title: "Service",
    link: "/service",
  },
  {
    id: 104,
    title: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 105,
    title: "Pages",
    link: "/pages",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      <div className="bg-black flex items-center justify-between py-5 px-4">
        <div className="">
          <h1 className="text-white font-medium text-2xl">ReacTUI</h1>
        </div>
        <div className="hidden md:block xl:block lg:block">
          <div className="flex gap-4">
            {menu.map((item) => {
              return (
                <a className="text-white" key={item.id} href={item.link}>
                  {item.title}
                </a>
              );
            })}
          </div>
        </div>
        <div className="block md:hidden xl:hidden" onClick={toggleMenu}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-right"
            >
              <path d="M21 12H9" />
              <path d="M21 18H7" />
              <path d="M21 6H3" />
            </svg>
          </span>
        </div>
      </div>

      {toggle && (
        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
          <div className="bg-white p-4 rounded-sm shadow-sm">
            <div className="flex justify-between items-center py-2">
              <div className="font-semibold text-xl">ReacTUI</div>
              <div className="font-semibold text-xl" onClick={toggleMenu}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex flex-col gap-4">
                {menu.map((item) => {
                  return (
                    <a className="text-black" key={item.id} href={item.link}>
                      {item.title}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
