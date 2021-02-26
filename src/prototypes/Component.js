import React from 'react';
import PropTypes from 'prop-types';

class User {
    constructor(name) {
        this.name = name
    }
}

class Component extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        totalCount: PropTypes.number,
        on: PropTypes.bool,
        onPress: PropTypes.func,
        level: PropTypes.oneOf([
            'debug', 'info', 'warning', 'error'
        ]),
        user: PropTypes.instanceOf(User),
    }

    render() {
        const {user} = this.props
        const {author} = this.props
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{this.props.totalCount}</div>
                <div>{this.props.on ? 'On' : 'Off'}</div>
                <div>{this.props.level}</div>
                <div>
                    <h3>{user.name}</h3>
                </div>
            </div>
        );
    }
}

export {
    Component,
    User
}