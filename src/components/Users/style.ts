import {createStyles, Theme} from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
    root:{
        width: '100%'
    },
   appBar: {
       width: '100%',
        background: '#303030',
        color: theme.palette.baseLightColors.dark
   },
    listOwner:{
      color: '#FFB74D'
    },
    listAdmins:{
        color: theme.palette.primary.main
    },
    listUsers:{
        color: theme.palette.status.orange
    },
    listOffline:{
        color: theme.palette.baseColors.light
    },
    title:{
       margin: '0vw 0vw -1vw 0vw',
        fontSize: '12px',
       textTransform: 'uppercase',
    },
    text: {
        marginLeft: '-1vw',
        fontSize: '12px',
        width: '60%',
        '@media screen and (min-width: 1450px)': {
            marginLeft: '0vw',
        }
    },
   avatar: {
       background: theme.palette.baseDarkColors.dark,
       width: '2.5vw',
       height: '2.5vw',
       marginLeft: '-0.4vw'
   },
});

export default styles;