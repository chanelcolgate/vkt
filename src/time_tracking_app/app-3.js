import React from 'react';

class TimerDashboard extends React.Component {
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList />
                    <ToggleableTimerForm />
                </div>
            </div>
        );
    }
}