import Link from "next/link";
import style from "../../styles/tag.module.scss"
const Tag = ({tag}) => {
    return (
        <div className={style.tag}>
            <Link href={`/search/${tag}`}>
                <a>
                    {tag}
                </a>
            </Link>
        </div>
    )
}

export default Tag
