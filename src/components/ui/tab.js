import style from '../../styles/tab.module.scss';
import Link from 'next/link'

const Tab = ({name, active, link}) => {
    return (
        <div className={`${style.wrapper} ${active ? style.active : ""}`}>
            <Link href={link}>
                <a>
                    {name}
                </a>
            </Link>
        </div>
    )
}

export default Tab;
