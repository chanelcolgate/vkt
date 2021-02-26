import React from 'react';

export default class One extends React.Component {
    onGreatClick = (event) => {
        console.log('The user clicked button-1: great', event);
    };

    onAmazingClick = (event) => {
        console.log('The user clicked button-2: amazing', event);
    };

    render() {
        return (
            <div>
                <h1>What do you think of React?</h1>

                <button
                    name='button-1'
                    value='great'
                    onClick={this.onGreatClick}
                >
                    Great
                </button>
                <button
                    name='button-2'
                    value='amazing'
                    onClick={this.onAmazingClick}
                >
                    Amazing
                </button>
            </div>
        );
    }
}