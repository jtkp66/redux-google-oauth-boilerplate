import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={PageOne} />
                    <Route path="/two" exact component={PageTwo} />
                    <Route path="/three" exact component={PageThree} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
