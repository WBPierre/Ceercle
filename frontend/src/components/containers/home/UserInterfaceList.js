import {useTranslation} from "react-i18next";
import GridModule from "../../containers/home/GridModule";
import UserInterfaceElement from "../../molecules/home/UserInterfaceElement";
import Container from "@mui/material/Container";



function UserInterfaceList(){
    
    const { t } = useTranslation();

    return(
        <div>
            <Container>
                <GridModule direction="row">
                    <UserInterfaceElement title={ t("home:UserInterface.web") } text="texte ?"/>
                    <UserInterfaceElement title={ t("home:UserInterface.mobile") } text="texte ?" />
                    <UserInterfaceElement title={ t("home:UserInterface.sirh") } text="texte ?" />
                </GridModule>
            </Container>
        </div>
    )
}

export default UserInterfaceList;