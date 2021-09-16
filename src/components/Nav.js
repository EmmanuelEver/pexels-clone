import style from '../styles/Nav.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar';

const Nav = () => {
    const router = useRouter();
    const [navChange, setNavChange] = useState(false);

    const scrollHandler = (e) => {
        if(window.pageYOffset > 100) setNavChange(true);
        else setNavChange(false)
    }

    useEffect(() => {
        if(router.pathname === '/' || router.pathname === "/videos"){
            window.addEventListener('scroll', scrollHandler)
        }
        return () => {
            if(router.pathname === '/' || router.pathname === "/videos"){
                window.removeEventListener('scroll', scrollHandler)
            }
        }
    }, [router.pathname])

    return (
        <nav className={`${style.nav} ${(router.pathname == "/" || router.pathname == "/videos") ? style.homepage : ""} ${navChange ? style.navChange : ""} ${(router.pathname !== "/" && router.pathname !== "/videos") && style.default}`}>
            <div className={style.logo}>
                <Link href="/" passHref>
                    <a>
                        <Image src="/pexels.svg" alt="pexel logo" width="40" height="40" layout="fixed"/>
                    </a>
                </Link>
                <span>
                    <Link href="/">
                        Pexels
                    </Link>
                </span>
            </div>
            <div className={`${style.searchBar} ${navChange ? style.navChange : ""} ${(router.pathname !== "/" && router.pathname !== "/videos") && style.default}`}>
                <SearchBar />
            </div>
            <ul>
                <li>
                    <Link href="/explore">
                        <a className={style.navLink}>
                            Explore
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/license">
                        <a className={style.navLink}>
                            License
                        </a>
                    </Link>
                </li>
                {/* <li>
                    <a className={style.avatar}>
                        <Image src="" />
                    </a>
                </li> */}
                <li>
                    <Link href="/upload">
                        <a className={`btn-primary ${style.whenLoggedIn} ${style.navButton}`}>
                            Upload
                        </a>
                    </Link>
                </li>
            </ul>
            <div className={style.menu}>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                </button>
            </div>
        </nav>
    )
}

export default Nav
