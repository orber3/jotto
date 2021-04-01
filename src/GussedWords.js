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
    } else { 
        const guessedWordsRows = props.guessedWords.map((word , index) => (
<tr data-test='guessed-word' key={index}> 
    <td> 
        {word.guessedWord}
    </td>
    <td> 
        {word.letterMatchCount}
    </td>
</tr>
        ))
        contents = (
        <div data-test="guessedWordsDiv"> 
        <h3> Guessed word  </h3>
        <table> 
            <thead>
                <tr>
                    <th>
                    Guess
                    </th> 
                    <th> matching letter</th>
                    </tr>
                    </thead>
                    <tbody>
                        {guessedWordsRows}
                    </tbody>
                    
        </table>
        </div>
        )}
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
