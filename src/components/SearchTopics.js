import style from '../styles/searchTopics.module.scss'
import topicsData from '../lib/data/recent-topics'
import TabletItems from './ui/tabletItem'

const SearchTopics = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.recentSearches}>

            </div>
            <div className={style.searchTopicsTitle}>
                <span>
                    Trending Topics
                </span>
            </div>
            <div className={style.trendingTopics}>
                {
                    topicsData.map( ({slug, image, label}) => (
                        <TabletItems
                            key={slug} 
                            link={`/search/${slug}`}
                            image={image}
                            label={label}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SearchTopics
