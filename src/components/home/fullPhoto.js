import PhotoPage from "../photo/photoPage"
import useSWR from 'swr'

const FullPhoto = ({photoId}) => {
    const fetcher = async () => {
        const resp = await fetch(`https://api.pexels.com/v1/photos/${photoId}`, { method: 'GET', headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }})
        const data = await resp.json();
        return data;
      }
    
    const { data, error } = useSWR('/photo', fetcher);
    
    return (
        <>
            {
                data &&
                <PhotoPage resource={data} />
            }
        </>
    )
}

export default FullPhoto
