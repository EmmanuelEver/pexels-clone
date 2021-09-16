import Image from "next/image"
import Link from "next/link"
import style from "../../styles/tabletItem.module.scss"

const TabletItems = ({link, image, label, click}) => {
    return (
        <>
            {
                !!link ? 
                <Link href={link} as={link}>
                    <a className={style.wrapper}>
                        <div className={style.image}>
                            <Image 
                                src={image} 
                                width={50} 
                                height={50} 
                                objectFit="cover" 
                                objectPosition="center" 
                                layout="responsive" 
                            />
                        </div>
                        <span>
                            {label}
                        </span>
                    </a>
                </Link>
            :
            <div className={style.wrapper}>
                <div className={style.image}>
                    <Image 
                        src={image} 
                        width={50} 
                        height={50} 
                        objectFit="cover" 
                        objectPosition="center" 
                        layout="responsive" 
                    />
                </div>
                <span>
                    {label}
                </span>
            </div>
            }
        </>
    )
}

export default TabletItems
