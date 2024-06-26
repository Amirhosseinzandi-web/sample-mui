import { Button, Card, CardActions, CardContent, CardMedia, Typography, Box } from "@mui/material";





const Feed = () => {
    return (
        <Box p={5}>
            {
                Array(8).fill(0).map((item , ind) => (
                    <Card key={ind} sx={{ width:"100%"}}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))
            }
        </Box>
    );
}

export default Feed;