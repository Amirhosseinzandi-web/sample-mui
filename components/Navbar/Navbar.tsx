"use client"
import { AppBar, Avatar, Badge, Divider, InputBase, ListItemIcon, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import PetsIcon from '@mui/icons-material/Pets';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useRef, useState } from "react";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";



const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false)

    const refElem = useRef<null | HTMLDivElement>(null)

    return (
        <AppBar position="sticky" sx={{top : 0}}>
            <Toolbar>
                <Grid width={"100%"} container>

                    <Grid xs={3}>
                        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>Amir Dev</Typography>
                    </Grid>

                    <Grid xs={6}>
                        <InputBase placeholder="search..." sx={{ bgcolor: "white", borderRadius: "5px", paddingLeft: "5px", width: "70%" , backgroundColor: "background.default" }}/>
                    </Grid>

                    <Grid xs={3}>

                        <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"flex-end"}>
                            <Badge badgeContent={2} color="error" sx={{ display: { xs: "none", sm: "block" } }}>
                                <NotificationsIcon />
                            </Badge>
                            <Badge badgeContent={4} color="error" sx={{ display: { xs: "none", sm: "block" } }}>
                                <EmailIcon />
                            </Badge>
                            <Avatar sx={{ width: "30px", height: "30px" }} ref={refElem}
                                onClick={() => setOpen(true)}
                            />
                            <Typography id="one" component={"p"} whiteSpace={"nowrap"} sx={{ display: { sm: "none" } }}>Amir Zandi</Typography>

                        </Stack>
                        {/* ******************************************************* */}
                        <Menu
                            anchorEl={refElem.current}
                            id="account-menu"
                            open={open}
                            onClose={() => setOpen(false)}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem>
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem
                            // onClick={handleClose}
                            >
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem
                            // onClick={handleClose}
                            >
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem
                            // onClick={handleClose}
                            >
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                        {/* **************************************** */}
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;