import { useState } from "react";
import { Link as RouterLink } from "react-router";
import {Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio']
}


export const RegistrerPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { displayName, email, password, onInputChange, formState,
            displayNameValid, emailValid, passwordValid, isFormValid
     } = useForm( formData, formValidations );


    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted( true );
        console.log( formState );
    }


    return (
        <AuthLayout title="Crear cuenta">
            <h1>FormValid: { isFormValid ? 'Válido' : 'Incorrecto' }</h1>

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
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }
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
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
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
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
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
