

import React,{useState} from 'react'
import PropTypes from 'prop-types'


const Input = ({secretWord}) => {

    const [currentGuess , setCurrentGuess] = useState('')



    return (
        <div data-test="input-comp">
            <form className = 'form-inline'>
                <input data-test="input-box" className="mb-2 mx-sm-3" type="text"
                 placeholder="type guess"
                 value={currentGuess}
                 onChange={(event) => setCurrentGuess(event.target.value)}
                 ></input>
                <button data-test="submitButton" onClick ={ 
                    (e) => {
                    e.preventDefault()
                    setCurrentGuess('') }  }className="btn btn-primary" >
        Submit
                </button>
                </form> 
        </div>
    )
}


Input.propTypes = {
    secretWord: PropTypes.string.isRequired,

}
export default Input
