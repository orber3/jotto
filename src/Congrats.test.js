import React from 'react';
import Enzyme,{  shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
import {findByTestAtrr} from './test/testUtils'

Enzyme.configure({ 
    adapter: new Adapter() ,
    disableLifecycleMethods: true
  
  });
  
  const setUp =(props={}) => { 
   return shallow(<Congrats {...props} />)
  }

test("render without error", () => { 
const wrapper = setUp()
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