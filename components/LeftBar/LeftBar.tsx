"use client"

import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { useState } from "react";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../Redux/CreateSlice";


type RootState = {
    app: {
        darkMode: boolean
    }
}


const LeftBar = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const dispatch = useDispatch()
    const {darkMode} = useSelector((state: RootState) => state.app)



    return (
        <Box sx={{ display: { xs: "none", md: "block" } }} margin={2} position={"fixed"}>
            <List component="nav" aria-label="main mailbox folders">

                <ListItemButton
                >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                </ListItemButton>

                <ListItemButton
                >
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                </ListItemButton>

                <ListItemButton
                >
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                </ListItemButton>

                <ListItemButton
                >
                    <ListItemIcon>
                        <StorefrontIcon />
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                </ListItemButton>

                <ListItemButton
                >
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                </ListItemButton>

                <ListItemButton
                >
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>

                <ListItemButton
                >
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>

                <ListItemButton
                >
                    <ListItemIcon sx={{ display: "flex" }}>
                        <ToggleOffIcon />
                    </ListItemIcon>
                    <Switch onChange={() => dispatch(toggleDarkMode())}/>
                </ListItemButton>



            </List>
        </Box>
    );
}

export default LeftBar;