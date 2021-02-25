import React, {forwardRef, CSSProperties}  from "react";
import {Avatar, Badge, Box, createStyles, withStyles} from "@material-ui/core";
import styles from "./style";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import {Theme} from "@material-ui/core/styles";


interface UsersProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
}
const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: '$ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }),
)(Badge);

const rows = [
    {
        name: 'Danil Andreev',
        role: 'OWNER'
    },
    {
        name: 'Andrii Demchyshyn',
        role: 'ADMINS'
    },
    {
        name: 'Denis Afendikov',
        role: 'ADMINS'
    },
    {
        name: 'Anton Liskovuch',
        role: 'ADMINS'
    },
    {
        name: 'Anton Liskovuch',
        role: 'USERS'
    },
    {
        name: 'Anton Liskovuch',
        role: 'USERS'
    },
    {
        name: 'Anton Liskovuch',
        role: 'USERS'
    },
    {
        name: 'Anton Liskovuch',
        role: 'OFFLINE'
    }
]

const Users = forwardRef((props: UsersProps, refs:any) => {
    const {
        classes,
        className,
        style
    } = props;


    return (
        <Grid className={classes.root}>
            <CssBaseline />
            <List className={classes.appBar}>
                <ListItem>
                    <Typography className={classes.title}>OWNER</Typography>
                </ListItem>
            </List>
            {rows.map((value) => {
                if (value.role === 'OWNER') {
                    return (
                        <ListItem>
                            <ListItemAvatar>
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar className={classes.avatar}/>
                                </StyledBadge>
                            </ListItemAvatar>
                            <ListItemText className={classes.listOwner}>
                                <Box className={classes.text}>{value.name}</Box>
                            </ListItemText>
                        </ListItem>
                    );
                }
            })}
            <List className={classes.appBar}>
                <ListItem>
                    <Typography className={classes.title}>ADMINS</Typography>
                </ListItem>
            </List>
            {rows.map((value) => {
                if (value.role === 'ADMINS') {
                    return (
                        <ListItem>
                            <ListItemAvatar>
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar className={classes.avatar}/>
                                </StyledBadge>
                            </ListItemAvatar>
                            <ListItemText className={classes.listAdmins}>
                                <Box className={classes.text}>{value.name}</Box>
                            </ListItemText>
                        </ListItem>
                    );
                }
            })}
            <List className={classes.appBar}>
                <ListItem>
                    <Typography className={classes.title}>USERS</Typography>
                </ListItem>
            </List>
            {rows.map((value) => {
                if (value.role === 'USERS') {
                    return (
                        <ListItem>
                            <ListItemAvatar>
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar className={classes.avatar}/>
                                </StyledBadge>
                            </ListItemAvatar>
                            <ListItemText className={classes.listUsers}>
                                <Box className={classes.text}>{value.name}</Box>
                            </ListItemText>
                        </ListItem>
                    );
                }
            })}
            <List className={classes.appBar}>
                <ListItem>
                    <Typography className={classes.title}>OFFLINE</Typography>
                </ListItem>
            </List>
            {rows.map((value) => {
                if (value.role === 'OFFLINE') {
                    return (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}/>
                            </ListItemAvatar>
                            <ListItemText className={classes.listOffline}>
                                <Box className={classes.text}>{value.name}</Box>
                            </ListItemText>
                        </ListItem>
                    );
                }
            })}

        </Grid>
    );
})

export default withStyles(styles)(Users);