import Box from "@mui/material/Box"
import { theme } from "../styles/style"
import { useMediaQuery } from "@mui/material"

export const Board = ({children, screenWidth, screenHeight}) => {
    const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet')); 
    const updatedWidth = Math.floor(screenWidth + 150); 
    console.log(screenWidth); 
    console.log(updatedWidth); 
    return (
        <>
            {isMobile ? (
                <Box sx={{
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: `url(../../src/assets/main_background.gif)`,
                    backgroundSize: `${updatedWidth}px ${screenHeight}px`, 
                    backgroundRepeat: "no-repeat", 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "space-between"
                }}>
                {children}
                </Box>
            ) : (
                <Box sx={{
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: `url(../../src/assets/main_background.gif)`,
                    backgroundSize: `${screenWidth}px ${screenHeight}px`, 
                    backgroundRepeat: "no-repeat", 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "space-between"
                }}>
                {children}
                </Box>
            )}
        </>
    )
}