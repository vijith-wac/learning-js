'use client'
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';



const InfromedForm = ()=>{
    const onSubmit = ({ values }) => console.log(values);
    return(
        <Form onSubmit={onSubmit}>
        <div> 
        <Select name="car" initialValue='undefined'>
          <option>Model S</option>
          <option>Model 3</option>
          <option>Model X</option>
          <option value='undefined'>Model Y</option>
        </Select>

        </div>
        
       
        <button type="submit">Submit</button>
      </Form>
    )
}

export default InfromedForm