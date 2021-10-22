import useSWR from 'swr'
import VideoPage from './videoPage';

const FullVideo = ({videoId}) => {
    const fetcher = async () => {
        const resp = await fetch(`https://api.pexels.com/videos/videos/${videoId}`, { method: 'GET', headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }})
        const data = await resp.json();
        console.log(data);
        return data;
      }
    
    const { data, error } = useSWR('/photo', fetcher);
    
    return (
        <>
            {
                data &&
                <VideoPage resource={data} />
            }
        </>
    )
}

export default FullVideo
