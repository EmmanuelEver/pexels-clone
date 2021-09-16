import style from "../../styles/searchTags.module.scss"
import TabletItem from "../ui/tabletItem"
const SearchTags = ({tags}) => {
    return (
        <div className={style.searchTags}>
            {
                tags.map((tag, idx) => <TabletItem key={idx} image={tag.image} label={tag.label} link={`/search/${tag.slug}`} tag={tag}/>)
            }
        </div>
    )
}

export default SearchTags
