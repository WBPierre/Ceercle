import {useTranslation} from "react-i18next";
import GridModule from "../../containers/home/GridModule";
import UserInterfaceElement from "../../molecules/home/UserInterfaceElement";



function UserInterfaceList(){
    
    const { t } = useTranslation();

    return(
        <GridModule direction="row">
            <UserInterfaceElement title={ t("home:UserInterface.web") } text="texte ?"/>
            <UserInterfaceElement title={ t("home:UserInterface.mobile") } text="texte ?" />
            <UserInterfaceElement title={ t("home:UserInterface.sirh") } text="texte ?" />
        </GridModule>   
    )
}

export default UserInterfaceList;