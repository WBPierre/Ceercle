import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import * as React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

function DialogGeneric(props){
    return(
        <Dialog open={props.openState} onClose={props.onClose} TransitionComponent={Transition}>
            <DialogTitle fontWeight={600}>{props.title}</DialogTitle>
            {props.children}
        </Dialog>
    )
}

export default DialogGeneric;