import Image from "next/image"
import style from "../../styles/photoPage.module.scss"
import Button from "../ui/button"

const PhotoPage = ({resource}) => {
    return (
        <section className={style.photoPage}>
            <div className={style.photoPage__header}>
                <div className={style.photoPage__header__owner}>
                    <div className={style.photoPage__header__owner__info}>
                        <div className={style.photoPage__header__owner__info__avatar}>
                            <Image width={50} height={50} src={`/images/avatars/avatar-${Math.floor((Math.random() * 7) + 1)}.svg`} alt={resource.photographer} layout="responsive" quality={1} objectFit="cover"/>
                        </div>
                        <div className={style.photoPage__header__owner__info__name}>
                            <h6>{resource.photographer}</h6>
                            <small>{Math.floor((Math.random() * 500) + 1)} followers</small>
                        </div>
                    </div>
                    <div className={style.photoPage__header__owner__follow}>
                        <Button>follow</Button>
                    </div>
                </div>
                <div className={style.photoPage__header__actions}>
                    <div className={style.photoPage__header__actions__item}>
                        <Button 
                        Icon={<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg></i>}
                        > 
                            {Math.floor((Math.random() * 100) + 1)} Likes
                        </Button>
                    </div>
                    <div className={style.photoPage__header__actions__item}>
                        <Button 
                            Icon={<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></i>}
                        >
                            Collect
                        </Button>
                    </div>
                    <div className={style.photoPage__header__actions__item}>
                        <Button primary> Free Download </Button>
                    </div>
                </div>
            </div>
            <div className={style.photoPage__body}>
                <div className={style.photoPage__body__mainFrame}>
                    <Image 
                        width={resource.width}
                        height={resource.height}
                        src={resource.src.original}
                        alt={resource.photographer}
                        layout="responsive"
                        objectFit="contain"
                        objectPosition="center"
                    />
                </div>
                <div className={style.photoPage__body__info}>
                    <div className={style.photoPage__body__info__stats}>
                        <div className={style.photoPage__body__info__stats__item}>
                        <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg></i>
                        {Math.floor((Math.random() * 100000) + 1)}
                        Views
                        </div>
                        <div className={style.photoPage__body__info__stats__item}>
                        <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></i>
                        Free to use
                        </div>
                    </div>
                    <div className={style.photoPage__body__info__actions}>
                        <div className={style.photoPage__body__info__actions__item}>
                            <Button Icon={<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></svg></i>}>
                                Share
                            </Button>
                        </div>
                        <div className={style.photoPage__body__info__actions__item}>
                            <Button Icon={<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg></i>}>
                                Info
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PhotoPage;
