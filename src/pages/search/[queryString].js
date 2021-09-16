import SearchPage from "../../components/search/searchPage";
import PageWrapper from "../../components/ui/pageWrapper"
import recentTopics from "../../lib/data/recent-topics";



const Search = ({resource, queryString}) => {

    return (
        <>
        <PageWrapper>
            <SearchPage resource={resource} type="photos" tags={recentTopics} queryString={queryString}/>
        </PageWrapper>
        </>
    )
}

export default Search;

export async function getServerSideProps(context){
    const {queryString} = context.query;
    const resp1 = await fetch(`https://api.pexels.com/v1/search?query=${queryString}&per_page=30`, { method: 'GET', headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
    const photos = await resp1.json();
    const resp2 = await fetch(`https://api.pexels.com/videos/search?query=${queryString}&per_page=30`, { method: 'GET', headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
    const videos = await resp2.json();

    return {
        props : {
            resource : {
                photos,
                videos
            },
            queryString

        }
    }
}
