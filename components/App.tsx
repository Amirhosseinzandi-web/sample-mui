"use client"
import Feed from "@/components/Feed/Feed";
import LeftBar from "@/components/LeftBar/LeftBar";
import Navbar from "@/components/Navbar/Navbar";
import RightBar from "@/components/RightBar/RightBar";
import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from "react-redux"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"



type RootState = {
    app: {
        darkMode: boolean
    }
}


const App = () => {

    const { darkMode } = useSelector((state: RootState) => state.app)

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light"
        }
    })


    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box>
                    <Navbar />
                    <Grid container>

                        <Grid xs={12} md={2}>
                            <LeftBar />
                        </Grid>

                        <Grid xs={12} md={6}>
                            <Feed />
                        </Grid>

                        <Grid xs={12} md={4}>
                            <RightBar />
                        </Grid>

                    </Grid>
                </Box>
            </ThemeProvider>
        </>
    );
}

export default App;