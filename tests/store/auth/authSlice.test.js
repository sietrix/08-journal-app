import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";



describe('Pruebas en el authSlice', () => { 
    
    test('debe de regresar el estado inicial y llamarse "auth"', () =>  {
        
        const state = authSlice.reducer( initialState, {});
        //console.log(state);
        expect( state ).toEqual( initialState );
        
        expect( authSlice.name ).toBe('auth');

    });


    test('debe de realizar la autenticación', () => {
        // console.log( login( demoUser ) );
        const state = authSlice.reducer( initialState, login( demoUser ) );
        // console.log(state);
        expect( state ).toEqual({
            status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        });
    });

    
    test('debe de realizar el logout sin argumentos', () => {
        const state = authSlice.reducer( authenticatedState, logout() );
        // console.log(state);
        expect( state ).toEqual({
            status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        });
    });


    test('debe de realizar el logout y mostrar un mensaje de error', () => {
        const errorMessageTest = 'Credenciales no son correctas';
        const state = authSlice.reducer( authenticatedState, logout({ errorMessage: errorMessageTest }) );
        // console.log(state);
        expect( state ).toEqual({
            status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessageTest
        });
    });

    test('debe de cambiar el estado a "checking"', () => { 
        
        const state = authSlice.reducer( authenticatedState, checkingCredentials() );
        expect( state.status ).toEqual('checking');
    });



});
