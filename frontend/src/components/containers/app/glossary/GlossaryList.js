import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ProfileDefault from "../../../../assets/images/example/default.png";

export default function GlossaryList(props) {

    const options = props.users.map((option) => {
        const firstLetter = option.lastName[0].toUpperCase();
        return {
            firstLetter: firstLetter,
            ...option,
        };
    });

    const firstLetters = [...new Set(options.map(item => item.firstLetter))].sort();

    const onClickUser = (newUser) => {
        props.newUserToDisplay(newUser);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 350, maxHeight: '60vh', overflow: 'scroll' }}>
            {firstLetters.map((firstLetter) => { //eslint-disable-line
                const filtered_options = options.filter(x => x.firstLetter.includes(firstLetter) && (x.firstName.toLowerCase().startsWith(props.searchValue.toLowerCase()) || x.lastName.toLowerCase().startsWith(props.searchValue.toLowerCase())))
                if (filtered_options.length > 0) {
                    return (
                        <li key={`section-${firstLetter}`}>
                            <ul style={{ padding: 0 }}>
                                <Divider style={{ background: '#FDFCFC' }} />
                                <ListItem style={{ fontSize: 15, maxHeight: 35, backgroundColor: "#F7F4FD" }}>{firstLetter} </ListItem>
                                <Divider style={{ background: '#FDFCFC' }} />
                                {filtered_options.map((collegue, index) => {
                                    return (
                                        <ListItem button onClick={() => onClickUser(collegue)} key={`item-${firstLetter}-${index}`}>
                                            <ListItemAvatar>
                                                <Avatar src={collegue.profilePicturePath === null ? ProfileDefault : collegue.profilePicturePath} sx={{ width: 45, height: 45 }} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={collegue.firstName + " " + collegue.lastName}
                                                primaryTypographyProps={{ style: { fontWeight: 500, fontSize: 18 } }}
                                                secondary={
                                                    collegue.position
                                                }
                                                secondaryTypographyProps={{ style: { fontSize: 15 } }}
                                            />
                                        </ListItem>
                                    )
                                })
                                }
                            </ul>
                        </li>
                    )
                }
            })
            }

            <Divider variant="inset" component="li" />
        </List >
    );
}
