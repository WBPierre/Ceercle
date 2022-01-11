import List from "@mui/material/List";
import CalendarListElement from "./CalendarListElement";
import {useEffect, useRef, useState} from "react";
import {Paper} from "@mui/material";


function CalendarElement(props){

    const listRef = useRef(null);
    const [hide, setHide] = useState(false);
    useEffect(() => {
        if(listRef.current.childNodes.length === 0){
            setHide(true);
        }else{
            setHide(false);
        }
    }, [props.filters]);

    return(
        <Paper style={{width:'95%', paddingLeft: '2.5%', borderRadius:'25px'}} hidden={hide}>

            <List  aria-label="main mailbox folders" dense={false} ref={listRef}>
                {props.data.type[1].length !== 0 && (props.filters.type === -1 || props.filters.type === 1) && <CalendarListElement type={1} data={props.data.type[1].filter(x => x.fullName.toLowerCase().includes(props.filters.search.toLowerCase()))} total={props.data.totalUsers}/>}
                {props.data.type[2].length !== 0 && (props.filters.type === -1 || props.filters.type === 2) && <CalendarListElement type={2} data={props.data.type[2].filter(x => x.fullName.toLowerCase().includes(props.filters.search.toLowerCase()))} total={props.data.totalUsers}/>}
                {props.data.type[3].length !== 0 && (props.filters.type === -1 || props.filters.type === 3) && <CalendarListElement type={3} data={props.data.type[3].filter(x => x.fullName.toLowerCase().includes(props.filters.search.toLowerCase()))} total={props.data.totalUsers}/>}
                {props.data.type[4].length !== 0 && (props.filters.type === -1 || props.filters.type === 4) && <CalendarListElement type={4} data={props.data.type[4].filter(x => x.fullName.toLowerCase().includes(props.filters.search.toLowerCase()))} total={props.data.totalUsers}/>}
                {props.data.type[0].length !== 0 && (props.filters.type === -1 || props.filters.type === 0) && <CalendarListElement type={0} data={props.data.type[0].filter(x => x.fullName.toLowerCase().includes(props.filters.search.toLowerCase()))} total={props.data.totalUsers}/>}
            </List>
        </Paper>
    )
}

export default CalendarElement;