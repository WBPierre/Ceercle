import {Avatar, Button, Collapse, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {useState} from "react";
import List from "@mui/material/List";
import RoomModal from "./RoomModal";


function ElementChildren(props){

    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);

    const handleCloseModal = () => setOpenModal(false);

    const handleClick = () => {
        setOpen(!open);
    };


    function getType (type){
        switch(type){
            case 0:
                return "Floor";
            case 1:
                return "Room";
        }
    }

    function generateIndent(){
        let text = "";
        for(let i = 0; i < props.indent; i++){
            text+=" - ";
        }
        return text;
    }



    return(
        <div key={props.index}>
            <RoomModal open={openModal} handleCloseModal={handleCloseModal} room={props.data}/>
            <ListItem divider={true}>
                <ListItemText primary={generateIndent() + props.data.name} />
                <ListItemText primary={getType(props.data.type)} />
                <ListItemText primary={`${props.data.capacity} pers.`} />
                <ListItemAvatar>
                    <Avatar style={{backgroundColor:props.data.color !== "" ? props.data.color : 'transparent', fontSize: 10}}>{props.data.color}</Avatar>
                </ListItemAvatar>
                {props.data.type !== 1 && props.data.elements.length !== 0 &&
                    <ListItemAvatar style={{margin:5}}><Button variant={"contained"} color={"primary"} onClick={handleClick}>See child</Button></ListItemAvatar>
                }
                {props.data.type === 1 ? (
                    <ListItemAvatar style={{margin:5}}><Button variant={"contained"} color={"info"} onClick={() => handleOpenModal()}>Manage room</Button></ListItemAvatar>
                ):(
                    <ListItemAvatar style={{margin:5}}><Button variant={"contained"} color={"info"} onClick={() => props.handleAddChild(props.data.id)}>Add Child</Button></ListItemAvatar>
                )}
                <ListItemAvatar style={{margin:5}}><Button variant={"contained"} color={"warning"} onClick={() => props.handleUpdate(props.data)}>Update</Button></ListItemAvatar>
                <ListItemAvatar style={{margin:5}}><Button variant={"contained"} color={"error"} onClick={() => props.handleDelete(props.data.id)}>Delete</Button></ListItemAvatar>
                {props.data.elements.length !== 0 ? open ? <ExpandLess /> : <ExpandMore /> : <div/>}
            </ListItem>
            {props.data.elements.length !== 0 &&
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {props.data.elements.map((item, index) => (
                            <ElementChildren indent={props.indent+1} key={index} data={item} handleUpdate={(item) => props.handleUpdate(item)} handleAddChild={(id) => props.handleAddChild(id)} handleDelete={(id) => props.handleDelete(id)}/>
                        ))}
                    </List>
                </Collapse>
            }
        </div>

    )
}

export default ElementChildren;