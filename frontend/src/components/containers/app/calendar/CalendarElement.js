import List from "@mui/material/List";
import CalendarListElement from "./CalendarListElement";
import {useEffect, useState} from "react";


function CalendarElement(props){

    return(
        <div style={{width:'95%', paddingLeft: '2.5%'}}>
            <List  aria-label="main mailbox folders" dense={false}>
                {props.data.type[1].length !== 0 && (props.filters.type === -1 || props.filters.type === 1) && <CalendarListElement type={1} data={props.data.type[1].filter(x => x.fullName.toLowerCase().includes(props.filters.search.toLowerCase()))} total={props.data.totalUsers}/>}
                {props.data.type[2].length !== 0 && (props.filters.type === -1 || props.filters.type === 2) && <CalendarListElement type={2} data={props.data.type[2].filter(x => x.fullName.toLowerCase().includes(props.filters.search.toLowerCase()))} total={props.data.totalUsers}/>}
                {props.data.type[3].length !== 0 && (props.filters.type === -1 || props.filters.type === 3) && <CalendarListElement type={3} data={props.data.type[3].filter(x => x.fullName.toLowerCase().includes(props.filters.search.toLowerCase()))} total={props.data.totalUsers}/>}
                {props.data.type[0].length !== 0 && (props.filters.type === -1 || props.filters.type === 0) && <CalendarListElement type={0} data={props.data.type[0].filter(x => x.fullName.toLowerCase().includes(props.filters.search.toLowerCase()))} total={props.data.totalUsers}/>}
            </List>
        </div>
    )
}

export default CalendarElement;