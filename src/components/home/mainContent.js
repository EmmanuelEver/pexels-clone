import mainTabs from '../../lib/data/main-tabs'
import Tabs from '../ui/tabs'
import style from '../../styles/mainContent.module.scss'
import { useEffect, useReducer, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import PhotoItem from '../ui/photoItem';

const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'addPhotos':
            return {...state, next:payload.next, photos:[...state.photos, ...payload.photos]}
    }
    return state;
}


const MainContent = ({resource}) => {
    // const [data, setData] = useState(resource);
    const [data, dispatch] = useReducer(reducer, { photos:resource.photos, page:resource.page, perPage:resource.per_page, next: resource.next_page})
    const [columnSize, setColumnSize] = useState(3)
    const fetchData = async () => {
        const PEXEL_KEY = process.env.PEXEL_API;
        const resp = await fetch(data.next, {method : 'GET', headers: {Accept: 'application/json', Authorization: PEXEL_KEY }});
        const respData = await resp.json();
        dispatch( { type: "addPhotos", payload: {photos:respData.photos, page:respData.page, perPage:respData.per_page, next: respData.next_page} } );
        [...Array(columnSize)].map((_, i) => {
            data.photos.slice((i * (data.photos.length / columnSize)), ((data.photos.length / columnSize) * i+1)).map((photo) => {
            })
        })
    }
    const reportWindowSize = () => {
        
        if(window.innerWidth >= 1900) setColumnSize(4);
        else if(window.innerWidth >= 1080 && window.innerWidth < 1900) setColumnSize(3);
        else if(window.innerWidth < 1079) setColumnSize(2);
    }

    const gallery = []

    useEffect(() => {
        reportWindowSize();
        window.onresize = reportWindowSize;
    }, [])

    return (
        <div className={style.wrapper}>
            <Tabs tabs={mainTabs} />
            <div className={style.mainContent}>
                <div className={style.mainContent__header}>
                    <h2>
                        Free Stock Photos
                    </h2>
                </div>
                <div className={style.mainContent__body}>
                    <InfiniteScroll
                        dataLength={data.photos.length} //This is important field to render the next data
                        next={fetchData}
                        hasMore={true}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                            </p>
                        }
                        className={style.grid}
                    >
                        {
                            [...Array(columnSize)].map((_, i) => {
                                return <div key={i} className={style.photoColumn}>
                                            {
                                                data.photos.slice(Math.floor(i * (data.photos.length / columnSize)), Math.floor((data.photos.length / columnSize) * (i+1))).map((photo) => (
                                                    <PhotoItem
                                                        key={photo.id}
                                                        baseUrl="/"
                                                        photo={photo}
                                                    />
                                                ))
                                            }
                                        </div>
                            })
                        }
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    )
}

export default MainContent
