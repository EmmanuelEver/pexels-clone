import { useRouter } from "next/dist/client/router";
import Modal from "../components/ui/Modal";
import FullVideo from "../components/video/fullVideo";
import MainVideosConent from "../components/videos/mainContent"
import VideoHero from "../components/videos/videoHero"
import useClickOutside from "../hooks/useClickOutside";

const Videos = ({resource}) => {
    const router = useRouter();
    const closePhotoModal = () => router.push("/videos");
    const nodeRef = useClickOutside(closePhotoModal);
    return (
        <>
            <VideoHero/>
            <MainVideosConent resource={resource} />
            {
                !!router.query.videoId && 
                <Modal ref={nodeRef} closeHandler={closePhotoModal}> 
                    <FullVideo videoId={router.query.videoId} />
                </Modal>
            }
        </>
    )
}

export async function getServerSideProps() {
    const resp = await fetch("https://api.pexels.com/videos/popular?per_page=40&orientation=portrait",{ method: 'GET', headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
    const resource = await resp.json();
    return {
        props : {resource}
    }
}

export default Videos
