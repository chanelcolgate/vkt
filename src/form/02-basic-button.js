import React from 'react';

export default class Two extends React.Component {
    onButtonClick = (event) => {
        const btn = event.target;
        console.log(`The user clicked ${btn.name}: ${btn.value}`);
    };

    render() {
        return (
            <div>
                <h1>What do you think of React?</h1>

                <button
                    name='button-1'
                    value='great'
                    onClick={this.onButtonClick}
                >
                    Great
                </button>
                <button
                    name='button-2'
                    value='amazing'
                    onClick={this.onButtonClick}
                >
                    Amazing
                </button>
            </div>
        )
    }
}