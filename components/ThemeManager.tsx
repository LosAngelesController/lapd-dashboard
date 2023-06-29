import React, { useState, useEffect } from 'react';
import {IoSunnyOutline, IoMoonOutline} from 'react-icons/io5';

interface setSystemTheme {
    theme: string;
    setTheme: any;
    toggleTheme: any;
  }
  
function ThemeManager(props: setSystemTheme) {

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    console.log("savedTheme", savedTheme);
    if (savedTheme) {
      props.setTheme(savedTheme);
    }
  }, [props, props.theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', props.theme);
  }, [props.theme]);

  return (
    <div className="theme-switcher flex">
        <IoSunnyOutline className="mr-2" style={{fontSize: '22px'}}/>
      <label htmlFor="theme-toggle" className="switch">
        <input
          type="checkbox"
          id="theme-toggle"
          checked={props.theme === 'dark'}
          onChange={props.toggleTheme}
        />
        <span className="slider"></span>
      </label>
      <IoMoonOutline className="ml-2" style={{fontSize: '22px'}}/>
    </div>
  );
}

export default ThemeManager;