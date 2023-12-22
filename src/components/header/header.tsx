"use client"
import Link from "next/link";
import style from './header.module.css'
import {usePathname, useRouter} from "next/navigation";
import {useEffect} from "react";




const Header = () => {

    const pathname = usePathname();

    console.log(pathname)
    return (
        <header className={style.header}>
            <Link className={` m-0 mx-2 ${pathname === '/' ? 'text-purple-500' : 'text-white'}`} href='/'>Home</Link>
            <Link className={`${pathname === '/about' ? 'text-purple-500' : 'text-white'}`} href='/about'>About</Link>
            <Link className={` ${pathname.startsWith('/users') ? 'text-purple-500' : 'text-white'}`} href='/users'>Users</Link>
            <Link className={` ${pathname.startsWith('/pokemons') ? 'text-purple-500' : 'text-white'}`} href='/pokemons'>Pokemons</Link>

        </header>
    );
};

export default Header;