"use client"
import { Avatar, Box, Button, ButtonGroup, Fab, Fade, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import { useState } from "react";
import { EmojiEmotions, VideoCameraBack, Image, PersonAdd, DateRange } from "@mui/icons-material";



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};



const Add: React.FC = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "50%", md: 20 }, transform: { xs: "translateX(-50%)", md: "unset" } }}>
                <Fab color="primary" onClick={() => setOpen(true)}>
                    <AddIcon />
                </Fab>
            </Tooltip>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" color={"#gray"} textAlign={"center"}>
                            Create post
                        </Typography>
                        <Box display={"flex"} gap={1} alignItems={"center"} sx={{ my: 2 }}>
                            <Avatar />
                            <Typography>Amir Zandi</Typography>
                        </Box>
                        <TextField
                            sx={{ width: "100%" }}
                            variant="standard"
                            rows={2}
                            multiline
                            label="What's on your mind?"
                        />
                        <Stack direction="row" gap={1} mt={2} mb={3}>
                            <EmojiEmotions color="primary" />
                            <Image color="secondary" />
                            <VideoCameraBack color="success" />
                            <PersonAdd color="error" />
                        </Stack>
                        <ButtonGroup
                            fullWidth
                            variant="contained"
                            aria-label="Button group with a nested menu"
                        >
                            <Button>Post</Button>
                            <Button
                                sx={{width: "100px"}}
                                aria-controls={open ? 'split-button-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-label="select merge strategy"
                                aria-haspopup="menu"
                            >
                                <DateRange />
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Fade>
            </Modal>

        </>
    );
}

export default Add;