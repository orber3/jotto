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



const setUp =(success=false ,secretWord='party' ) => { 
 return shallow(<Input secretWord={secretWord} success={success} />)

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


describe('render success\false ' , () => { 

    describe('success is true', () => { 
        beforeEach (() => { 
            wrapper=setUp(true)
    
        })
        it('render without error' , () => { 
            const component = findByTestAtrr(wrapper, 'input-comp')
            expect(component.length).toBe(1)
    
        })
        it('no input box rendred' , () => { 
            const inputBox = findByTestAtrr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(false)


        })
        it('no submit button rendred' , () => { 
            const submitButton = findByTestAtrr(wrapper, 'submitButton');
            expect(submitButton.exists()).toBe(false)
        })

    })


    describe('success is false' , () => { 
        beforeEach (() => { 
            wrapper=setUp(false)
    
        })
        it('no input box rendred' , () => { 
            const inputBox = findByTestAtrr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true)


        })
        it('no submit button rendred' , () => { 
            const submitButton = findByTestAtrr(wrapper, 'submitButton');
            expect(submitButton.exists()).toBe(true)
        })



    })
})
})

