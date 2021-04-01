import React from 'react'
import PropTypes from 'prop-types'


const Congrats = (props) => {
        if(props.success)
        {
            return ( 
            <div data-test="cong"> 
            <span data-test="message"> 
            congrats you succesfuly guessed the word.
            </span>         
   </div>
   )  } else { 
       return (
           <div data-test="cong"> 

        </div>
        
        )
   }

    
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats


