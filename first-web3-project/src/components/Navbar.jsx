import { useState } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from '../assets/logo.png';


//component 
const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (

        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-10 cursor-pointer" />
                    <h5 className="ml-2 justify-center text-white">Creepto</h5>
                </div>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["market", "exchange", "tutorials", "wallets"].map((item, index) => (
                    <NavbarItem key={index + item} title={item} />
                ))}
            <li className="bg-blue-600 m-4 px-4 hover:bg-blue-800 cursor-pointer rounded-full">
                Login
            </li>
            </ul>
            <div className="flex relative">
                {toggleMenu
                    ?  (
                        <>
                            <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />

                            {toggleMenu && (
                                <ul
                                    className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                                     flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in
                                    "
                                >
                                    <li className='w-full text-xl my-2'>
                                        <AiOutlineClose onClick={()=> setToggleMenu(false)}/>
                                    </li>
                                    {["market", "exchange", "tutorials", "wallets"].map((item, index) => (
                                        <NavbarItem key={index + item} title={item} classProps="my-2 text-lg"/>
                                    ))}
                                </ul>
                            )}
                        </>
                    )
                    : <HiMenuAlt4 fontSize = {28}  className = "text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(true)}/>
                }
            </div>
        </nav>
    );
};

export default Navbar;
