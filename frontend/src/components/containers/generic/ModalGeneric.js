import {Dialog, DialogContent, DialogTitle, Slide} from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import {forwardRef} from "react";

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} style={{backgroundColor:'#2F5597', color:'white'}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function ModalGeneric(props){

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            keepMounted
            TransitionComponent={Transition}
            fullWidth={props.fullWidth}
            maxWidth={props.maxWidth}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
                {props.title}
            </BootstrapDialogTitle>
            <DialogContent dividers>
                {props.children}
            </DialogContent>
        </Dialog>
    )
}
export default ModalGeneric;