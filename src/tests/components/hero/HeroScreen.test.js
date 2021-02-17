import { mount, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Pruebas en <HeroScreen/>', () => {
    
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }
    
    afterEach( () => {
        jest.clearAllMocks();
    });
    
    test('debe de mostrar el componente redirect si no hay argumentos en el url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']} >
                <HeroScreen history={historyMock}/>
            </MemoryRouter>
        );

        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('debe de mostrar un hero si el parámetro existe y se encuentra', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']} >
                <Route path="/hero/:heroeId" component={ HeroScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);
    });


    test('debe de regresar a la pantalla anterio con push', () => {
       
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']} >
                <Route 
                path="/hero/:heroeId" 
                component={ () => <HeroScreen history = {historyMock} />} />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(historyMock.push).toHaveBeenCalledWith('/')    
        expect(historyMock.goBack).not.toHaveBeenCalledWith()    
    });
    
    test('debe de regresar pantalla anterior goBack', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']} >
                <Route 
                path="/hero/:heroeId" 
                component={ () => <HeroScreen history = {historyMock} />} />
            </MemoryRouter>
        );

        wrapper.find('button').simulate('click');
        expect(historyMock.goBack).toHaveBeenCalledWith()    
        expect(historyMock.push).not.toHaveBeenCalledWith('/')    
    });
    
    test('debe de llamar el redirect si el heroe no existe', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron1234']} >
                <Route 
                path="/hero/:heroeId" 
                component={ () => <HeroScreen history = {historyMock} />} />
            </MemoryRouter>
        );
        
        expect(wrapper.text()).toBe('');
    });
    
    
});
