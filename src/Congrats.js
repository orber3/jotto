import React from 'react'

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
export default Congrats