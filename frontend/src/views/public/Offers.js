import NavBar from "../../components/containers/public/navbar/NavBar"
import Container from "@mui/material/Container";
import Footer from "../../components/containers/public/footer/Footer";
import OffersIntro from "../../components/containers/public/offers/OffersIntro";
import OffersPerks from "../../components/containers/public/offers/OffersPerks";
import OfferDescription from "../../components/containers/public/offers/OfferDescription";

function Offers(){
    return(
        <Container maxWidth={false} disableGutters={true}>
            <NavBar/>
            <OffersIntro/>
            <div style={{marginTop:'5%'}}/>
            <OfferDescription/>
            <OffersPerks/>
            <div style={{marginTop:'2%'}}/>
            <Footer/>
        </Container>
    )
}

export default Offers;