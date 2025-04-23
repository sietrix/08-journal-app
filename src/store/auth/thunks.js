import { signInWithGoogle } from "../../firebase/provider";
import { checkingCredentials } from "./"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }

}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result =  await signInWithGoogle();
        console.log({ result });

    }

}