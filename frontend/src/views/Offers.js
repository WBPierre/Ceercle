import NavBar from "../components/containers/navbar/NavBar"
import Container from "@mui/material/Container";
import ProductPresentation from "../components/containers/home/ProductPresentation";
import DescriptionList from "../components/containers/home/DescriptionList";
import Demo from "../components/molecules/home/Demo";
import Footer from "../components/containers/footer/Footer";
import OffersIntro from "../components/molecules/offers/OffersIntro";
import Operations from "../components/containers/home/Operations";
import OfferDescription from "../components/containers/offers/OfferDescription";

function Offers(){
    return(
        <Container maxWidth={false} disableGutters={true}>
            <NavBar/>
            <div style={{marginTop:'10%'}}/>
            <OffersIntro/>
            <div style={{marginTop:'5%'}}/>
            <divider/>
            <OfferDescription/>
            <div style={{marginTop:'5%'}}/>
            <Footer/>
        </Container>
    )
}

export default Offers;