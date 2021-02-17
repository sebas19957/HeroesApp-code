import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('pruebas en <LoginScreen/>', () => {

    const userContext = {
        dispatch: jest.fn(),
        user : {
            logged: false
        }
    }

    const histoty = {
        replace: jest.fn(),
    }
    
    const wrapper = mount(
        <AuthContext.Provider value={userContext}>
            <LoginScreen history={histoty}/>
        </AuthContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.container').exists()).toBe(true);
    });

    test('dede de realizar el dispatch y la navegacion', () => {
        
        wrapper.find('button').prop('onClick')();

        expect(userContext.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Sebastian'
            }
        });

        expect(histoty.replace).toHaveBeenCalled();
    });
    
    

});
