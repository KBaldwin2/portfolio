import {Outlet} from 'react-router-dom';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import ContactMe from '../ContactMe';
import {useState} from 'react';
export default function Root() {
 const [modalOpen, setModalOpen] = useState(false);

 const modalCloseHandler = () => {
    setModalOpen(false);
 }

 const modalOpenHandler = (evt) => {
   evt.preventDefault();
    setModalOpen(true);
 }

    return <><NavBar />
    {modalOpen && <ContactMe onClick={modalCloseHandler}/>}
    <Outlet />
    <Footer onClick={modalOpenHandler}/>
    </>
}