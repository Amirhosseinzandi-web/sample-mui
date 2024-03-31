"use client"
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";


type ImagesType = {
    src: string
    alt: string
}


const images: ImagesType[] = [
    {
        src: "https://material-ui.com/static/images/avatar/1.jpg",
        alt: "Remy Sharp"
    },
    {
        src: "https://material-ui.com/static/images/avatar/2.jpg",
        alt: "Travis Howard"
    },
    {
        src: "https://material-ui.com/static/images/avatar/3.jpg",
        alt: "Cindy Baker"
    },
    {
        src: "https://material-ui.com/static/images/avatar/4.jpg",
        alt: "Agnes Walker"
    },
    {
        src: "https://material-ui.com/static/images/avatar/5.jpg",
        alt: "Trevor Baker"
    },
    {
        src: "https://material-ui.com/static/images/avatar/6.jpg",
        alt: "Agnes Walker"
    },
    {
        src: "https://material-ui.com/static/images/avatar/7.jpg",
        alt: "Trevor Baker"
    }
]




const RightBar: React.FC = () => {

    return (
        <>

            <Box sx={{ display: { xs: "none", md: "block" } }} p={4} position={"fixed"} >

                <Box>
                    <Typography variant="h6" color={"#BDBDBD"}>Online friends</Typography>
                    <AvatarGroup sx={{ display: "flex", justifyContent: "flex-end", ml: 2 }} total={6}>
                        <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" alt="Remy Sharp" />
                        <Avatar src="https://material-ui.com/static/images/avatar/2.jpg" alt="Travis" />
                        <Avatar src="https://material-ui.com/static/images/avatar/3.jpg" alt="Cindy Baker" />
                        <Avatar src="https://material-ui.com/static/images/avatar/6.jpg" alt="Agnes Walker" />
                        <Avatar src="https://material-ui.com/static/images/avatar/7.jpg" alt="Trevor Baker" />
                    </AvatarGroup>
                </Box>

                <Box my={6}>
                    <Typography variant="h6" color={"#BDBDBD"} my={2}>Latest photos</Typography>
                    <ImageList variant="woven" cols={4} gap={8}
                    >

                        {
                            images.map((item, ind) => (
                                <ImageListItem key={ind}>
                                    <img
                                        srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.src}?w=248&fit=crop&auto=format`}
                                        alt={item.alt}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))
                        }

                    </ImageList>
                </Box>

                <Box>

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start" >

                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {" — Wish I could come, but I'm out of town this…"}
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {' — Do you have Paris recommendations? Have you ever…'}
                                    </>
                                }
                            />
                        </ListItem>
                    </List>

                </Box>

            </Box>



        </>

    );
}

export default RightBar;