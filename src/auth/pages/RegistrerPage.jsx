import { Link as RouterLink } from "react-router";
import {Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
    email: 'fernando@google.com',
    password: '123456',
    displayName: 'Fernando Herrera'
}


export const RegistrerPage = () => {

    const { displayName, email, password, onInputChange, formState } = useForm( formData );

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log( formState );
    }
    


    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid  size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField 
                            label="Nombre completo" 
                            type="text" 
                            placeholder="Nombre completo"
                            fullWidth
                            name="displayName"
                            value={ displayName }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid  size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid  size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField 
                            label="Contraseña" 
                            type="password" 
                            placeholder="Contraseña"
                            fullWidth
                            autoComplete="on"
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }} size={{ xs: 12}}>
                        <Grid size={{ xs: 12 }}>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                fullWidth
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end' size={{ xs: 12}}>
                        <Typography sx={{ mr: 1}}>¿Ya tienes tu cuenta?</Typography>
                        <Link component={ RouterLink } color='inherit' to="/auth/login">
                            Iniciar sesión
                        </Link>
                    </Grid>


                </Grid>
            </form>

        </AuthLayout>
    )
}
