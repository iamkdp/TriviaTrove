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

        <button onClick={toggleTheme} className="px-4 py-2 absolute top-28 right-4 rounded-lg border border-blue-300 text-blue-300 bg-primary hover:bg-blue-300 hover:text-black transition duration-300 ">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}
export default ToggleTheme;
