import mainTabs from "../../lib/data/main-tabs";
import Tabs from "../ui/tabs";
import style from '../../styles/mainContent.module.scss'
import { useEffect, useReducer, useState } from "react";
import Image from 'next/image'
import InfiniteScroll from "react-infinite-scroll-component";
import VideoItem from "../ui/videoItem";


const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'addVideos':
            return {...state, next:payload.next, videos:[...state.videos, ...payload.videos]}
    }
    return state;
}

const MainVideoContent = ({resource}) => {
    const [data, dispatch] = useReducer(reducer, {videos:resource.videos, page:resource.page, perPage:resource.per_page, next: resource.next_page})
    const [columnSize, setColumnSize] = useState(3);

    const fetchData = async () => {
        const PEXEL_KEY = process.env.PEXEL_API;
        const resp = await fetch(data.next, {method : 'GET', headers: {Accept: 'application/json', Authorization: PEXEL_KEY }});
        const respData = await resp.json();
        dispatch( { type: "addVideos", payload: {videos:respData.videos, page:respData.page, perPage:respData.per_page, next: respData.next_page} } );
    }
    const reportWindowSize = () => {
        
        if(window.innerWidth >= 1900) setColumnSize(4);
        else if(window.innerWidth >= 1080 && window.innerWidth < 1900) setColumnSize(3);
        else if(window.innerWidth < 1079) setColumnSize(2);
    }


    useEffect(() => {
        reportWindowSize();
        window.onresize = reportWindowSize;
    }, [])

    return (
        <div className={style.wrapper}>
            <Tabs tabs={mainTabs}/>
            <section className={style.mainContent}>
                <div className={style.mainContent__header}>
                    <h2>
                        Trending Free Stock Videos
                    </h2>
                </div>
                <div className={style.mainContent__body}>
                    <InfiniteScroll
                        dataLength={data.videos.length} //This is important field to render the next data
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
                                                data.videos.slice(Math.floor(i * (data.videos.length / columnSize)), Math.floor((data.videos.length / columnSize) * (i+1))).map((video) => (
                                                    <VideoItem 
                                                        key={video.id}
                                                        video={video}
                                                    />
                                                ))
                                            }
                                        </div>
                            })
                        }
                    </InfiniteScroll>
                </div>
            </section>
        </div>
    )
}

export default MainVideoContent
