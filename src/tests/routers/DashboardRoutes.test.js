import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('Pruebas en <DashboardRoutes/>', () => {

    const userContext = {
        dispatch: jest.fn(),
        user: {
            name: 'Sebastian',
            logged: true 
        }
    }
   
    test('debe mostrarse correctamente', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={userContext}>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Sebastian');
    });

});
