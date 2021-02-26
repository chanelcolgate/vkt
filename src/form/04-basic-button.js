import React from 'react';

export default class Four extends React.Component {
    state = { names: []};

    onFormSubmit = (event) => {
        const name = this.refs.name.value;
        const names = [ ...this.state.names, name ];
        this.setState({ names: names });
        console.log(this.state.names);
        this.refs.name.value = '';
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>

                <form onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder='Name'
                        ref='name'
                    />
                    <input 
                        type='submit'
                    />
                </form>

                <div>
                    <h3>Name</h3>
                    <ul>
                        {this.state.names.map((name, i) => <li key={i}>{name}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}