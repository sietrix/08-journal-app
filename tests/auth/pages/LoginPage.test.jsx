import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../src/store/auth";
import { MemoryRouter } from "react-router";
import { notAuthenticatedState } from "../../fixtures/authFixtures";



const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
})

describe('Pruebas en <LoginPage />', () => { 
    
    test('debe de mostrar el componente correctamente', () => { 
        
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        // screen.debug();
        expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);
    
    });

    test('botón de google debe de llamar el startGoogleSignIn', () => { 

        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click( googleBtn );
        screen.debug();


    });



});