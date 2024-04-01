import {Inter} from "next/font/google";
import Sports from "@/components/sports/Sports";
import Tickets from "@/components/tickets/Tickets";
import {useState} from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <>
            <div className={`${isDarkMode && 'dark'}`}>
                <button onClick={toggleTheme} className="dark:text-red-500">Toggle Theme</button>
                <Sports/>
                <Tickets/>
            </div>
        </>
    );
}
