import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import Image from 'next/image'

export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleHamburgerButton = () => {
    document.querySelector("#hamburger").classList.toggle("hamburger-active");
    document.querySelector("#menu").classList.toggle("hidden");
  };

  const handlesetDarkMode = () => {

    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.body.classList.remove("bg-dark");
      document.getElementById("btnDarkMode").innerHTML =
        '<Image width="35" height="35" src="/img/sun.png" />';
    }
    
    if(theme === 'light') {
        document.body.classList.remove("bg-light");
        document.body.classList.add("bg-dark");
        document.getElementById("btnDarkMode").innerHTML =
        '<Image width="35" height="35" src="/img/moon.png" />';
    }

  };

  useEffect(() => {
    window.onscroll = function () {
      const header = document.querySelector("header");
      const fixedHeader = header.offsetTop;

      if (window.pageYOffset > fixedHeader) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    const darkMode = () => {
      if (theme === "dark") {
        document.body.classList.add("bg-dark");
        document.getElementById("btnDarkMode").innerHTML =
          '<Image width="35" height="35" src="/img/moon.png" />';
      } 
      else {
        document.getElementById("btnDarkMode").innerHTML =
          '<Image width="35" height="35" src="/img/sun.png" />';
        document.body.classList.remove("bg-dark");
      }

      if(theme === 'system') {
        setTheme('light')
      }
    }
    darkMode()

  }, []);

  return (
    <header className="bg-transparent dark:bg-semidark absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="/"
              className="font-bold text-lg font-extrabold dark:text-white text-primary block py-6"
            >
              piXEL
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              onClick={handleHamburgerButton}
              type="button"
              className="block absolute right-16 lg:hidden"
            >
              <span className="origin-top-left hamburger-line transition duration-500 ease-in-out"></span>
              <span className="hamburger-line transition duration-500 ease-in-out"></span>
              <span className="origin-bottom-left hamburger-line transition duration-500 ease-in-out"></span>
            </button>

            <nav
              id="menu"
              className="hidden absolute py-5 bg-white dark:bg-semidark shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#"
                    className="text-base text-slate-900 py-2 mx-8 hover:text-primary dark:hover:text-slate-400 dark:text-slate-100 flex lg:inline-flex"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="text-base text-slate-900 py-2 mx-8 hover:text-primary dark:hover:text-slate-400 dark:text-slate-100 flex lg:inline-flex"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="text-base text-slate-900 py-2 mx-8 hover:text-primary dark:hover:text-slate-400 dark:text-slate-100 flex lg:inline-flex"
                  >
                    Contact Person
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="px-4">
            <button
                id="btnDarkMode"
                type="button"
                className="block"
                onClick={handlesetDarkMode}
            >
                <Image width="35" height="35" src="/img/sun.png" />
              </button>
          </div>
        </div>
      </div>
    </header>
  );
}
