import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
      paddingTop: "100px",
    }, 
  }));

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const NavBar = () => {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar classname={classes.header} position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <Link to="/main">
                <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            We-Commerce
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default NavBar
