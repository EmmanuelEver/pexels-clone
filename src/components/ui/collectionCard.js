import style from "../../styles/collectionCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const CollectionCard = ({collection}) => {
    return (
        <div className={style.card}>
            <Link href={`/collections/${collection.title.split(" ").join("-").toLowerCase()}-${collection.id}`}>
                <a>
                    <div className={style.card__gallery}>
                    <div className={style.card__gallery__big}>
                        <Image 
                            width={parseInt(collection.media[0].width)}
                            height={parseInt(collection.media[0].height)}
                            src={collection.media[0].src.original}
                            alt={collection.media[0].photographer}
                            layout="responsive"
                            objectFit="cover"
                            quality={1}
                        />
                    </div>
                    <div className={style.card__gallery__small}>
                        {
                            collection.media.slice(1,5).map(photo => (
                                <Image
                                    key={photo.id} 
                                    width={parseInt(photo.width)}
                                    height={parseInt(photo.height)}
                                    src={photo.src.small}
                                    alt={photo.photographer}
                                    layout="responsive"
                                    quality={1}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={style.card__info}>
                    <div className={style.card__info__title}>
                        <h5>
                            {collection.title}
                        </h5>
                    </div>
                    <div className={style.card__info__total}>
                        <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path></svg></i>
                        <span>{collection.total_results}</span>
                    </div>
                </div>
                </a>
            </Link>
        </div>
    )
}

export default CollectionCard
