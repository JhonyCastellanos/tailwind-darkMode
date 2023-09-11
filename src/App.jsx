/** First what all, configure the project
 * install and agree tailwind in the project
 * add (darkMode: "class",) in tailwind.config.js file next to (content[],)
 *
 * docs:
 * https://tailwindcss.com/docs/installation
 * https://tailwindcss.com/docs/dark-mode
 */

import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    // Set theme of the system
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  // Add class "dark" in the html
  useEffect(() => {
    theme === "dark"
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [theme]);

  // Change the with the button
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    //if property is declared with "dark:" in the start, property is apply in the dark mode. example (dark:bg-slate-900)
    <div className="h-screen flex justify-center items-center bg-white dark:bg-slate-900">
      <button
        className="bg-slate-600 px-4 py-2 rounded hover:bg-slate-900 text-white dark:bg-slate-300 dark:text-black dark:hover:bg-slate-100"
        //Execute method, change theme
        onClick={handleChangeTheme}
      >
        Change Theme
      </button>
    </div>
  );
}

export default App;
