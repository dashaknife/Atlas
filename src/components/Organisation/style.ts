import {createStyles, Theme} from "@material-ui/core/styles";


const styles = (theme: Theme) => createStyles({
   appBar: {
        background: '#303030',
        color: theme.palette.baseLightColors.dark,
        boxShadow: "none"
   },
    toolbar: {
        background: '#303030',
        color: theme.palette.baseLightColors.dark,
        minHeight: "50px",
        borderRadius: "0px",
        padding: "0px 17px"
    },
    grow: {
       flexGrow : 1
    },
    titleBox: {
      "& div": {
          margin: "0px",
          padding: "0px"
      }
    },
    title:{
        margin: '0',
        textTransform: 'uppercase',
        fontSize: "12px"
    },
    list:{
        margin: '-3vw 0 -3vw 0'
    },
    avatar: {
        background: theme.palette.baseDarkColors.dark,
        width: '2.5vw',
        height: '2.5vw',
        margin: '0 0 0 -1.4vw'
    },
    avatarOrange: {
        margin: '0.7vw -1.8vw 1vw 4.6vw',
        width: '1.5vw',
        height: '1.5vw',
        background: theme.palette.status.orange,
        border: '0.14vw solid #8A2B0D',
        borderRadius: '50%'
    },
    textOrange:{
        margin: '0 0 0 -3.9vw',
        fontSize: '13px',
        color: theme.palette.status.orange
    },
    avatarGreen: {
        margin: '0.7vw -1.8vw 1vw 4.6vw',
        width: '1.5vw',
        height: '1.5vw',
        background: theme.palette.status.green,
        border: '0.14vw solid #388E3C',
        borderRadius: '50%'
    },
    textGreen:{
        margin: '0 0 0 -3.9vw',
        fontSize: '13px',
        color: theme.palette.baseLightColors.dark
    },
    avatarGrey: {
        margin: '0.7vw -1.8vw 1vw 4.6vw',
        width: '1.5vw',
        height: '1.5vw',
        background: theme.palette.baseColors.light,
        border: '0.14vw solid #9E9E9E',
        borderRadius: '50%'
    },
    textGrey:{
        margin: '0 0 0 -3.9vw',
        fontSize: '13px',
        color: theme.palette.baseColors.dark
    },

});

export default styles;