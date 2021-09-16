import PhotoPage from "../../components/photo/photoPage"
import PageWrapper from "../../components/ui/pageWrapper"

const Photo = ({resource}) => {
    console.log(resource)
    return (
        <>
            <PageWrapper>
                <PhotoPage resource={resource} />
            </PageWrapper>
        </>
    )
}

export default Photo;


export async function getServerSideProps(context) {
    const {photoId} = context.params;
    const resp = await fetch(`https://api.pexels.com/v1/photos/${photoId}`, { method: 'GET', headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
    const resource = await resp.json();

    return {
        props: {
            resource
        }
    }
}