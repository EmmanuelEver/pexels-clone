import Tag from "../ui/Tag"
import style from "../../styles/collections.module.scss";
import CollectionCard from "../ui/collectionCard";

const Collections = ({collections, tags, title}) => {
    return (
        <div className={style.collections}>
            <h3>{title}</h3>
            <div className={style.collections__tags}>
                <div className={style.collections__tags__wrapper}>
                    {
                        tags.map((tag) => (
                            <Tag key={tag} tag={tag}/>
                        ))
                    }
                </div>
            </div>
            <div className={style.collections__items}>
                <div className={style.collections__items__wrapper}>
                    {
                        collections?.map((collection) => (
                            <CollectionCard key={collection.id} collection={collection} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Collections
