import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import style from '../styles/searchBar.module.scss';
import SearchTopics from './SearchTopics';

const SearchBar = ({type}) => {
    const [queryString, setQueryString] = useState("");
    const [activeSearchBar, setActiveSearchBar] = useState(false);
    const recentSearchesREF = useClickOutside(() => setActiveSearchBar(false));
    const router = useRouter()

    const submitQuery = (e) => {
        e.preventDefault();
        if(type === "photos") {
            router.push(`/search/${queryString}`);
        }
        else {
            router.push(`/search/videos/${queryString}`);
        }

    }
    const inputHandler = (e) => {
        setQueryString(e.target.value);
    }

    
    return (
        <div className={style.wrapper}>
            <div 
                className={`${style.searchBarWrapper} ${activeSearchBar ? style.active : ""}`}
                ref={recentSearchesREF}
                onClick={() => setActiveSearchBar(true)}
                >

                <form 
                    className={style.searchBar} 
                    onSubmit={submitQuery}
                    >
                    <input 
                        type="text" 
                        name="query"
                        placeholder="Search for free photos and videos" 
                        value={queryString}
                        onChange={inputHandler}
                    />
                    <button type="submit">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        </i>
                    </button>
                </form>
                    <div className={`${style.recentSearches} ${activeSearchBar && style.show}`}>
                        <SearchTopics video/>
                    </div>
            </div>
        </div>
    )
}

export default SearchBar
