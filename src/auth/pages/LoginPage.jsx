import { Link as RouterLink } from "react-router";
import { Google } from "@mui/icons-material"
import {Button, Grid, Link, TextField, Typography } from "@mui/material"



export const LoginPage = () => {
    return (
        <Grid 
        container
        spacing={ 0 }
        direction="column"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >

            <Grid
                className='box-shadow'
                size={{ xs: 12, md: 6 }}
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2}}>
                
                    <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>

                    <form>
                        <Grid container>
                            <Grid  size={{ xs: 12 }} sx={{ mt: 2 }}>
                                <TextField 
                                    label="Correo" 
                                    type="email" 
                                    placeholder="correo@google.com"
                                    fullWidth
                                />
                            </Grid>

                            <Grid  size={{ xs: 12 }} sx={{ mt: 2 }}>
                                <TextField 
                                    label="Contraseña" 
                                    type="password" 
                                    placeholder="Contraseña"
                                    fullWidth
                                />
                            </Grid>

                            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }} size={{ xs: 12}}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Button variant="contained" fullWidth>
                                        Login
                                    </Button>
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Button variant="contained" fullWidth>
                                        <Google />
                                        <Typography sx={{ml: 1}}>Google</Typography>
                                    </Button>
                                </Grid>

                            </Grid>

                            <Grid container direction='row' justifyContent='end' size={{ xs: 12}}>
                                <Link component={ RouterLink } color='inherit' to="/auth/register">
                                    Crear una cuenta
                                </Link>
                            </Grid>


                        </Grid>
                    </form>

            </Grid>


        </Grid>
    )
}
