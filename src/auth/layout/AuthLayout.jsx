import { Grid, Typography } from "@mui/material"



export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid 
        container
        spacing={ 0 }
        direction="column"
        sx={{   
            minHeight: '100vh', 
            backgroundColor: 'primary.main', 
            padding: 4,
            alignItems: "center",
            justifyContent:'center'
        }}>
            <Grid
                className='box-shadow'
                // size={{ xs: 12 }}
                direction= 'row'
                sx={{
                    width: { sm: 450},
                    backgroundColor: 'white', 
                    padding: 3, 
                    borderRadius: 2,
                    alignItems: "center",
                    justifyContent:'center'
                }}>
                
                    <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>

                    { children }

            </Grid>
        </Grid>
    )
}
