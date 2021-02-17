import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

// const state = {
//     name: 'Sebastian',
//     logged: true
// }


describe('Pruebas en authReducer', () => {

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
        
    });
    
    test('debe de autenticar y colocar el name del usuario', () => {
        
        const action = {
            type: types.login,
            payload:{
                name: 'Sebastian'
            }
        }

        const login = authReducer({logged: false}, action);
        expect(login).toEqual({
            logged: true,
            name: 'Sebastian'
        });

    });
    
    test('debe de borrar el name del usuario y el logged en false', () => {

        const action = {
            type: types.logout,
        }
        
        const login = authReducer({logged: true}, action);
        expect(login).toEqual({ logged: false,});
    });
    

});
