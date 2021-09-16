import SearchContent from "./searchContent"
import SearchTabs from "./searchTabs"
import SearchTags from "./searchTags"
import SearchTitle from "./searchTitle"
import SearchVideoContent from "./searchVideoContent"

const SearchPage = ({resource, tags, queryString, type}) => {
    return (
        <div style={{width: "100%"}}>
            <SearchTabs type={type} totalVideos={resource.videos.total_results} totalPhotos={resource.photos.total_results} queryString={queryString} />
            <SearchTitle title={queryString} />
            <SearchTags tags={tags} />
            {
                type === "photos" ?
                <SearchContent resource={resource.photos} queryString={queryString}/>
                :
                <SearchVideoContent resource={resource.videos} queryString={queryString}/>
            }
        </div>
    )
}

export default SearchPage
