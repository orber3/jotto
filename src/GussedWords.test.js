import React from 'react';
import {  shallow } from 'enzyme'
import GussedWords from './GussedWords';

import {findByTestAtrr , checkProps} from './test/testUtils'

const defaultProps = { guessedWords: [
    {
        guessedWord: 'train', 
        letterMatchCount: 3
}
]}


const setUp =(props={}) => { 
    const setUpProps = {...defaultProps , ...props}
 return shallow(<GussedWords {...setUpProps} />)
}

test(' no errors with props' , () => { 
checkProps(GussedWords, defaultProps)



})

describe('if no words guessed' , () => { 
let wrapper;
beforeEach (() => { 
    wrapper=setUp(({guessedWords: []}))



})
        it('render without error' , () => { 
            const component = findByTestAtrr(wrapper, 'guessed-words')
            expect(component.length).toBe(1)

        })

        it('render insturctions to guess a word ' , () => { 
            const instructions = findByTestAtrr(wrapper, 'guessed-instructions')
            expect(instructions.text().length).not.toBe(0)




        })


})




describe('if there are words guessed' , () => {

    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'party', letterMatchCount: 1 },
        { guessedWord: 'agile', letterMatchCount: 5 }

    
    ]

    let wrapper;
    beforeEach (() => { 
        wrapper=setUp(({guessedWords}))
    
    })


    it('render without error' , () => { 
        const component = findByTestAtrr(wrapper, 'guessed-words')
        expect(component.length).toBe(1)

    })
  it('render guessed words section ' , () => { 
        const guessedWordsDiv = findByTestAtrr(wrapper, 'guessedWordsDiv')
        expect(guessedWordsDiv.length).toBe(1)

    })

    it('render correct number letters  section ' , () => { 
        const guessedWordsDiv = findByTestAtrr(wrapper, 'guessed-word')
        expect(guessedWordsDiv.length).toBe(guessedWords.length)

    })




})