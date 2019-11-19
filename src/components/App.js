import React, { Component } from 'react';
import { TopBar } from './TopNavBar';
import { Main } from './Main';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopBar />
                <Main />
            </div>
        );
    }
}

export default App;
