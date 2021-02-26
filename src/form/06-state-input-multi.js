import React from 'react';

export default class Six extends React.Component {
    state = {
        fields: {
            name: '',
            email: ''
        },
        people: []
    };

    onFormSubmit = (event) => {
        const people = [...this.state.people, this.state.fields];
        this.setState({
            fields: {
                name: '',
                email: ''
            },
            people: people
        });
        event.preventDefault();
    };

    onInputChange = (event) => {
        const fields = Object.assign({}, this.state.fields);
        fields[event.target.name] = event.target.value;
        this.setState({fields:fields});
    };

    render() {
        return(
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                    />
                    <input 
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                    />
                    <input 
                        type='submit'
                    />
                </form>
                <div>
                    <h3>People</h3>
                    <ul>
                        {this.state.people.map(({ name, email }, i) => 
                            <li key={i}>{name} ({email})</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}