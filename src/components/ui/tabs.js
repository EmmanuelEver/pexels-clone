import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react';
import style from '../../styles/tabs.module.scss'
import Tab from './tab';

const Tabs = ({tabs}) => {
    const router = useRouter();

    return (
        <div className={style.wrapper}>
            <div className={style.tabs}>
                {
                    tabs.map(({name, link}) => (
                        <Tab
                            key={name} 
                            name={name}
                            link={link}
                            active={router.pathname === link}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Tabs
