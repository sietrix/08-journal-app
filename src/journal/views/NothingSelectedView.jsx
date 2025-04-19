import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"



export const NothingSelectedView = () => {
    return (
        <Grid 
            container
            spacing = { 0 }
            direction = "column"
            alignItems = "center"
            justifyContent =  "center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 2 }}
        >
            <Grid size={{ xs: 3 }}>
                {/* <StarOutline sx={{width: '100%',  fontSize: 100, color: 'white' }} /> */}
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid>

            <Grid size={{ xs: 3 }} >
                <Typography color="white" variant="h5">
                    Selecciona o crea una entrada aaaaaaaaa aaaaaaaa aaaaaaaa
                </Typography>
            </Grid>


        </Grid>
    )
}
