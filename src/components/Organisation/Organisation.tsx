import React, {forwardRef, CSSProperties}  from "react";
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box, Button, Divider,
    withStyles
} from "@material-ui/core";
import styles from "./style";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from "@material-ui/core/Paper";


interface OrganisationProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
}

const rows = [
    {
        name: '1',
        role: 'DEFAULT POOL',
        status: 'orange'
    },
    {
        name: '2',
        role: 'DEFAULT POOL',
        status: 'green'
    },
    {
        name: '3',
        role: 'DEFAULT POOL',
        status: 'grey'
    },
    {
        name: '4',
        role: 'VFX',
        status: 'green'
    },
    {
        name: '7',
        role: 'VFX',
        status: 'grey'
    },
    {
        name: '7',
        role: 'VISUAL DEPARTMENT',
        status: 'grey'
    }
]

const Organisation = forwardRef((props: OrganisationProps, refs:any) => {
    const {
        classes,
        className,
        style
    } = props;

    return (
        <Grid className={classes.root}>
            <CssBaseline />

            <Toolbar className={classes.toolbar} component={Paper}>
                    <Typography>Organsation 1</Typography>
                    <Box className={classes.grow} />
                    <SettingsIcon className={classes.icon} />
            </Toolbar>


            <Accordion className={classes.appBar}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography className={classes.title}>DEFAULT POOL</Typography>
                    </AccordionSummary>
                {rows.map((value) => {
                    if (value.role === 'DEFAULT POOL' && value.status === 'orange') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textOrange}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarOrange}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'DEFAULT POOL' && value.status === 'green') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGreen}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGreen}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'DEFAULT POOL' && value.status === 'grey') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGrey}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGrey}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
            </Accordion>


            <Accordion className={classes.appBar} style={{margin: "0px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} style={{margin: "0px"}}>
                    <Typography className={classes.title} style={{margin: "0px"}}>VFX</Typography>
                </AccordionSummary>
                {rows.map((value) => {
                    if (value.role === 'VFX' && value.status === 'orange') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textOrange}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarOrange}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'VFX' && value.status === 'green') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGreen}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGreen}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'VFX' && value.status === 'grey') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGrey}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGrey}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
            </Accordion>


            <Accordion className={classes.appBar} style={{margin: "0px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} style={{margin: "0px"}}>
                    <Typography className={classes.title} style={{margin: "0px"}}>VISUAL DEPARTMENT</Typography>
                </AccordionSummary>
                {rows.map((value) => {
                    if (value.role === 'VISUAL DEPARTMENT' && value.status === 'orange') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textOrange}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarOrange}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'VISUAL DEPARTMENT' && value.status === 'green') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGreen}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGreen}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'VISUAL DEPARTMENT' && value.status === 'grey') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGrey}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGrey}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
            </Accordion>


            <Accordion className={classes.appBar} style={{margin: "0px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} style={{margin: "0px"}}>
                    <Typography className={classes.title} style={{margin: "0px"}}>A POOL WITH VERY LONG NA...</Typography>
                </AccordionSummary>
                {rows.map((value) => {
                    if (value.role === 'A POOL WITH VERY LONG NA...' && value.status === 'orange') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textOrange}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarOrange}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'A POOL WITH VERY LONG NA...' && value.status === 'green') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGreen}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGreen}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'A POOL WITH VERY LONG NA...' && value.status === 'grey') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGrey}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGrey}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
            </Accordion>


            <Accordion className={classes.appBar} style={{margin: "0px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} style={{margin: "0px"}}>
                    <Typography className={classes.title} style={{margin: "0px"}}>CUSTOM EFFECTS</Typography>
                </AccordionSummary>
                {rows.map((value) => {
                    if (value.role === 'CUSTOM EFFECTS' && value.status === 'orange') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textOrange}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarOrange}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'CUSTOM EFFECTS' && value.status === 'green') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGreen}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGreen}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'CUSTOM EFFECTS' && value.status === 'grey') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGrey}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGrey}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
            </Accordion>


            <Accordion className={classes.appBar} style={{margin: "0px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} style={{margin: "0px"}}>
                    <Typography className={classes.title} style={{margin: "0px"}}>GAME VISUAL EFFECTS</Typography>
                </AccordionSummary>
                {rows.map((value) => {
                    if (value.role === 'GAME VISUAL EFFECTS' && value.status === 'orange') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textOrange}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarOrange}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'GAME VISUAL EFFECTS' && value.status === 'green') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGreen}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGreen}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
                {rows.map((value) => {
                    if (value.role === 'GAME VISUAL EFFECTS' && value.status === 'grey') {
                        return (
                            <AccordionDetails>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItem>
                                            <ListItemText>
                                                <Box className={classes.textGrey}>{`Slave ${value.name}`}</Box>
                                            </ListItemText>
                                            <AccordionActions>
                                                <Box className={classes.avatarGrey}/>
                                            </AccordionActions>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        );
                    }
                })}
            </Accordion>

        </Grid>
    )
});

export default withStyles(styles)(Organisation);