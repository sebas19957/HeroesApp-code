import React from 'react';
import { mount } from "enzyme";
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';
import { MarvelScreen } from '../../components/marvel/MarvelScreen';

describe('Pruebas en <AppRouter/>', () => {
   
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('debe de mostrar el login si no esta autenticado', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();

    });

    test('shoudebe de mostrar el componete marvel si esta autenticado', () => {

        const contextValueLogged = {
            dispatch: jest.fn(),
            user: {
                name: 'Sebastian',
                logged: true
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValueLogged}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        
        expect(wrapper.find('.navbar').exists()).toBe(true);

    });
    

});
