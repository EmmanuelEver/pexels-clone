import style from "../../styles/searchTabs.module.scss"
import Button from "../ui/button"

const SearchTabs = ({totalVideos, totalPhotos, queryString, type}) => {
    return (
        <div className={style.searchTabs}>
            <div className={style.searchTabs__numbers}>
                <Button 
                    Icon={<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg></i>}
                    href={`/search/${queryString}`}
                    className={`${type === "photos" && style.activeSearchTab} ${style.searchTabs__button}`}
                >
                    Photos <small>{totalPhotos}</small>
                </Button>
                <Button 
                    className={`${type === "videos" && style.activeSearchTab} ${style.searchTabs__button}`}
                    href={`/search/videos/${queryString}`}
                    Icon={<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></svg></i>}
                >
                    Videos <small>{totalVideos}</small>
                </Button>
            </div>
            <div className={style.searchTabs__filters}>
                <Button rounded className={style.searchTabs__button} Icon={<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"></path></svg></i>}>
                    Orientation
                </Button>
                <Button rounded className={style.searchTabs__button} Icon={<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path></svg></i>}>
                    Size
                </Button>
                <Button rounded className={style.searchTabs__button} Icon={<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"></path></svg></i>}>
                    Color
                </Button>
            </div>
        </div>
    )
}

export default SearchTabs;
