import React from 'react';
import isEmail from 'validator/lib/isEmail';

import Field from './08-field-component-field.js';

export default class Eight extends React.Component {
    state = {
        fields: {
            name: '',
            email: ''
        },
        fieldErrors: {},
        people: []
    };

    onFormSubmit = (event) => {
        const people = this.state.people;
        const person = this.state.fields;

        event.preventDefault();

        if (this.validate()) return;

        this.setState({
            people: people.concat(person),
            field: {
                name: '',
                email: ''
            },
        });
    };

    onInputChange = ({ name, value, error}) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({ fields, fieldErrors });
    };

    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

        if (!person.name) return true;
        if (!person.email) return true;
        if (errMessages.length) return true;

        return false;
    };

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>

                <form onSubmit={this.onFormSubmit}>
                    {/* <input 
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                    />
                    <span style={{ color: 'red' }}>{this.state.fieldErrors.name}</span> */}
                    <Field 
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        validate={val => (val ? false : 'Name Required')}
                    />
                    <br />
                    {/* <input 
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                    />
                    <span style={{ color: 'red' }}>{this.state.fieldErrors.email}</span> */}
                    <Field 
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={val => (val ? false : 'Name Required')}
                    />
                    <br />
                    <input 
                        type='submit'
                        disabled={this.validate()}
                    />
                </form>

                <div>
                    <h3>People</h3>
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