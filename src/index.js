import React from 'react'
import ReactDOM from 'react-dom'
import {data} from './data';
import { createVendiaClient } from '@vendia/client';



function Greeting(){
  return <h3>Placeholder component to test Vendia connection</h3>
}

ReactDOM.render(<Greeting/>,document.getElementById('root'))