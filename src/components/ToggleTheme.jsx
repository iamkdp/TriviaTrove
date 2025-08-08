import { use, useEffect, useState } from 'react';
const ToggleTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    }

    return (

        <button onClick={toggleTheme} className="w-auto absolute top-12 right-4 px-3 py-1
    rounded-lg
    border border-blue-400 dark:border-blue-600
    bg-blue-100 dark:bg-blue-800
    text-gray-800 dark:text-gray-200
    hover:bg-blue-200 dark:hover:bg-blue-700
    transition duration-300">
            {theme === 'dark' ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
}
export default ToggleTheme;
