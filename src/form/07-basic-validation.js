import React from 'react';
import isEmail from 'validator/lib/isEmail';

export default class Seven extends React.Component{
    state = {
        fields: {
            name: '',
            email: ''
        },
        fieldErrors: {},
        people: []
    };

    onFormSubmit = (event) => {
        const people = [...this.state.people];
        const person = this.state.fields;
        const fieldErrors = this.validate(person);
        this.setState({ fieldErrors });
        event.preventDefault();

        if (Object.keys(fieldErrors).length) return;

        this.setState({
            fields: {
                name: '',
                email: ''
            },
            people: people.concat(person)
        });
    };

    onInputChange = (event) => {
        const fields = Object.assign({}, this.state.fields);
        fields[event.target.name] = event.target.value;
        this.setState({fields});
    };

    validate = person => {
        const errors = {};
        if (!person.name) errors.name = 'Name Required';
        if (!person.email) errors.email = 'Email Required';
        if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
        return errors;
    };

    render() {
        return  (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                    />
                    <span style={{ color: 'red' }}>{this.state.fieldErrors.name}</span>
                    <br />
                    <input 
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                    />
                    <span style={{ color: 'red' }}>{this.state.fieldErrors.email}</span>
                    <br />
                    <input 
                        type='submit'
                    />
                </form>
                <div>
                    <ul>
                        {this.state.people.map(({name, email}, i) =>
                            <li key={i}>{name} ({email})</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}