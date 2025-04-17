import { Link as RouterLink } from "react-router";
import { Google } from "@mui/icons-material"
import {Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";



export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
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

        </AuthLayout>
    )
}
