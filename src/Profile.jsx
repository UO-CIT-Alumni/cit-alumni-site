import React from 'react';
import { Header, Segment, Form, Input } from 'semantic-ui-react';

const options = [
	{key: 'm', text: 'Male', value: 'male'},
	{key: 'f', text: 'Female', value: 'female'}
]

/*
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ this.state.userId, this.state.firstName, this.state.lastName, this.state.gender, this.state.info }, null, 5)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ this.state.svUserId, this.state.svFName, this.state.svLName, this.state.svGender, this.state.svInfo  }, null, 5)}</pre>

*/

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	userId: '',
    	svUserId: '',
    	firstName: '',
    	lastName: '',
    	svFName: '',
    	svLName: '',
    	gender: '',
    	svGender: '',
    	info: '',
    	svInfo: '',
    }
  }

  userOnChange = (event) => {
  	this.setState({
  		userId: event.target.value,
  	})
  }

  firstOnChange = (event) => {
    this.setState({
      firstName: event.target.value,
    })
  }

  lastOnChange = (event) => {
    this.setState({
      lastName: event.target.value,
    })
  }

    infoOnChange = (event) => {
    this.setState({
      info: event.target.value,
    })
  }




  saveOnClick = () => {
  	this.setState({
  		svUserId: this.state.userId,
  		svFName: this.state.firstName,
  		svLName: this.state.lastName,
  		svGender: this.state.gender,
  		svInfo: this.state.info,
  	})
  }

  render() {
    

    return (
    	<div>
    	<Form onSubmit={this.saveOnClick.bind(this)} >
   			<Form.Input width={6} value={this.state.userId} onChange={this.userOnChange.bind(this)} label='User Id' /> 
   			<Form.Checkbox label='Display as User Id' />
    		<Form.Group widths={6}>
    			<Form.Input fluid label='First Name' value={this.state.firstName} onChange={this.firstOnChange.bind(this)} />
    			<Form.Input fluid label='Last Name' value={this.state.lastName} onChange={this.lastOnChange.bind(this)} />
    			<Form.Select fluid label='Gender' options={options} placeholder='Gender' />
          <Form.Select fluid label='Major' placeholder='Major' />
    		</Form.Group>
    		<Form.TextArea label='Information' width={10} value={this.state.info} onChange={this.infoOnChange.bind(this)} />
    		<Form.Button content='Submit' />
    	</Form>
    	</div>
    )
  }
}