import React from 'react';
import ProductList from '../voting-app/app-1.js'; 
import LineChart from '../chart_js/app-1.js';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const Route = ({ path, component }) => {
    const pathname = window.location.pathname;
    if (pathname.match(path)) {
        return (
            React.createElement(component)
        );
    } else {
        return null;
    }
};

const Link = ({ to, children }) => (
    <a
        onClink={(e) => {
            e.preventDefault();
            history.push(to);
        }}
        href={to}
    >
        {children}
    </a>
)

class App extends React.Component {
    componentDidMount() {
        history.listen(() => this.forceUpdate());
    }

    render() {
        return (
            <div className='ui text container'>
                <h2 className='ui dividing header'>
                    Which body of water?
                </h2>

                <ul>
                    <li>
                        <Link to='/atlantic'>
                            <code>/atlantic</code>
                        </Link>
                    </li>
                    <li>
                        <Link to='/pacific'>
                            <code>/pacific</code>
                        </Link>
                    </li>
                    <li>
                        <Link to='productlist'>
                            <code>/productlist</code>
                        </Link>
                    </li>
                    <li>
                        <Link to='linechart'>
                            <code>/linechart</code>
                        </Link>
                    </li>
                </ul>

                <hr />

                <Route path='/atlantic' component={Atlantic} />
                <Route path='/pacific' component={Pacific} />
                <Route path='/productlist' component={ProductList} />
                <Route path='/linechart' component={LineChart} />
            </div>
        );
    }
}

const Atlantic = () => (
    <div>
        <h3>Atlantic Ocean</h3>
        <p>
            The Atlantic Ocean covers approximately 1/5th of the
            surface of the earth.
        </p>
    </div>
)

const Pacific = () => (
    <div>
        <h3>Pacific Ocean</h3>
        <p>
            Ferdinand Magellan, a Portuguese explorer, named the ocean
            'mar pacifco' in 1521, which means peaceful sea.
        </p>
    </div>
)

export default App;
