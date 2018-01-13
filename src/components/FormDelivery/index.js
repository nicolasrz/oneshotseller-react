import React, { PureComponent } from "react";
import { Button, Form } from 'semantic-ui-react'
import './style.css';
export default class FormDelivery extends PureComponent{
	render(){
		return(
			<Form className='border'>
    <Form.Group unstackable widths={2}>
      <Form.Input label='First name' placeholder='First name' />
      <Form.Input label='Last name' placeholder='Last name' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Address' placeholder='Address' />
      <Form.Input label='Phone' placeholder='Phone' />
    </Form.Group>
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button type='submit'>Submit</Button>
  </Form>
			)
	}
}

