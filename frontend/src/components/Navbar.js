import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    toolbar: {
        textAlign: "center",
        height: 64,
    },
    heading: {
        margin: "auto",
    }
})

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.heading} variant="h5" align="center">Fridge Manager</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;