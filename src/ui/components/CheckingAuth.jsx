import { CircularProgress, Grid } from "@mui/material";



export const CheckingAuth = () => {
    return (
        <Grid 
            container
            spacing={ 0 }
            direction="column"
            sx={{   minHeight: '100vh', 
                    backgroundColor: 'primary.main', 
                    padding: 4,
                    alignItems: "center",
                    justifyContent:'center'
            }}
        >
            <Grid 
                direction= 'row'
                sx={{
                    alignItems: "center",
                    justifyContent:'center' 
                }}
            >
                <CircularProgress color="warning" />
            </Grid>
        </Grid>
    )
}
