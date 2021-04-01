import React from 'react';
import {  shallow } from 'enzyme'
import Congrats from './Congrats';

import {findByTestAtrr , checkProps} from './test/testUtils'

  const defaultProps = { success: false}
  
  const setUp =(props={}) => { 
      const setUpProps = {...defaultProps , ...props}
   return shallow(<Congrats {...setUpProps} />)
  }

test("render without error", () => { 
const wrapper = setUp({success: false})
const cong = findByTestAtrr(wrapper, 'cong');
expect(cong.length).toBe(1)

})

test('no text when succeess is false' , () => { 
    const wrapper = setUp({success: false})
    const cong = findByTestAtrr(wrapper, 'cong');
    expect(cong.text()).toBe('')



})

test("render not empy sucess message when success is true" , () => { 
    const wrapper = setUp({success: true})
    const message = findByTestAtrr(wrapper, 'message');
    expect(message.text().length).not.toBe(0)

})


test('does not throw warnning with expected props' , () => {
const expectedProps = { success: false}
checkProps(Congrats , expectedProps)


})