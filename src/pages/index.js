import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import FullPhoto from '../components/home/fullPhoto';
import Hero from '../components/home/hero'
import MainContent from '../components/home/mainContent';
import Modal from '../components/ui/Modal';
import useClickOutside from '../hooks/useClickOutside';



export default function Home({resource}) {
  const router = useRouter();
  const closePhotoModal = () => router.push("/");
  const nodeRef = useClickOutside(closePhotoModal);


  return (
    <>
      <Hero/>
      <MainContent resource={resource}/>
      {
        !!router.query.photoId && 
          <Modal ref={nodeRef} closeHandler={closePhotoModal}> 
            <FullPhoto photoId={router.query.photoId} />
          </Modal>
      }
    </>
  )
}


export async function getServerSideProps() {
  const resp = await fetch("https://api.pexels.com/v1/curated?per_page=60",{ method: 'GET', headers : { Accept: 'application/json', Authorization: process.env.PEXEL_API }});
  const resource = await resp.json();
  return {
    props : {resource}
  }
}