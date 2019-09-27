import React from 'react'; import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from './components/MenuList';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
class Dashboard extends React.Component{

    state={
        open:true
    }
    handleClick = () =>{
        this.setState({
            open:!this.state.open
        })
    }
    render(){
        const classes = useStyles();
        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu"  button onClick={this.handleClick}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                News
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
    
                {this.state.open && 
                    <Grid item xs={4} sm={4}>
                        <MenuList />
                    </Grid>
                    }
                <Grid item xs={8} sm={8}>
                    </Grid>
            </div>
        )
    }
    
}
export default Dashboard





