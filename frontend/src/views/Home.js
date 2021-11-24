import NavBar from "./../components/containers/navbar/NavBar"
import Container from "@mui/material/Container";
import ProductPresentation from "../components/containers/home/ProductPresentation";
import DescriptionList from "../components/containers/home/DescriptionList";
import Demo from "../components/molecules/home/Demo";
import Footer from "../components/containers/footer/Footer";
import Intro from "../components/molecules/home/Intro";
import Operations from "../components/containers/home/Operations";

function Home(){
    return(
        <Container maxWidth={false} disableGutters={true}>
            <NavBar/>
            <Intro/>
            <div style={{marginTop:'5%'}}/>
            <ProductPresentation/>
            <div style={{marginTop:'5%'}}/>
            <DescriptionList/>
            <div style={{marginTop:'5%'}}/>
            <Operations/>
            <div style={{marginTop:'10%'}}/>
            <Demo/>
            <Footer/>
        </Container>
    )
}

export default Home;