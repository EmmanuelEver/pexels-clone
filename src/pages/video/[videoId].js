import VideoPage from "../../components/video/videoPage"
import PageWrapper from "../../components/ui/pageWrapper"

const Video = ({resource}) => {
    return (
        <>
            <PageWrapper>
                <VideoPage resource={resource} />
            </PageWrapper>
        </>
    )
}

export default Video;


export async function getServerSideProps(context) {
    const {videoId} = context.params;
    const resp = await fetch(`https://api.pexels.com/videos/videos/${videoId}`, { method: 'GET', headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
    const resource = await resp.json();
    return {
        props: {
            resource
        }
    }
}