import Collections from "../components/discover/collections";
import Tabs from "../components/ui/tabs";
import mainTabs from "../lib/data/main-tabs";
import tags from "../lib/data/tags";
import style from "../styles/discover.module.scss";

const Discover = ({resource}) => {
    return (
        <div className={style.discover}>
            <Tabs tabs={mainTabs} />
            <section className={style.discover__contents}>
                <Collections collections={resource.featuredCollections} tags={tags.featuredTags} title="Popular Collections"/>
                <Collections collections={resource.recommendedCollections} tags={tags.recommendedTags} title="Recommended For You"/>
            </section>
        </div>
    )
}

export async function getServerSideProps() {
    const featuredResp = await fetch("https://api.pexels.com/v1/collections/featured?per_page=30", {method: "GET", headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }})
    const featuredCollection = await featuredResp.json();
    const featured1Resp = await fetch(`https://api.pexels.com/v1/collections/${featuredCollection.collections[0].id}?per_page=5&type=photos`, {method: "GET", headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
    const featured1Collection = await featured1Resp.json();
    const featured2Resp = await fetch(`https://api.pexels.com/v1/collections/${featuredCollection.collections[1].id}?per_page=5&type=photos`, {method: "GET", headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
    const featured2Collection = await featured2Resp.json();
    const featured3Resp = await fetch(`https://api.pexels.com/v1/collections/${featuredCollection.collections[2].id}?per_page=5&type=photos`, {method: "GET", headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
    const featured3Collection = await featured3Resp.json();
    const recommended1Resp = await fetch(`https://api.pexels.com/v1/collections/nxmpzzt?per_page=5&type=photos`, {method: "GET", headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
    const recommended1Collection = await recommended1Resp.json();
    const recommended2Resp = await fetch(`https://api.pexels.com/v1/collections/rq03g4l?per_page=5&type=photos`, {method: "GET", headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
    const recommended2Collection = await recommended2Resp.json();
    const recommended3Resp = await fetch(`https://api.pexels.com/v1/collections/qvb4vxb?per_page=5&type=photos`, {method: "GET", headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
    const recommended3Collection = await recommended3Resp.json();
    return {
        props: {
            resource : {
                recommendedCollections: [{title: "Christmas Gifts",...recommended1Collection}, {title:"Haloween", ...recommended2Collection}, {title: "Streets At Night", ...recommended3Collection}],
                featuredCollections: [{title: featuredCollection.collections[0].title,...featured1Collection}, {title: featuredCollection.collections[1].title, ...featured2Collection}, {title: featuredCollection.collections[2].title, ...featured3Collection}]
            }
        }
    }
}

export default Discover;
