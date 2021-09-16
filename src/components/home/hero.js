import Image from 'next/image';
import Link from 'next/link'
import suggestedSearch from '../../lib/data/suggestedSearch';
import style from '../../styles/hero.module.scss';
import SearchBar from '../SearchBar';

const Hero = () => {
    return (
        <header className={style.hero}>
            <div className="hero__background">
                <Image src="/images/pexels-hero-bg2x.jpeg" alt="background image" layout="fill" objectFit="cover" objectPosition="center"/>
            </div>
            <div className={style.hero__content}>
                <h1>
                    The best free stock photos & videos shared by talented creators.
                </h1>
                <SearchBar type="photos" />
                <div className={style.suggestion}>
                <h5>Suggested:</h5>
                <ul>
                    {
                        suggestedSearch.photos.map((query) => (
                            <li  key={query}>
                                <Link href={`/search/${query}`}>
                                    <a>{query},</a>
                                </Link>
                            </li>
                        ))
                    }
                    <li>
                        <Link href="/popular-searches">
                            <a>
                                more
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
            <div className={style.hero__footer}>
                <div>
                    <Link href="/photo/cold-beach-woman-art-5859220/">
                        <a>
                            Photo by Taryn Elliott
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Hero
