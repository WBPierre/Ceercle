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
            <div style={{marginTop:'10%'}}/>
            <OffersIntro/>
            <div style={{marginTop:'5%'}}/>
            <divider/>
            <OfferDescription/>
            <div style={{marginTop:'5%'}}/>
            <OffersPerks/>
            <div style={{marginTop:'5%'}}/>
            <Footer/>
        </Container>
    )
}

export default Offers;