import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link, useHistory } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@mui/material'

const useStyles = makeStyles((theme) => ({
    header: {
      paddingTop: "100px",
      display: "flex",
    }, 
    button: {
        marginLeft: "auto"
    }
  }));

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const NavBar = ({ login, setLogin }) => {
    let history = useHistory();
    const classes = useStyles();

    const handleClick = (event) => {
      event.preventDefault();
      localStorage.removeItem('user');
      setLogin("");
      history.push("/");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <Link to="/main">
                <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            We-Commerce
          </Typography>
          <Button variant="text" onClick={handleClick} class={classes.button} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default NavBar
