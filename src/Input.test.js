import React from 'react';
import {  shallow } from 'enzyme'
import Input from './Input';
import {findByTestAtrr , checkProps} from './test/testUtils'


const mockSetCurrentGuess = jest.fn()
//allows  using Rect useState destructure
jest.mock('react', () => ( { 
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState,mockSetCurrentGuess]
}))



const setUp =(secretWord='party') => { 
 return shallow(<Input secretWord={secretWord} />)

}

describe('input component tests', () => { 
    let originalUseState;
    let wrapper;
    beforeEach (() => { 
        wrapper=setUp()
        originalUseState=React.useState
        mockSetCurrentGuess.mockClear()

    })
afterEach(() => {
React.useState= originalUseState
})


    it('render without error' , () => { 
        const component = findByTestAtrr(wrapper, 'input-comp')
        expect(component.length).toBe(1)

    })

    it('check input props types' , () => { 
        checkProps(Input , {secretWord: 'party'} )



    })

describe('test controlled input field', () => { 
    beforeEach (() => { 
        wrapper=setUp()

    })

it('test state value change on input change' , () =>{ 
const inputBox = findByTestAtrr(wrapper, 'input-box');
const mockEvent = { target: { value: 'train' } };
inputBox.simulate("change" , mockEvent)

expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
})

it('input box is cleared on submit button' , () => { 
    const wrapper=setUp()
    const submitButton = findByTestAtrr(wrapper, 'submitButton');
    submitButton.simulate("click", {preventDefault() {}})
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');



})


})


})

