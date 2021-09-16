import { useEffect, useReducer, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import VideoItem from "../ui/videoItem";
import style from "../../styles/searchContent.module.scss";

const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'addVideos':
            return {...state, next:payload.next, videos:[...state.videos, ...payload.videos]}
        case 'newData': 
            return {...payload, next:payload.next, videos:payload.videos}
    }
    return state;
}

const SearchVideoContent = ({resource, queryString}) => {
    const [data, dispatch] = useReducer(reducer, { videos:resource.videos, page:resource.page, perPage:resource.per_page, next: resource.next_page})
    const [columnSize, setColumnSize] = useState(3)
    const fetchData = async () => {
        const PEXEL_KEY = process.env.PEXEL_API;
        const resp = await fetch(data.next, {method : 'GET', headers: {Accept: 'application/json', Authorization: PEXEL_KEY }});
        const respData = await resp.json();
        // console.log(respData.next_page);
        dispatch( { type: "addVideos", payload: {videos:respData.videos, page:respData.page, perPage:respData.per_page, next: respData.next_page} } );
        [...Array(columnSize)].map((_, i) => {
            data.videos.slice((i * (data.videos.length / columnSize)), ((data.videos.length / columnSize) * i+1)).map((video) => {
            })
        })
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
    useEffect(() => {
        console.log("new resource")
        dispatch({ type: "newData", payload: {videos:resource.videos, page:resource.page, perPage:resource.per_page, next: resource.next_page} })
    }, [resource])
    return (
        <section style={style.searchContent}>
            <div className={style.searchContent__main}>
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
    )
}

export default SearchVideoContent
