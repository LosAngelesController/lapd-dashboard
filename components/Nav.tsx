'use client';
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

// import ThemeManager from "@/components/ThemeManager";

function getWindowDimensions() {
  if (typeof window != "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return {
      width: 0,
      height: 0,
    };
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window != "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
}

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  
  useEffect(()=> {
    let currTheme: string | null = localStorage.getItem('theme');
    console.log("currTheme", currTheme);
    if (currTheme != null) setTheme(currTheme);
  }, [theme])

  const updateSystemTheme = (newTheme: any) => {
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      // You can also add logic to change other system-related properties for dark mode
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      // You can also add logic to change other system-related properties for light mode
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    updateSystemTheme;
  };

  return (
    <nav className="flex">
      {/* <ThemeManager theme={theme} setTheme={setTheme} toggleTheme={toggleTheme}/> */}
          <div className="flex">
              <Image
                className='block h-16 w-auto mr-2'
                src="/Seal_of_Los_Angeles.svg.png"
                alt="Kenneth Mejia LA City Controller"
                height={32}
                width={72}
                priority={true}
                unoptimized={true}
              />
            <Link href="/">
              <Image
                className='block h-16 w-auto'
                src={`${theme === 'light' ? '/KennethMejia-logo-white-elect.png' : '/KennethMejia-logo-white-elect.png'}`}
                alt="Kenneth Mejia LA City Controller"
                height={32}
                width={72}
                priority={true}
                unoptimized={true}
              />
            </Link>
        </div>
    </nav>
  );
}
