import React from "react";
import Link from "next/link";
import { HomeIcon, AramIcon } from "../../public/icons/NavbarIcons";

const Navbar = () => {
    return (
        <div>
            <nav className="fixed top-8 left-16 h-3/4 w-20 bg-gray-800 bg-opacity-80 text-white flex flex-col items-start p-5 rounded-full z-20 border border-black">
            <Link href="/" className="rounded mb-4 transition-colors duration-300 group"> 
            <HomeIcon />
            </Link>
            <Link href="/homepage" className="rounded mb-4 transition-colors duration-300 group"> 
            <HomeIcon />
            </Link>
            <Link href="/aramrandom" className="rounded mb-4 transition-colors duration-300 group">
            <AramIcon />
            </Link>
            <Link href="/members" className="rounded mb-4 transition-colors duration-300 group">
            <HomeIcon />
            </Link>
            <Link href="/abouts" className="rounded mb-4 transition-colors duration-300 group">
            <HomeIcon />
            </Link>
        </nav>
        </div>
    );
}

export default Navbar;