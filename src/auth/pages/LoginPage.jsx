import { useMemo } from "react";
import { Link as RouterLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Google } from "@mui/icons-material"
import {Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";

const formData = {
    email: '',      // melissa@google.com
    password: ''    // 123456
};

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth ); 

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm( formData );

    const isAuthenticating = useMemo( () => status === 'checking', [status]);

    const onSubmit = ( event ) => {
        event.preventDefault();
        
        console.log({ email,  password })
        dispatch( startLoginWithEmailPassword({ email, password }) );
    }

    const onGoogleSignIn = () => {
        // console.log('onGoogleSignIn');
        dispatch( startGoogleSignIn() );
    }



    return (
        <AuthLayout title="Login">
            <form onSubmit={ onSubmit }
                aria-label="submit-form"
                className='animate__animated animate__fadeIn animate__faster'
            >
                <Grid container>
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
                            autoComplete="on"
                            fullWidth
                            name="password"
                            aria-label="password"
                            inputProps={{
                                'data-testid': 'password'
                            }}
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid 
                        container
                        display={ !!errorMessage ? '' : 'none'}
                        sx={{ mt: 1 }}
                    >
                        <Grid size={{ xs: 12 }}>
                           <Alert severity="error">{ errorMessage }</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }} size={{ xs: 12}}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Button
                                disabled = { isAuthenticating }
                                type="submit" 
                                variant="contained" 
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Button
                                disabled = { isAuthenticating }
                                variant="contained" 
                                fullWidth
                                aria-label="google-btn"
                                onClick={ onGoogleSignIn }
                            >
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
