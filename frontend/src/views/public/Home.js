import NavBar from "../../components/containers/public/navbar/NavBar"
import Container from "@mui/material/Container";
import ProductPresentation from "../../components/containers/public/home/ProductPresentation";
import OfferDescription from "../../components/containers/public/home/OfferDescription";
import Demo from "../../components/containers/public/home/Demo";
import Footer from "../../components/containers/public/footer/Footer";
import Intro from "../../components/containers/public/home/Intro";
import Operations from "../../components/containers/public/home/Operations";
import {useContext} from "react";
import {UserContext} from "../../components/context/auth/AuthProvider";

function Home(){

    return(
        <Container maxWidth={false} disableGutters={true}>
            <NavBar/>
            <Intro/>
            <ProductPresentation/>
            <OfferDescription/>
            <Operations/>
            <Demo/>
            <Footer/>
        </Container>
    )
}
/*

 */

export default Home;