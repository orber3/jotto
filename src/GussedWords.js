import React from 'react'
import PropTypes from 'prop-types'

const GussedWords = (props) => {


    let contents
    if(props.guessedWords.length===0 ){ 
        contents = ( 
            <span data-test ='guessed-instructions' > 
                try and guess the secret word
            </span>
        )
    }
    return (
        <div data-test="guessed-words">
            {contents}
        </div>
    )
}




GussedWords.propTypes = {
guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
        guessedWord: PropTypes.string.isRequired,
        letterMatchCount: PropTypes.number.isRequired
    })
).isRequired


}

export default GussedWords
