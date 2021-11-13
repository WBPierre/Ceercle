import {Fade} from "@mui/material";
import {useRef} from "react";
import ObserverViewPort from "../../functions/ObserverViewPort";

function FadeInElement(props){
    const containerRef = useRef()
    const isVisible = ObserverViewPort(containerRef)
    return(
        <div ref={containerRef}>
            <Fade in={isVisible} timeout={1000}>
                {props.children}
            </Fade>
        </div>
    )
}

export default FadeInElement;