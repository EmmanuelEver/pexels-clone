import Link from 'next/link'
import suggestedSearch from '../../lib/data/suggestedSearch';
import style from '../../styles/hero.module.scss';
import SearchBar from '../SearchBar';

const videoHero = () => {
    return (
        <header className={style.hero}>
            <div className={style.hero__background}>
                <video autoPlay loop muted poster="https://www.pexels.com/assets/videos/free-videos-7daa2ef41a140f70c757ce91913a4ecb90570b7d7cd2b401bae868350e02c83a.jpg">
                    <source src="/videos/pexels-hero-video.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className={style.hero__content}>
                <h1>
                    The best free stock photos & videos shared by talented creators.
                </h1>
                <SearchBar video/>
                <div className={style.suggestion}>
                <h5>Suggested:</h5>
                <ul>
                    {
                        suggestedSearch.videos.map((query) => (
                            <li  key={query}>
                                <Link href={`/search/videos/${query}`}>
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

export default videoHero
